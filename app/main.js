/*jshint strict:false, browser:true */
(function bookmarklet() {
  var name = strip($('#content h2[itemprop="name"]').text());
  var sku = $('#content .images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^/]*)$/)[1];
  var $properties = $('#product-properties').find('li');
  var brand = strip($properties.eq(0).find('.value a').text());
  var color = strip($properties.eq(1).find('.value a').text());
  var lenswidth = strip($properties.eq(2).find('.value a').text());
  var lensheight = strip($properties.eq(3).find('.value a').text());
  var bridgewidth = strip($properties.eq(4).find('.value a').text());
  var templewidth = strip($properties.eq(5).find('.value a').text());
  var shape = strip($properties.eq(6).find('.value a').text());
  var rimshape = strip($properties.eq(7).find('.value a').text());
  var material = strip($properties.eq(8).find('.value a').text());
  var temple_material = strip($properties.eq(9).find('.value a').text());
  var nosepad = strip($properties.eq(10).find('.value a').text());
  var fitting = strip($properties.eq(11).find('.value a').text());

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
