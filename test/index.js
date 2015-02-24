var chai = require('chai');
var path = require('path');
var fs = require('fs-extra');
var requirejs = require('requirejs');
var loader = requirejs.config({
    baseUrl: '.',
    paths: {
        handlebars: 'dist/app/handlebars/handlebars.amd'
    }
});

// resourceType, resourceName, template, destName, dest, options, callback
describe('lazo-handlebars', function () {

    it('should compile and execute a template', function (done) {

        loader(['dist/app/lazo-handlebars/index'], function (lazoHandlebars) {;
            var template = lazoHandlebars.compile('Hello. My name is {{name}}.');

            chai.expect(lazoHandlebars.execute(template, { name: 'Jason' })).to.be.equal('Hello. My name is Jason.');
            done();
        }, function (err) {
            throw err;
        });

    });

});