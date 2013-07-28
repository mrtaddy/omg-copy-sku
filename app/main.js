/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var properties = $('#product-properties');
  var brand = $(properties.find('dd')[0]).find('a').text();

  var information = {sku: sku, url: url, permalink: permalink, brand: brand};

  alert(JSON.stringify(information, null, 2));
}());
