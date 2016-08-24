var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: {
    type: String,
    trim: true,
    index: true,
    required: true,
    validate: validators.isAlpha()
  },
  lastName: {
    type: String,
    trim: true,
    index: true,
    required: true,
    validate: validators.isAlpha()
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: true,
    validate: validators.isEmail()
  },
  mobile: {
    type: String,
    unique:true,
    index: true,
    required: true,
    validate: validators.isNumeric(),
    validate: validators.isLength(10,10)
  },
  comment:{
    type: String,
    trim: true,
    index: true
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ContactUs', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

};
module.exports = _.assign(module.exports, exports, model);
