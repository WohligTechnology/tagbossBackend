/**
 * buyerAddressController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  save: function(req, res) {
    if (req.body) {
      console.log(req.body);
      buyerAddress.saveData(req.body, function(err, data) {
        if (err) {
          res.json({
            error: err,
            value: false
          });
        } else {
          res.json({
            data: data,
            value: true
          });
        }
      });
    } else {
      res.json({
        value: false,
        data: "Invalid Request!!!"
      });
    }
  },

  delete: function(req, res) {
    if (req.body) {
      if (req.body.email) {
        buyerAddress.deleteData(req.body, function(err, data) {
          if (err) {
            res.json({
              error: err,
              value: false
            });
          } else {
            res.json({
              data: data,
              value: true
            });
          }
        });
      } else {
        res.json({
          value: false,
          data: "Invalid Email !!!",
        });
      }
    } else {
      res.json({
        value: false,
        data: "Invalid Request !!!"
      });
    }
  },

  getAll: function(req, res) {
    if (req.body) {
      buyerAddress.getAllData(req.body, function(err, data) {
        if (err) {
          res.json({
            error: err,
            value: false
          });
        } else {
          res.json({
            data: data,
            value: true
          });
        }
      });
    } else {
      res.json({
        value: false,
        data: "Invalid Request!!!"
      });
    }
  },

  login: function(req, res) {
    if (req.body) {
      if (req.body.email && req.body.password) {
        buyerAddress.userLogin(req.body, function(err, data) {
          if (err) {
            res.json({
              error: err,
              value: false
            });
          } else {
            res.json({
              data: data,
              value: true
            });
          }
        });
      } else {
        res.json({
          value: false,
          data: "Invalid Email !!!",
        });
      }
    } else {
      res.json({
        value: false,
        data: "Invalid Request!!!"
      });
    }
  },
  getOne: function(req, res) {
    if (req.body) {
      if (req.body._id) {
        buyerAddress.getOneData(req.body, function(err, data) {
          if (err) {
            res.json({
              error: err,
              value: false
            });
          } else {
            res.json({
              data: data,
              value: true
            });
          }
        });
      } else {
        res.json({
          value: false,
          data: "Invalid Email !!!",
        });
      }
    } else {
      res.json({
        value: false,
        data: "Invalid Request!!!"
      });
    }
  }

};
