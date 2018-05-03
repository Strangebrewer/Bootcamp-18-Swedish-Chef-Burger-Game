var express = require("express");
var router = express.Router();
var db = require("../models");

// router.get("/", function (req, res) {
//   var dinersArr = [];
//   db.Diner.findAll({}).then(function (data) {
//     console.log(data);
//       for (let i = 0; i < data.length; i++) {
//         const element = data[i].dataValues;
//         dinersArr.push(element);
//       }
//       var hbsObject = {
//         diners: dinersArr
//       }
//       res.render("index", hbsObject);
//   });
// });

router.get("/", function (req, res) {
  var dinersArr = [];
  var burgersArr = [];
  db.Diner.findAll({
    include: [db.Burger]
  }).then(function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const diner = data[i].dataValues;
      const burgers = data[i].Burgers
      dinersArr.push(diner);
      for (let j = 0; j < burgers.length; j++) {
        const element = burgers[j].dataValues;
        burgersArr.push(element);
      }
    };

    var hbsObject = {
      diners: dinersArr,
      burgers: burgersArr.sort()
    }

    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  db.Burger.create(req.body).then(function (result) {
    res.json(result);
  });
});

router.post("/api/diners", function (req, res) {
  db.Diner.create({
    diner_name: req.body.diner
  }).then(function (result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  db.Burger.update({
    devoured: req.body.devoured
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      if (result.affectedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(function (err) {
      res.json(err);
    });

});

router.delete("/api/burgers/:id", function (req, res) {

  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  // var condition = `id = ${req.params.id}`;
  // burger.deleteOne(condition, function (result) {
  //   if (result.affectedRows === 0) {
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

module.exports = router;