(() => {
  // Called when the user clicks on the browser action
  chrome.browserAction.onClicked.addListener(() => {
    // Reference: https://developer.chrome.com/extensions/tabs#method-executeScript
    chrome.tabs.executeScript(null, { file: 'content.js' });
  });
})();
