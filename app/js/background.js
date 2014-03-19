console.log('Background script (background.js):');

var selectedTabId = null;
var results = {};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(function (request, sender, cb) {
  // Show the page action for the tab that the sender (content script)
  // was on.

  //chrome.pageAction.show(sender.tab.id);
  //results[sender.tab.id] = request;
  var selectedTabId = sender.tab.id;
  var result = {};

  chrome.pageAction.show(sender.tab.id);

  // Save results in result
  bsproof.verify(request.domain, request.asset, request.liability, function (err, res) {
    chrome.pageAction.show(sender.tab.id);

    if (res.success) {
      //solvent
      chrome.pageAction.setIcon({tabId: sender.tab.id, path: '/images/icon-solvent.png'});
    }
    else {
      //insolvent
      chrome.pageAction.setIcon({tabId: sender.tab.id, path: '/images/icon-insolvent.png'});
    }

    results[sender.tab.id] = { err: err, res: res };
  });

});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedTabId = tabId;
});

