/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var objectid = require('mongodb').ObjectID;
var mongoose = require('mongoose'),
  validators = require('mongoose-validators');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var SellerSchema = new Schema({

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
  firmName: {
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
    unique: true,
    index: true,
    required: true,
    validate: validators.isNumeric(),
    validate: validators.isLength(10,10)
  },
  password: {
    type: String,
    required: true
  },
  isActiveUser: {
    type: Boolean,
    default: false
  },
  review:  [
    {
      buyerId: {
      type: Schema.Types.ObjectId,
      ref: 'Buyer'
    },
      starRating : {
        type: Number
      },
      comment: {
        type: String
      },
      timeStamp:{
        type:Date,
        default:Date.now
      }
    }
  ]

});
SellerSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Seller', SellerSchema);

var models = {
  saveData: function(data, callback) {
    var Seller = this(data);
    if (data._id) {
      this.findOneAndUpdate({
        "_id":data._id

      }, data).populate("Buyer","firmName").exec(function(err, updated) {
        console.log("HI");
        if (err) {
          console.log(err);
          callback(err, null);
        } else if (updated) {
          console.log("updated");
          callback(null, updated);
        } else {
          callback("Invalid data found!", false);
        }
      });
    } else {
      console.log(data);
      Seller.save(function(err, created) {
        if (err) {
          callback(err, null);
        } else if (created) {
          console.log("Created");
          callback(null, created);
        } else {
          callback("Invalid data found!!!", false);
        }
      });
    }
  },



  updateReviews: function(data, callback) {
console.log("in",data);

    if (data._id) {
      this.update({
        "_id": data._id
      }, {$push: {"review": data.review}},
       function(err, updated) {
        console.log(updated);
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, updated);
        }
      }

      );
    }else{
console.log("Enter ID");
    }
  },

  deleteData: function(data, callback) {
    this.findOneAndRemove({
      email: data.email
    }, function(err, deleted) {
      if (err) {
        console.log("error");
        callback(err, null);
      } else if (deleted) {
        callback(null, deleted);
      } else {
        callback("Invalid Email!!!", false);
      }
    });
  },

  getAllData: function(data, callback) {
    this.find({}).exec(function(err, found) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else if (found && found.length > 0) {
        console.log("found");
        callback(null, found);
      } else {
        callback("Invalid data found!!!", false);
      }
    });
  },

  userLogin: function(data, callback) {
    this.findOne({
      "email": data.email,
      "password": data.password
    }).exec(function(err, found) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else if (found) {
        callback(null, found);
      } else {
        callback("Please Enter Correct Email and Password", false);
      }
    });
  },

  getOneData: function(data, callback) {
    this.findOne({
      "_id": data._id
    }).exec(function(err, found) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else if (found) {
        callback(null, found);
      } else {
        callback("Invalid data found!!!", false);
      }
    });
  }
};

module.exports = _.assign(module.exports, models);
