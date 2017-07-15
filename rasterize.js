"use strict";
// https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js
var page = require('webpage').create();
var system = require('system');
var address, output, size, pageWidth, pageHeight;

address = system.args[1];
output = system.args[2];
var pageWidth = 1920;
var pageHeight = 1080;

page.viewportSize = { width: pageWidth*3, height: pageHeight*1.2 };
page.clipRect = { top: 0, left: pageWidth-10, width: pageWidth, height: pageHeight };
page.zoomFactor = 2.12;

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit(1);
    } else {
        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 800);
    }
});
