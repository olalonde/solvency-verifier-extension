console.log('Background script (background.js):');


var selectedTabId = null;
var results = {};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(function (request, sender, cb) {
  // Show the page action for the tab that the sender (content script)
  // was on.
  chrome.pageAction.show(sender.tab.id);
  results[sender.tab.id] = request;

  cb();
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedTabId = tabId;
});

