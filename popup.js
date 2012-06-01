// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function click(e) {
  var id = e.target.id;
  chrome.tabs.executeScript(null, { code:"alert('You are now a "+id+"!');" + 'var data=JSON.parse(localStorage["data"]);data.player.armor="'+id+'";data.player.weapon="'+id+'";data.player.name="";localStorage["data"]=JSON.stringify(data);' });
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
