var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
    // sellerId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Seller',
    //   index : true
    // },
    contactPerson : {
      type : String,
      required : true,
      validate : validators.isAlpha(),
      validate : validators.isLength(2,30)
    },
    registeredName : {
      type : String,
      required : true,
      validate : validators.isAlpha(),
      validate : validators.isLength(2,30)
    },
   email : {
      type : String,
      required : true,
      unique : true,
      validate : validators.isEmail()
    },
    alternateEmail : {
      type : String,
      unique : true,
      validate : validators.isEmail(),
      default : ""
    },
    telephone : {
      type : Number,
      required : true,
      validate : validators.isNumeric(),
      validate : validators.isLength(8,12)
    },
    mobile : {
      type : Number,
      required : true,
      validate : validators.isNumeric(),
      validate : validators.isLength(10,12)
    },
    fullAddress : {
      address : {
        type : String,
        required : true
      },
      city : {
        type : String,
        required : true,
        validate : validators.isAlpha()
      },
      pincode : {
        type : Number,
        required : true,
        validate : validators.isNumeric(),
        validate : validators.isLength(6,8)
      },
      state : {
        type : String,
        required : true,
        validate : validators.isAlpha(),
        validate : validators.isLength(2,20)
      }//,
      // country : {
      //   type: Schema.Types.ObjectId,
      //   ref: 'Country',
      //   index : true
      // }
    },
    briefProfile : {
      type : String,
      required : true
    },
    panNo : {
      type : String,
      required : true
    },
    vatTinNo : {
      type : String,
      required : true
    },
    cstTinNo : {
      type : String,
      required : true
    },
    exciseDetails : {
      registrationNo : {
        type : String,
        required : true
      },
      range : {
        type : Number,
        required : true
      },
      commissioneRate : {
        type : Number,
        required : true
      },
      division : {
        type : String,
        required : true
      },
      exciseAddress : {
        type : String,
        required : true
      }
    },
    bankDetails :{
      bankAccountNo : {
        type : String,
        required : true
      },
      bankName : {
        type : String,
        required : true
      },
      branch : {
        type : String,
        required : true
      },
      ifscCode : {
        type : String,
        required : true
      },
      cancelledCheque : {
        type : String,
        default : ""
      }
    },
    importExportCode : {
      type : String,
      required : true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('SellerCompany', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
