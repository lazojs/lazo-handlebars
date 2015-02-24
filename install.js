var fs = require('fs-extra');
var path = require('path');
var dest = path.join('dist', 'app', 'lazo-handlebars');

fs.readJson('package.json', function (err, pck) {
    if (err) {
        throw err;
    }

    fs.ensureDir(dest, function (err) {
        if (err) {
            throw err;
        }

        fs.copy('src', dest, function (err) {
            if (err) {
                throw err;
            }

            // only used for testing; the application install will copy the handlebars dependency based on the metadata
            var hbsSrc = path.join(path.dirname(path.dirname(require.resolve('handlebars'))), (pck.lazo.dependencies.handlebars[0].main + '.js'));
            var hbsDest = path.join('dist', 'app', 'handlebars', 'handlebars.amd.js');
            fs.copy(hbsSrc, hbsDest, function (err) {
                if (err) {
                    throw err;
                }
            });
        });

    });

});