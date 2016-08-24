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
var buyerAddressSchema = new Schema({
  // buyerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'buyer',
  //   index: true,
  //   required: true
  // },

  billingAddress:{
    type:String
  },
  diliveryAddress: [{
    type: String
  }]
});
buyerAddressSchema.plugin(uniqueValidator);
module.exports = mongoose.model('buyerAddress', buyerAddressSchema);

var models = {
  saveData: function(data, callback) {
    var buyerAddress = this(data);
    if (data._id) {
      this.update({
        "_id":data._id,"buyerId": data.buyerId
      }, {
        $push: {
         "buyerAddress": data.buyerAddress
        }
      },
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
    } else {
      console.log(data);
      buyerAddress.save(function(err, created) {
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

  deleteData: function(data, callback) {
    this.findOneAndRemove({
      "email": data.email
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
    this.find({}).populate("buyer", "email").exec(function(err, found) {
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
    }).populate("buyer", "email").exec(function(err, found) {
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
    }).populate("buyer", "email").exec(function(err, found) {
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
