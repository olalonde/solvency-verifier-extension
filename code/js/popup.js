$(function () {
  var bg_page = chrome.extension.getBackgroundPage();

  console.log(bg_page);
  var result = bg_page.results[bg_page.selectedTabId];

  console.log(result);

  $('#lproof').hide();
  $('#aproof').hide();

  if (result.lproof && result.lproof.verify.success) {
    $('#lproof').show();
    var lproof = result.lproof;
    var data = lproof.verify.data;

    $('#user').html(data.user);
    $('#value').html(data.value / 1e8);
    $('#root_hash').html(lproof.root.hash);
    $('#root_value').html(lproof.root.value / 1e8);
    //document.getElementById('address').innerText = address;
  }

  if (result.aproof /*&& result.aproof.balance*/) {
    $('#aproof').show();
    var aproof = result.aproof;

    $('#site').html(aproof.raw.id);
    $('#balance').html(aproof.balance / 1e8);
    //document.getElementById('address').innerText = address;
  }

  if (result.delta !== null) {
    $('#solvency').show();
    var delta = result.delta;
    delta = delta / 1e8
    if (delta >= 0) {
      $('#solvent').show();
      $('#solvent .amount').html(delta);
    }
    else {
      $('#insolvent').show();
      $('#insolvent .amount').html(Math.abs(delta));
    }
  }
});
