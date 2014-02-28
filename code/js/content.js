console.log('Content script running wow');

var Tree = blproof.Tree;

var lproof_url = $('meta[name=x-liabilities-proof]').first().attr('data');
var aproof_url = $('meta[name=x-assets-proof]').first().attr('data');

var xhr = new XMLHttpRequest();

// @TODO handle errors

    //var ptree = new Tree();
    //ptree.fromObjectGraph(data);

var results = {};

async.parallel([
  function (cb) {
    if (!lproof_url) return cb();
    $.get(lproof_url, function (data) {
      results.lproof = data;
      cb();
    });
  },
  function (cb) {
    if (!aproof_url) return cb();
    $.get(aproof_url, function (data) {
      results.aproof = data;
      cb();
    });
  }
], function (err) {
  if (err) return console.error(err);
  chrome.extension.sendRequest(results, function(res) {});
});
