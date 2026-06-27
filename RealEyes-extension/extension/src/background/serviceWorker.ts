/**
 * DeepGuard Background Service Worker (MV3)
 * Handles tab screenshot capture and API calls to the backend.
 * Receives messages from content scripts and sends back results.
 */

import {
  analyzeImageBase64,
} from "../shared/api";

// ── Message Routing ────────────────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      switch (message.type) {

        // ── Capture visible tab region + analyze ───────────────────────────────
        case "CAPTURE_REGION": {
          const { x, y, w, h } = message.payload;
          const tabId = sender.tab?.id;
          if (!tabId) { sendResponse({ error: "No tab id" }); break; }

          const dataUrl = await captureTabScreenshot(tabId);
          const cropped = await cropImage(dataUrl, x, y, w, h);
          sendResponse({ base64: cropped });
          break;
        }

        // ── Analyze image by base64 ────────────────────────────────────────────
        case "ANALYZE_IMAGE_BASE64": {
          const result = await analyzeImageBase64(message.payload.base64);
          sendResponse(result);
          break;
        }

        default:
          sendResponse({ ok: true });
      }
    } catch (err) {
      sendResponse({
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }
  })();
  return true; // Keep message channel open for async response
});

// ── Tab Screenshot ─────────────────────────────────────────────────────────────
async function captureTabScreenshot(tabId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab(
      { format: "png" },
      (dataUrl) => {
        if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message));
        if (!dataUrl) return reject(new Error("captureVisibleTab returned no data"));
        resolve(dataUrl);
      }
    );
  });
}

// ── Image Cropping ─────────────────────────────────────────────────────────────
async function cropImage(
  dataUrl: string,
  x: number,
  y: number,
  w: number,
  h: number
): Promise<string> {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);

  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bitmap, x, y, w, h, 0, 0, w, h);

  const croppedBlob = await canvas.convertToBlob({ type: "image/png" });
  return await blobToBase64(croppedBlob);
}

// ── Utility ────────────────────────────────────────────────────────────────────
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
