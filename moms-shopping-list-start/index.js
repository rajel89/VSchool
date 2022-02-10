const form = document.addItem;

form.addEventListener("submit", function (event) {
  event.preventDefault();

});

const itemInput = document.getElementById("title");
const submit = document.getElementById("submit");
const edit = document.getElementById("edit");
const clear = document.getElementById("x");

function addItem() {
  const currentItem = itemInput.value;
  const listItem = document.createElement("li");
  listItem.innerHTML = currentItem;

  list.appendChild(listItem);

  itemInput.value = ""
}

submit.onClick = addItem;

clear.onClick = function(){
    list.innerHTML= "";
    itemInput.value = "";
};