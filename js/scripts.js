//BUSINESS LOGIC FOR PIZZA SHOP
//global variable to save the pizzas inside
function PizzaShop() {
  this.pizza = []
}
  // this.currentId = 0

PizzaShop.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizza.push(pizza);
}

// PizzaShop.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

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


$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaTopping = $("input#newTopping").val();
    var inputtedPizzaSize = $("input#newSize").val();
    // $("input#newTopping").val("");
    // $("input#newSize").val("");
    var newPizza = new Pizza(inputtedPizzaTopping, inputtedPizzaSize);
    pizzaShop.addPizza(newPizza);

    $("#showOrder").text(newPizza);
    console.log(newPizza);
  })
})
