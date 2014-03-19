console.log('Content script running wow');

var Tree = blproof.Tree;

var lproof_url = $('meta[name=x-liabilities-proof]').first().attr('data');
var aproof_url = $('meta[name=x-assets-proof]').first().attr('data');

// @TODO handle errors

    //var ptree = new Tree();
    //ptree.fromObjectGraph(data);

if (lproof_url && aproof_url) {

  var args = {
    domain: document.location.hostname,
    liability: [ lproof_url ],
    asset: [ aproof_url ]
  };

  chrome.extension.sendRequest(args, function(res) {});
}
