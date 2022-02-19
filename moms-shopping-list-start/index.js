const form = document.addItem;

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

var itemInput = document.getElementById["add-todo"];
let submit = document.getElementById("submit");
let edit = document.getElementById("edit");
let clear = document.getElementById("clear");


//with this code, the submit button is being detected by the Even Listener//
function addItem() {
  const currentItem = itemInput.value;
  const listItem = document.createElement("li");
  listItem.innerHTML = currentItem;

  list.appendChild(listItem);

  itemInput.value = "";
}

submit.onClick = addItem;

clear.onClick = function () {
  list.innerHTML = "";
  itemInput.value = "";
};
