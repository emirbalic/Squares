var width = window.innerWidth;
var width = window.innerWidth;
var height = window.innerHeight;
var counter = 1;
var items = [];

items.push(
  "This window width is " + width + "px, and its height is " + height + "px."
);
items.push(counter + ". Edge length is " + smaller() + " px long");

squares();

items.push("The final number of squares is " + counter);

function smaller() {
  return height > width ? width : height;
}

function squares() {
  while (height > 0) {
    if (width > height) {
      width = width - height;
      counter++;
    } else if (width < height) {
      height = height - width;
      counter++;
    } else {
      break;
    }
    items.push(counter + ". Edge length is " + smaller() + "px long");
    squares();
  }
}

console.table(items);
