// the code below is run when the extention is installed.
// so here we are setting the initial state for our extention
chrome.runtime.onInstalled.addListener(() => {
  // this is calling an action that the extention can perform
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
