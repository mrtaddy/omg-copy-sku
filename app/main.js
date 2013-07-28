/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = document.body.querySelector('#content .images').getAttribute('data-omg-product-sku');

  window.prompt('Copy to clipboard: ⌘+C or Ctrl+C then Enter', sku);
}());
