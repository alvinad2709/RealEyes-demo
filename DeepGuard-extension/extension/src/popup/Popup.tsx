import { useState, useEffect } from "react";
import "./Popup.css";

export default function Popup() {
  const [status, setStatus] = useState("Ready to detect deepfakes");
  const [backendOk, setBackendOk] = useState<boolean | null>(null);

  /**
   * Ensures the content script is injected into the active tab, then sends
   * the given message. Handles restricted pages (chrome://, edge://, etc.)
   * gracefully instead of throwing "Receiving end does not exist".
   */
  const sendToActiveTab = async (message: object) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) return;

    try {
      await chrome.tabs.sendMessage(tab.id, message);
    } catch {
      // Content script not injected yet — inject it first
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
        // Small delay to let script initialize
        await new Promise((r) => setTimeout(r, 100));
        await chrome.tabs.sendMessage(tab.id, message);
      } catch {
        // Tab is a restricted page (chrome://, webstore, etc.)
        // Nothing we can do here
      }
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((r) => r.ok && setBackendOk(true))
      .catch(() => setBackendOk(false));
  }, []);

  const handleRegionDetect = async () => {
    setStatus("Select a region on the page...");
    await sendToActiveTab({ type: "START_REGION_SELECT" });
    window.close();
  };

  return (
    <div className="w-[350px] min-h-[280px] bg-deepBase flex flex-col gap-3 font-sans">

      {/* ── Header ── */}
      <div className="flex items-center justify-between pt-4 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 flex-shrink-0">
            <img src="icons/icon128.png" alt="RealEyes" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[20px] font-bold tracking-tight text-deepRed">RealEyes</span>
            <span className="text-[10px] text-textMuted font-medium">AI Deepfake Detector</span>
          </div>
        </div>

        {/* Backend pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-deepBorder bg-deepCard">
          <span className={`w-1.5 h-1.5 rounded-full ${backendOk === true ? 'bg-deepGreen' : backendOk === false ? 'bg-deepRed' : 'bg-yellow-500'} animate-pulse`} />
          <span className="text-[10px] font-semibold text-textMuted">
            {backendOk === true ? 'Online' : backendOk === false ? 'Offline' : '...'}
          </span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-deepBorder mx-4" />

      {/* ── Feature card ── */}
      <div className="flex flex-col gap-2 p-[13px] pt-0">

        {/* Real-time Region Detection */}
        <div className="bg-deepCard border border-deepBorder rounded-xl p-3.5 hover:border-deepRed/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-deepBorder flex items-center justify-center flex-shrink-0">
              <svg className="w-[17px] h-[17px] text-textMuted" viewBox="0 0 24 24" fill="none">
                <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-semibold text-white">Real-time Detection</h3>
              <p className="text-[11px] text-textMuted">Select any region to analyze</p>
            </div>
            <button
              onClick={handleRegionDetect}
              disabled={backendOk === false}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-deepRed bg-deepRed/10 border border-deepRed/30 hover:bg-deepRed hover:text-white hover:border-deepRed transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
              </svg>
              Select
            </button>
          </div>
          <div className="mt-2.5 px-2.5 py-1.5 bg-deepBase border border-deepBorder rounded-lg">
            <span className="text-[10.5px] text-textMuted">Cursor becomes a crosshair. Drag to select any image or video area.</span>
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <div className="text-center text-[10px] text-textMuted font-medium pt-1 pb-3">
          <p>RealEyes © 2026 · All protocols operational.</p>
      </div>
    </div>
  );
}
