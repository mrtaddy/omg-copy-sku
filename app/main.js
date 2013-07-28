/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var information = {sku: sku, url: url};

  alert(JSON.stringify(information, null, 2));
}());
