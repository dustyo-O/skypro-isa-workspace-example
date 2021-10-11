window.addEventListener('load', () => {
  var imgElems = document.querySelectorAll('.logged-image');
  for (var i = 0, len = imgElems.length; i < len; i++) {
    var url = imgElems[i].src || imgElems[i].href;
    if (url && url.length > 0) {
      var iTime = performance.getEntriesByName(url)[0];
      console.log(url + ' > ' + iTime.transferSize); // or encodedBodySize, decodedBodySize
    }
  }
});
