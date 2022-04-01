window.addEventListener("load", () => {
  const form = document.querySelector("#add-todo");
  const input = document.querySelector("#title");
  const itemList = document.querySelector("#list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = input.value;

    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const itemContentEl = document.createElement("div");
    itemContentEl.classList.add("content");

    itemEl.appendChild(itemContentEl);

    const itemInputEl = document.createElement("input");

    itemInputEl.classList.add("text");
    itemInputEl.type = "text";
    itemInputEl.value = item;
    itemInputEl.setAttribute("readonly", "readonly");

    itemContentEl.appendChild(itemInputEl);

    const itemToAddEl = document.createElement("div");
    itemToAddEl.classList.add("actions");

    const itemEditEl = document.createElement("button");
    itemEditEl.classList.add("edit");
    itemEditEl.innerText = "Edit";

    const itemDeleteEl = document.createElement("button");
    itemDeleteEl.classList.add("x");
    itemDeleteEl.innerText = "x";

    itemToAddEl.appendChild(itemEditEl);

    itemToAddEl.appendChild(itemDeleteEl);

    itemEl.appendChild(itemToAddEl);

    itemList.appendChild(itemEl);

    input.value = "";

    itemEditEl.addEventListener("click", (e) => {
      if (itemEditEl.innerText.toLowerCase() == "edit") {
        itemEditEl.innerText = "Save";
        itemInputEl.removeAttribute("readonly");
        itemInputEl.focus();
      } else {
        itemEditEl.innerText = "Edit";
        itemInputEl.setAttribute("readonly", "readonly");
      }
    });

    itemDeleteEl.addEventListener("click", (e) => {
      itemList.removeChild(itemEl);
    });
  });
});
