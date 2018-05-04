var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {

  //  Array to hold diner names for the dropdown list
  var dinersArr = [];

  //  Array to hold diner objects that includes all data on them, including burgers associated to them
  var dinerObjectsArr = [];

  //  Get all Diner info from the db - including child (burger) data
  db.Diner.findAll({
    include: [db.Burger]
  }).then(function (data) {
    // console.log(data);

    //  loop through the result array
    for (let i = 0; i < data.length; i++) {

      //  each index represents one diner
      const dinerIs = data[i].dataValues;

      //  each diner has an array of burgers associated to them
      const burgersAre = data[i].Burgers

      //  add a property to each burger object and assign it a value of true or false based on whether the diner is full.
      for (let i = 0; i < burgersAre.length; i++) {
        burgersAre[i].full = dinerIs.full;
      }


      //  Push to dinersArray for the dropdown list
      dinersArr.push(dinerIs);

      // load up object for each diner
      var dinerObj = {
        diner: dinerIs,
        burgers: burgersAre
      }

      //  push each object to the dinerObjectsArray
      dinerObjectsArr.push(dinerObj);

    };

    //  because handlebars.render() takes an object as its second parameter - this could also just be directly put in the render function as {data: dinerObjectsArr}
    var hbsObject = {
      data: dinerObjectsArr
    }

    //  render the page
    res.render("index", hbsObject);
  })
    .catch(function (err) {
      res.json(err);
    });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create(req.body).then(function (result) {
    res.json(result);
  })
    .catch(function (err) {
      res.json(err);
    });
});

router.post("/api/diners", function (req, res) {
  db.Diner.create({
    diner_name: req.body.diner
  }).then(function (result) {
    res.json(result);
  })
    .catch(function (err) {
      res.json(err);
    });
});

router.put("/api/diners/:id", function (req, res) {
  db.Diner.update(req.body, {
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

router.put("/api/burgers/:id", function (req, res) {
  db.Burger.update(req.body, {
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

router.delete("/api/diners/:id", function (req, res) {
  db.Diner.destroy({
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

module.exports = router;