[![Build Status](https://travis-ci.org/lazojs/lazo-handlebars.svg?branch=master)](https://travis-ci.org/lazojs/lazo-handlebars)

# lazo-handlebars

Lazo [template engine wrapper](https://github.com/lazojs/lazo/wiki/Templates) for [Handlebars](https://www.npmjs.com/package/handlebars).

## Usage

```javascript
// app/application.js
define(['lazoApp', 'app/lazo-handlebars/index'], function (LazoApp, lazoHandlebars) {

    'use strict';

    LazoApp.extend({

        initialize: function (callback) {
            this.registerTemplateEngine('handlebars', 'hbs', lazoHandlebars, 'app/lazo-handlebars/index');
            callback();
        }

    });

});
```