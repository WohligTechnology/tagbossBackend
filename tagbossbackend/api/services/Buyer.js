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
var buyerSchema = new Schema({

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
    unique:true,
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
    type: String,
    default: "Processing"
  }
});
buyerSchema.plugin(uniqueValidator);
module.exports = mongoose.model('buyer', buyerSchema);

var models = {
  saveData: function(data, callback) {
    var buyer = this(data);
    if (data.email) {
      this.findOneAndUpdate({
        email: data.email
      }, data).exec(function(err, updated) {
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
      buyer.save(function(err, created) {
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
