console.log('Content script running wow');

var Tree = blproof.Tree;

var root_url = $('meta[name=blproof-root]').first().attr('data');
var ptree_url = $('meta[name=blproof-partialtree]').first().attr('data');


if (!root_url || !ptree_url) return;

console.log(root_url);
console.log(ptree_url);

var xhr = new XMLHttpRequest();

// @TODO handle errors

$.get(root_url, function (data) {
  var root_data = data.root;
  $.get(ptree_url, function (data) {
    var ptree = new Tree();
    ptree.fromObjectGraph(data);

    var result = blproof.verifyTree(ptree, root_data);
    if (result.success) {
      result.data.root = root_data;
      chrome.extension.sendRequest(result, function(res) {});
    }
    else {
      alert('error! ' + result.error);
      console.log(result.error);
    }
  });
});
