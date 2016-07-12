'use strict';

const moment = require('moment');
const pointer = require('json-pointer');

const DATE_FORMATS = ['date', 'time', 'date-time'];

module.exports = {
    /**
     * Greater than
     * @param  {Object} data
     * @param  {*} data.data - the data to validate
     * @param  {String} data.dataPath
     * @param  {Object} data.parentObject
     * @param  {Object} data.parentSchema
     * @param  {String} data.propertyName
     * @param  {*} data.schema - the active json schema
     * @param  {Object} data.test - the active test
     * @return {[type]}      [description]
     */
    gt(data) {
        const type = data.schema.type;
        const format = data.schema.format;
        const ref = data.test.data.ref;
        const value = data.test.data.value;
        const comparison = ref ? pointer.get(data.parentObject, ref) : value;

        if (type === 'number') {
            return data.data > comparison;
        } else if (type === 'string' && typeof format === 'string' && DATE_FORMATS.indexOf(format) !== -1) {
            
        } else {
            return false;
        }
    }
};
