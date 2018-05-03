$(function () {

  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log(id);

    var newDevourState = {
      devoured: newDevoured
    };
    console.log(newDevoured);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevourState
    })
      .then(function () {
        console.log(`Changed devoured state to ${newDevoured}`);
        location.reload();
      });

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

  $(".delete-burger").on("click", function (event) {
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    })
      .then(function () {
        console.log(`Deleted burger #${id}`);
        location.reload();
      });

  });

});

function dinerOptions() {
  var dropdown = $("#diner-name").val();
  var cGrp = $(".field-group");
  var newCustLabel = $(`<label for='diner-name'>Diner Name:</label>`);
  var newCustInput = $(`<input type='text' id='diner-name-input' name='diner-name'>`);
  var newBurgLabel = $(`<label for='new-burger'>Byurger Name:</label>`);
  var newBurgInput = $(`<input type='text' id='new-burger' name='burger-name'>`);
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