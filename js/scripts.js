//BUSINESS LOGIC FOR PIZZA SHOP
function priceOf(priceSelector) {
var priceOut = "";

//global variable to save the pizzas inside
function PizzaShop() {
  this.pizza = []
}

PizzaShop.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizza.push(pizza);
}


// BUSSINESS LOGIC FOR PIZZA
function Pizza(pizzaTopping, pizzaSize, pizzaRequests, pizzaPrice) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  this.pizzaRequests = pizzaRequests;
  this.pizzaPrice = 0;
}

Pizza.prototype.sizeOfPizza = function() {
  if (this.pizzaSize === "Small") {
    priceOut += 10;
    console.log(pizzaPrice);
  } else if (this.pizzaSize === "Medium") {
    pizzaPrice += 13;
  } else if (this.pizzaSize === "Large") {
    pizzaPrice += 15;
  } else if (this.pizzaSize === "Extra Large") {
    pizzaPrice += 20;
  }
  return pizzaPrice;
}

//USER INTERFACE LOGIC
var pizzaShop = new PizzaShop

$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaTopping = $("select#newTopping").val();
    var selectedPizzaSize = $("select#newSize").val();
    var inputtedPizzaRequests = $("input#pizzaRequests").val();
    var priceSelector = parseInt($("input#priceOf").val());
    var output = priceOf(priceSelector);
    var newPizza = new Pizza(inputtedPizzaTopping, selectedPizzaSize, inputtedPizzaRequests);

    $("#showOrder").text(newPizza.pizzaSize + " " + newPizza.pizzaTopping + " " + newPizza.pizzaRequests + " " + newPizza.pizzaPrice);
    console.log(newPizza);
    $("#showPrice").text(output);
  })
})
