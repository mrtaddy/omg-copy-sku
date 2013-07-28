/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');

  window.prompt('Copy to clipboard: ⌘+C or Ctrl+C then Enter', sku);
}());
