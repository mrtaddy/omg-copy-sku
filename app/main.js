/*jshint strict:false, browser:true */
(function bookmarklet() {
  var name = $('#content h2[itemprop="name"]').text();
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var properties = $('#product-properties');
  var brand = strip($(properties.find('dd')[0]).text());
  var color = strip($(properties.find('dd')[1]).text());
  var lenswidth = strip($(properties.find('dd')[2]).text());
  var lensheight = strip($(properties.find('dd')[3]).text());
  var bridgewidth = strip($(properties.find('dd')[4]).text());
  var templewidth = strip($(properties.find('dd')[5]).text());
  var shape = strip($(properties.find('dd')[6]).text());
  var rimshape = strip($(properties.find('dd')[7]).text());
  var material = strip($(properties.find('dd')[8]).text());
  var temple_material = strip($(properties.find('dd')[9]).text());
  var nosepad = strip($(properties.find('dd')[10]).text());
  var fitting = strip($(properties.find('dd')[11]).text());

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

  function strip(string) {
    return string.trim().replace(/[\n\r]/g, '');
  }
}());
