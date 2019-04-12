//BUSINESS LOGIC FOR PIZZA SHOP
//global variable to save the pizzas inside
function PizzaShop() {
  this.pizza = []
}

PizzaShop.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizza.push(pizza);
}


// BUSSINESS LOGIC FOR PIZZA
function Pizza(pizzaTopping, pizzaSize, pizzaRequests) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  this.pizzaRequests = pizzaRequests;
}

Pizza.prototype.priceOfPizza = function() {
  var pizzaTotal = 0;
  if (this.pizzaSize === "Small") {
    pizzaTotal += 12;
  } else if (this.pizzaSize === "Medium") {
    pizzaTotal += 17;
  } else if (this.pizzaSize === "Large") {
    pizzaTotal += 23;
  } else if (this.pizzaSize === "Extra Large") {
    pizzaTotal += 30;
  }
  return this.pizzaPrice = pizzaTotal;
}


//USER INTERFACE LOGIC
var pizzaShop = new PizzaShop

$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaTopping = $("select#newTopping").val();
    var selectedPizzaSize = $("select#newSize").val();
    var inputtedPizzaRequests = $("input#pizzaRequests").val();

    var newPizza = new Pizza(inputtedPizzaTopping, selectedPizzaSize, inputtedPizzaRequests);
    newPizza.priceOfPizza();
    $("#showOrder").text(newPizza.pizzaSize + " " + newPizza.pizzaTopping + " " + "$" + newPizza.pizzaPrice);
    $("#notesToKitchen").text("*" + newPizza.pizzaRequests)
    console.log(newPizza);
  })
})
