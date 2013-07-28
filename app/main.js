/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var information = {sku: sku, url: url, permalink: permalink};

  alert(JSON.stringify(information, null, 2));
}());
