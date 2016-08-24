var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
  // buyerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Buyer'
  // },
  contactPerson:{
    type:String,
    required:true,
    validate: validators.isAlpha()
  },
  registeredName:{
    type:String,
    required:true,
    validate: validators.isAlpha()
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: true,
    validate: validators.isEmail()
  },
  alternateEmail: {
    type: String,
    unique: true,
    index: true,
    validate: validators.isEmail()
  },
  telephone:{
    type:Number,
    required:true
  },
  mobile: {
    type: String,
    unique: true,
    index: true,
    required: true,
    validate: validators.isNumeric(),
    validate: validators.isLength(10,10)
  },
  fullAddress:{
    address:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    pincode:{
      type:Number,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    country:{
      type: Schema.Types.ObjectId,
        ref: 'Country'
    }
  },
  companyPanNo:{
    type:String,
    required:true
  },
  vatTinNo:{
    type:String,
    required:true
  },
  cstTinNo:{
    type:Number,
    required:true
  },
  exciseDetails:{
    registrationNo:{
      type:String,
      required:true
    },
    range:{
      type :String,
      required:true
    },
    commissionerate:{
      type:Number,
      required:true
    },
    division:{
      type:String,
      required:true
    },
    exciseAddress:{
      type:String,
      required:true
    }
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('BuyerCompany', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
