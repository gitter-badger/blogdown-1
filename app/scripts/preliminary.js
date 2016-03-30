forceHash();
importStyle();

function forceHash() {
  var url = window.location.href;
  var slashes = 0;
  for (var i = 0; i < url.length; i++) {
    if (url[i] === '/') {
      slashes++;
      if (slashes === 3) {
        if (url[i + 1] && url[i + 1] !== '#') { // Hash not found
          window.location.href = '/#' + url.substring(i, url.length);
        }
        break;
      }
    }
  }
}

function importStyle() {
  var head = document.querySelector('head');
  var link = document.createElement('link');
  var style = 'default';
  if (localStorage.style) {
    style = localStorage.style;
  }
  link.setAttribute('rel', 'import');
  link.setAttribute('href', '../styles/style-' + style + '.html');
  head.appendChild(link);
  console.log('style-' + style + ' loaded');
}
