var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;

while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);

  repeat++;
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (var backwards = ingredients.length - 1; backwards >= 0; backwards--) {
  console.log(ingredients[backwards]);
}