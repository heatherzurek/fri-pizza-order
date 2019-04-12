//BUSINESS LOGIC FOR PIZZA SHOP
//global variable to save the pizzas inside
function PizzaShop() {
  this.pizzas = [],
  this.currentId = 0
}

PizzaShop.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

PizzaShop.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaShop.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if(this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

// PizzaShop.prototype.deletePizza = function(id) {
//   for (var i=0; i< this.pizzas.length; i++) {
//     if (this.contacts[i]) {
//       if (this.pizzas[i].id == id) {
//         delete this.pizzas[i];
//           return true;
//       }
//     }
//   };
//   return false;
// }

//this new method called addPizza(), takes a Pizza object as an argument
//locates the PizzaShops pizzas array by calling this.pizzas
//and uses push() to add the Pizza provided as an argument to the PizzaShops array property

// BUSSINESS LOGIC FOR PIZZA
function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaOrder = function() {
  return this.pizzaTopping + " " + this.pizzaSize;
}

//USER INTERFACE LOGIC
var pizzaShop = new PizzaShop

function displayPizzaDetails(pizzaShopToDisplay) {
  var pizzasList = $("ul#pizza");
  var htmlForPizzaInfo = "";
  pizzaShopToDisplay.pizzas.forEach(function(pizzas) {
    htmlForPizzaInfo += "<li id=" + pizzas.id + ">" + pizzas.pizzasTopping + " " + pizzas.pizzasSize + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
};

function showPizza(pizzaId) {
  var pizza = pizzaShop.findPizza(pizzaId);
  $("#show-order").show();
  $(".topping").html(pizzas.pizzaTopping)
  $(".size").html(pizzas.pizzaSize)
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
  }

function attachContactListeners() {
  $("ul#pizzas").on("click", "li", function() {
    showOrder(this.id);
  });
  // $("#buttons").on("click", ".deleteButton", function() {
  //   pizzaShop.deletePizza(this.id);
  //   $("#show-order").hide();
  //   displayPizzaDetails(pizzaShop);
  // });
};

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaTopping = $("input#new-topping").val();
    var inputtedPizzaSize = $("input#new-size").val();
    $("input#new-topping").val("");
    $("input#new-size").val("");
    var newPizza = new Pizza(inputtedPizzaTopping, inputtedPizzaSize);
    pizzaShop.addPizza(newPizza);
    displayPizzaDetails(pizzaShop);
    $("#show-order").text(pizzaShop);
    console.log(newPizza);
  })
})
