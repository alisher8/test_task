const db = require("../models"); 
const Cryptoinfos = db.cryptoinfos;

exports.findAll = (req, res) => {
    Cryptoinfos.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };