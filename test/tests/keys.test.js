'use strict';

const expect = require('chai').expect;
const keys = require('../schemas/keys.json');

describe(`keys`, function() {

    before(function() {
        ajv.addCondition('has-status', function(data) {

        });
    });

    it(`should work`, function() {
        const validate = ajv.getSchema('keys');
        expect(validate({ a: 'foo', status: 'draft' })).to.equal(true);
        expect(validate({ b: 'bar', status: 'published' })).to.equal(true);
        expect(validate({ d: 'baz', status: 'unknown' })).to.equal(true);
    });
});
