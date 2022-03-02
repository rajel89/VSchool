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




    const item_toAdd_el = document.createElement('div');
		item_toAdd_el.classList.add('actions');

    const item_edit_el = document.createElement('button');
		item_edit_el.classList.add('edit');
		item_edit_el.innerText = 'Edit';

		const item_delete_el = document.createElement('button');
		item_delete_el.classList.add('x');
		item_delete_el.innerText = 'x';

    item_toAdd_el.appendChild(item_edit_el);

    

		item_toAdd_el.appendChild(item_delete_el);

		item_el.appendChild(item_toAdd_el);


    itemList.appendChild(item_el);

    input.value = "";
    
    item_edit_el.addEventListener('click', (e) => {
			if (item_edit_el.innerText.toLowerCase() == "edit") {
				item_edit_el.innerText = "Save";
				item_input_el.removeAttribute("readonly");
				item_input_el.focus();
			} else {
				item_edit_el.innerText = "Edit";
				item_input_el.setAttribute("readonly", "readonly");
			}
		});
    
		item_delete_el.addEventListener('click', (e) => {
			itemList.removeChild(item_el);

  });
});

});
