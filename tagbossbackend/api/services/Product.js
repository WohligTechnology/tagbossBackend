var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
    index : true
  },
  name : {
    type : String,
    required : true,
    index : true,
    validate : validators.isAlpha(),
    validate : validators.isLength(2,30)
  },
  details : {
    type : String,
    required : true,
    validate : validators.isAlpha()
  },
  image : [{
    type : String,
    required : true
  }],
  manufacturer : {
    type : String,
    required : true
  },
  materialOfConstruct : {
    type : String,
    required : true,
    validate : validators.isAlpha()
  },
  types : {
    type : String,
    required : true,
    validate : validators.isAlpha()
  },
  unitsUsed : {
    type : String,
    required : true,
    validate : validators.isAlpha()
  },
  standardGrade : {
    type : Number,
    required : true
  },
  width : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  odInches : {
    type : Number,
    required : true
  },
  odMm : {
    type : String,
    required : true
  },
  odNb : {
    type : String,
    required : true
  },
  sch : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  thickness : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  totalLength : {
    type : Number,
    validate : validators.isNumeric()
  },
  totalWt : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  price : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  exciseModvat : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  vat : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  cst : {
    type : Number,
    required : true,
    validate : validators.isNumeric()
  },
  godownAddress : {
    type : String,
    required : true
  },
  isMtcCertified : [{
    status : {
      type : String,
      enum : ["original","photocopy","notavailable"],
      default : "not"
    },
    mtcImage : {
      type : String,
      default : ""
    }
  }],
  isThirdPartyCertified : {
    type : Boolean,
    default : false
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Product', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
