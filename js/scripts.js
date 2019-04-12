function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaOrder = function() {
  return this.pizzaTopping + " " + this.pizzaSize;
}

// var testPizza = new Pizza("Cheese," "Large");
//
// testPizza.pizzaOrder();
