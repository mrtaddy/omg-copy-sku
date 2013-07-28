/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');
  var information = {sku: sku};

  alert(JSON.stringify(information, null, 2));
}());
