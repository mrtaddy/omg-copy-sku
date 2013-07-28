/*jshint strict:false, browser:true */
(function bookmarklet() {
  var name = $('#content h2[itemprop="name"]').text();
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var properties = $('#product-properties');
  var brand = $(properties.find('dd')[0]).find('a').text().trim();
  var color = $(properties.find('dd')[1]).text().trim();
  var lenswidth = $(properties.find('dd')[2]).text().trim().replace(/[\n\r]/g, '');
  var lensheight = $(properties.find('dd')[3]).text().trim().replace(/[\n\r]/g, '');
  var bridgewidth = $(properties.find('dd')[4]).text().trim().replace(/[\n\r]/g, '');
  var templewidth = $(properties.find('dd')[5]).text().trim().replace(/[\n\r]/g, '');
  var shape = $(properties.find('dd')[6]).text().trim();
  var rimshape = $(properties.find('dd')[7]).text().trim();
  var material = $(properties.find('dd')[8]).text().trim();
  var temple_material = $(properties.find('dd')[9]).text().trim();
  var nosepad = $(properties.find('dd')[10]).text().trim();
  var fitting = $(properties.find('dd')[11]).text().trim();

  var information = { name: name,
    sku: sku,
    url: url,
    permalink: permalink,
    brand: brand,
    color: color,
    lenswidth: lenswidth,
    lensheight: lensheight,
    bridgewidth: bridgewidth,
    templewidth: templewidth,
    shape: shape,
    rimshape: rimshape,
    material: material,
    temple_material: temple_material,
    nosepad: nosepad,
    fitting: fitting
  };

  alert(JSON.stringify(information, null, 2));
}());
