// the code below is run when the extention is installed.
// so here we are setting the initial state for our extention
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
