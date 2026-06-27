/**
 * Content Script Entry Point
 * Listens for messages from the popup/service worker and delegates
 * to the region selector feature module.
 */

import { activateRegionSelector } from "./regionSelector";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  switch (message.type) {
    case "START_REGION_SELECT":
      activateRegionSelector();
      break;

    default:
      break;
  }
  sendResponse({ ok: true });
  return true;
});
