$(function () {
  var bg_page = chrome.extension.getBackgroundPage();
  var results = bg_page.results[bg_page.selectedTabId];

  if (!results) {
    $('#content').html('Loading...');
    return;
  }

  function log (msg) {
    if (typeof msg === 'object') {
      msg = JSON.stringify(msg, null, 2);
    }
    $('#log').append(msg + '\n');
  }

  log(results);

  var locals = results;
  var html = templates['popup'](locals);

  $('#content').html(html);

  //$('#lproof').hide();
  //$('#aproof').hide();

  //if (result.lproof && result.lproof.verify.success) {
    //$('#lproof').show();
    //var lproof = result.lproof;
    //var data = lproof.verify.data;

    //$('#user').html(data.user);
    //$('#value').html(data.value);
    //$('#root_hash').html(lproof.root.hash);
    //$('#root_value').html(lproof.root.value);
    ////document.getElementById('address').innerText = address;
  //}

  //if (result.aproof [>&& result.aproof.balance<]) {
    //$('#aproof').show();
    //var aproof = result.aproof;

    //$('#site').html(aproof.raw.id);
    //$('#balance').html(aproof.balance);
    ////document.getElementById('address').innerText = address;
  //}

  //if (result.delta !== null) {
    //$('#solvency').show();
    //var delta = result.delta;
    //if (delta >= 0) {
      //$('#solvent').show();
      //$('#solvent .amount').html(delta);
    //}
    //else {
      //$('#insolvent').show();
      //$('#insolvent .amount').html(Math.abs(delta));
    //}
  //}
});
