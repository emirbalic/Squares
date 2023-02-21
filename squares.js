window.onload = init;
function init() {
  document.getElementById("add").onclick = add;
  document.getElementById("refresh").onclick = refresh;
  document.getElementById("test1").onclick = test1;
  document.getElementById("test2").onclick = test2;
}

var width;
var height;

var items = [];
var counter = 1;

function add() {
  width = window.innerWidth;
  height = window.innerHeight;
  mainFunction();
  print();
}

function mainFunction() {
  items.push(
    "This window width is " + width + "px, and its height is " + height + "px."
  );
  items.push(counter + ". Edge length is " + smaller() + " px long");
  squares();
  items.push("The final number of squares is " + counter);
}

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

function print() {
  var el = document.getElementById("list");
  for (var i = 0; i < items.length; i++) {
    var node = document.createElement("li");
    var item = document.createElement("h3");
    item.innerHTML = items[i];
    node.appendChild(item);
    el.appendChild(node);
  }
}

function refresh() {
  window.location.reload();
}

function test1() {
  width = 12;
  height = 7;
  mainFunction();
  print();
}

function test2() {
  width = 17;
  height = 8;
  mainFunction();
  print();
}
