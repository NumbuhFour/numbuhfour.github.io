var gm = require('gm');
var path = require('path');
var fs = require('fs');
var path = require('path');

var targetSize = { w: 130, h: 79 };

// Loop through all thumb images
// Make new sizes

var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

walk('../images/', (err, results) => {
    results.forEach( file => {
        var outName = path.dirname(file) + '/thmb_' + path.basename(file);
        if (path.basename(file).startsWith('thmb_')) return; 

        var gfile = gm(file);
        gfile.size((err, val) => {
            if (err || val.width <= targetSize.w || val.height <= targetSize.h) return;

            gfile
            .resize(targetSize.w)
            .write(outName, err => {
                if(err) console.log("Error writing file:", file, err);
            });
        });
    });
});

