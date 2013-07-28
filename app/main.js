/*jshint strict:false, browser:true */
(function bookmarklet() {
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var properties = $('#product-properties');
  var brand = $(properties.find('dd')[0]).find('a').text().trim();
  var color = $(properties.find('dd')[1]).text().trim();
  var lenswidth = $(properties.find('dd')[2]).text().trim().replace(/[\n\r]/g, '');

  var information = {sku: sku, url: url, permalink: permalink, brand: brand, color: color, lenswidth: lenswidth};

  alert(JSON.stringify(information, null, 2));
}());
