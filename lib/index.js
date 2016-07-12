'use strict';

function AjvExtensions() {
    this.conditions = {};
    this.tests = {};
}

AjvExtensions.prototype.addTest = function(schema, validator) {

};


/**
 * Add a new condition to this extension
 * @param  {String} name - the name of this condition, used in test defintions
 * @param  {Function} fn - function that determines whether or not to execute the test
 * @return {Boolean} - whether or not to run this test
 */
AjvExtensions.prototype.addCondition = function(name, fn) {
    if (typeof name !== 'string') {
        throw new Error('Invalid name passed to #addCondition');
    }
    if (typeof fn !== 'function') {
        throw new Error('Invalid condition passed to #addCondition');
    }
    this.conditions[name] = fn;
};

AjvExtensions.prototype.validate = function (schema, data, parentSchema, dataPath, parentObject, propertyName) {
    const self = this;


};
