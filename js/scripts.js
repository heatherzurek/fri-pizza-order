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
function Pizza(pizzaTopping, pizzaSize, pizzaRequests, pizzaPrice) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  this.pizzaRequests = pizzaRequests;
  this.pizzaPrice = 10;
}

Pizza.prototype.getPizzaPrice = function () {
  if(this.pizzaSize == "Small"){
    this.pizza += "2";
  } else if(this.pizzaSize === "Medium"){
    this.pizza += 4;
  } else if(this.pizzaSize === "Large"){
    this.pizza += 6;
  }
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
    pizzaShop.addPizza(newPizza);

    $("#showOrder").text(newPizza.pizzaSize + " " + newPizza.pizzaTopping + " " + newPizza.pizzaRequests);
    console.log(newPizza);
    $("#showPrice").text(newPizza.pizzaPrice);
  })
})
