$(function () {
  var bg_page = chrome.extension.getBackgroundPage();

  var result = bg_page.results[bg_page.selectedTabId];

  if (result) {
    var data = result.data;
    $('#user').html(data.user);
    $('#value').html(data.value);
    $('#root_hash').html(data.root.hash);
    $('#root_value').html(data.root.value);
    //document.getElementById('address').innerText = address;
  }
});
