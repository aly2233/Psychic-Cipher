const Validator = require('validator');
const validText = require('./valid-text')

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, { min: 10, max: 10000 }))
    errors.text = 'Post must be between 10 and 10000 characters'

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}