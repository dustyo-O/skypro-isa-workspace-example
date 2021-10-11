window.addEventListener('load', () => {
  const imgElems = document.querySelectorAll<HTMLImageElement>('.logged-image');
  for (let i = 0, len = imgElems.length; i < len; i++) {
    const url = imgElems[i].src;

    if (url && url.length > 0) {
      const iTime = performance.getEntriesByName(url)[0] as PerformanceResourceTiming;
      // eslint-disable-next-line no-console
      console.log(url + ' > ' + iTime.transferSize); // or encodedBodySize, decodedBodySize
    }
  }
});
