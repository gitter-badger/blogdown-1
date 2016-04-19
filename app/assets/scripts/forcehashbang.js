// This script runs before Polymer is loaded
forceHashBang();

function forceHashBang() {
  var url = window.location.href;
  var slashes = 0;
  for (var i = 0; i < url.length; i++) {
    if (url[i] === '/') {
      slashes++;
      if (slashes === 3) {
        if (url[i + 1] && url[i + 1] !== '#' && url[i + 2] !== '!') { // HashBang not found
          window.location.href = '/#!' + url.substring(i, url.length);
        }
        break;
      }
    }
  }
}
