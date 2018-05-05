$(function () {

  $(".devour-btn").on("click", function (event) {
    var id = $(this).data("id");
    var dinerId = $(this).data("diner-id");
    var isFull = $(this).val();
    var a = Math.round(Math.random());

    if (isFull === "true") {

      if (a === 1) {
        esplodeDiner(dinerId);
      }
      else {
        changeDevour(id, dinerId);
      }

    }
    else {
      changeDevour(id, dinerId);
    }

  });

  $(".field-group").on("click", "#add-burger", function (event) {
    event.preventDefault();
    //  select the value attribute:
    var dropdown = $("#diner-name").attr("name");
    var newDinerId = $("#diner-name").val();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      DinerId: parseInt(newDinerId)
    };

    $.post(`/api/burgers`, newBurger)
      .then(function () {
        console.log("Created new burger");
        location.reload();
      });

  });

  $(".field-group").on("click", "#add-customer", function (event) {
    event.preventDefault();
    var newDiner = {
      diner: $("#diner-name-input").val().trim()
    };

    $.post(`/api/diners`, newDiner)
      .then(function () {
        console.log("Created new burger");
        location.reload();
      });

  });

  $(".exit").on("click", function (event) {
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax(`/api/diners/${id}`, {
      type: "DELETE"
    })
      .then(function () {
        console.log(`Deleted burger #${id}`);
        location.reload();
      });

  });

});

function esplodeDiner(dinerId) {
  var esplodedImg = $("<img>");
  esplodedImg.addClass("esplode-img");
  esplodedImg.attr("src", "assets/images/esplode.png");
  $("#modal-title").html("You exploded!");
  $(".modal-body").html(esplodedImg);
  $("#img-modal").modal({ "show": true });

  $('#img-modal').on('hidden.bs.modal', function (e) {
    $.ajax(`/api/diners/${dinerId}`, {
      type: "DELETE"
    })
      .then(function () {
        console.log(`Deleted burger #${dinerId}`);
        location.reload();
      });
  });
}

function changeDevour(id, dinerId) {
  var newDevourState = {
    devoured: true
  };
  $.ajax(`/api/burgers/${id}`, {
    type: "PUT",
    data: newDevourState
  })
    .then(function () {
      var x = Math.round(Math.random());
      if (x === 1) {
        var dinerFull = true;
        $.ajax(`/api/diners/${dinerId}`, {
          type: "PUT",
          data: { full: true }
        })
          .then(function () {
            location.reload();
          });
      } else {
        location.reload();
      }
    });
}

function dinerOptions() {
  var dropdown = $("#diner-name").val();
  var cGrp = $(".field-group");
  var newCustLabel = $(`<label for='diner-name'>Your Name:</label>`);
  var newCustInput = $(`<input type='text' id='diner-name-input' name='diner-name' placeholder='2-12 letters'>`);
  var newBurgLabel = $(`<label for='new-burger'>Byurger Name:</label>`);
  var newBurgInput = $(`<input type='text' id='new-burger' name='burger-name' placeholder='2-25 letters'>`);
  var submitBurger = $(`<input type='submit' value='Submit' id='add-burger'>`);
  var submitCust = $(`<input type='submit' value='Submit' id='add-customer'>`)
  console.log(dropdown);
  if (dropdown === "new-diner-option") {
    cGrp.empty();
    cGrp.append(newCustLabel);
    cGrp.append(newCustInput);
    cGrp.append(submitCust);
  } else if (dropdown === "none-selected") {
    cGrp.empty();
  }
  else {
    cGrp.empty();
    cGrp.append(newBurgLabel);
    cGrp.append(newBurgInput);
    cGrp.append(submitBurger);
  }
}