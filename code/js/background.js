console.log('Background script (background.js):');


var Tree = blproof.Tree;

var selectedTabId = null;
var results = {};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(function (request, sender, cb) {
  // Show the page action for the tab that the sender (content script)
  // was on.

  //chrome.pageAction.show(sender.tab.id);
  //results[sender.tab.id] = request;
  if (!request.lproof && !request.aproof) return;
  var result = {};

  // Save results in result
  async.parallel([
    //Verify liability proof
    function (cb) {
      if (!request.lproof) return cb();
      var lproof = {};
      result.lproof = lproof;

      //console.log(request);
      lproof.raw = request.lproof;

      var ptree = new Tree();
      ptree.fromObjectGraph(request.lproof.partial_tree);
      //console.log(ptree);

      lproof.ptree = ptree;

      //console.log(ptree.root());
      lproof.verify = blproof.verifyTree(ptree, ptree.root().data);
      lproof.root = ptree.root().data;

      cb();
    },
    // Verify assets proof
    function (cb) {
      if (!request.aproof) return cb();
      var aproof = {};
      result.aproof = aproof;

      aproof.raw = request.aproof;
      var addresses = baproof.getAddresses(aproof.raw);
      baproof.getBalance(addresses, function (err, total) {
        aproof.balance = total;
        cb(err);
      });
    }
  ], function (err) {
    if (err) return alert(err);
    // Check if site is solvent
    if (result.aproof && result.lproof) {
      var delta = result.aproof.balance - result.lproof.root.value;
      result.delta = delta;
      if (delta >= 0) {
        //solvent 
        chrome.pageAction.setIcon({tabId: sender.tab.id, path: '/images/icon-solvent.png'});
      }
      else {
        //insolvent
        chrome.pageAction.setIcon({tabId: sender.tab.id, path: '/images/icon-insolvent.png'});
      }
    }

    console.log(result);
    results[sender.tab.id] = result;
    chrome.pageAction.show(sender.tab.id);
  });

});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedTabId = tabId;
});

