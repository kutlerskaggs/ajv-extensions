'use strict';

const Ajv = require('ajv');
const ajvExtensions = require('../../lib');


describe(`basic tests`, function() {
    it(`should not throw`, function() {
        const ajv = new Ajv();
        ajv.keyword('$tests', ajvExtensions);
        global.ajv = ajv;
    });
});
