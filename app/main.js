/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = document.body.querySelector('#content .images').dataset.omgProductSku;

  window.prompt('Copy to clipboard: ⌘+C or Ctrl+C then Enter', sku);
}());
