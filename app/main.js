/*jshint strict:false, browser:true */
/*global $:false, alert:false */
(function bookmarklet() {
  function strip(string) {
    return string.trim().replace(/[\n\r]/g, '');
  }

  function nthProperties($properties, n) {
    return strip($properties.eq(n).find('.value').text());
  }

  var $content = $('#content')
  var name = strip($content.find('h2[itemprop="name"]').text());
  var sku = $content.find('.images').data('omgProductSku');
  var url = $('meta[rel="canonical"]').attr('href');
  var permalink = url.match(/\/([^\/]*)$/)[1];
  var $properties = $('#product-properties').find('li');
  var brand = nthProperties($properties, 0);
  var color = nthProperties($properties, 1);
  var lenswidth = nthProperties($properties, 2);
  var lensheight = nthProperties($properties, 3);
  var bridgewidth = nthProperties($properties, 4);
  var templewidth = nthProperties($properties, 5);
  var shape = nthProperties($properties, 6);
  var rimshape = nthProperties($properties, 7);
  var material = nthProperties($properties, 8);
  var templeMaterial = nthProperties($properties, 9);
  var nosepad = nthProperties($properties, 10);
  var fitting = nthProperties($properties, 11);

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
    templeMaterial: templeMaterial,
    nosepad: nosepad,
    fitting: fitting
  };

  alert(JSON.stringify(information, null, 2));
}());
