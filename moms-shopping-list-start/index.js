window.addEventListener("load", () => {
  const form = document.querySelector("#add-todo");
  const input = document.querySelector("#title");
  const itemList = document.querySelector("#list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = input.value;

    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const item_content_el = document.createElement("div");
    item_content_el.classList.add("content");

    item_el.appendChild(item_content_el);

    

    const item_input_el = document.createElement("input");

    item_input_el.classList.add('text');
		item_input_el.type = 'text';
		item_input_el.value = item;
		item_input_el.setAttribute('readonly', 'readonly');

    item_content_el.appendChild(item_input_el);

    itemList.appendChild(item_el);

    input.value = "";
  });
});
