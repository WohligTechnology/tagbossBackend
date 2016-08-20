/**
 * sellerController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  save: function(req, res) {
    if (req.body) {
      console.log(req.body);
      seller.saveData(req.body, function(err, data) {
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
        seller.deleteData(req.body, function(err, data) {
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
          data: "No Id Found!!!",
        });
      }
    } else {
      res.json({
        value: false,
        data: "Invalid Request!!!"
      });
    }
  },

  getAll: function(req, res) {
    if (req.body) {
      seller.getAllData(req.body, function(err, data) {
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
        seller.userLogin(req.body, function(err, data) {
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
          data: "No Data Found!!!",
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
        seller.getOneData(req.body, function(err, data) {
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
          data: "No Id Found!!!",
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
