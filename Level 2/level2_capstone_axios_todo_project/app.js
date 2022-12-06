const todoForm = document.todoform;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
    edit: false,
    completed: false,
  };

  //Part 2 - Post
  axios
    .post("https://api.vschool.io/rajel/todo", newTodo)
    .then((response) => {
      console.log(response.data);
      clearAll();
      getAll();
    })
    .catch((error) => console.log(error));
});

const clearAll = () => {
  const toDoList = document.getElementById("list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
};

const populateToDo = () => {};

//Part 1 - GET

const getAll = () => {
  axios
    .get("https://api.vschool.io/rajel/todo")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const toDoItem = document.createElement("li");
        toDoItem.setAttribute("id", `${response.data[i]._id}`);
        const h2 = document.createElement("h2");
        const headerValue = response.data[i].title;
        h2.textContent = headerValue;

        const s = document.createElement("s");
        s.textContent = headerValue;

        const price = document.createElement("p");
        const priceValue = response.data[i].price;
        price.textContent = priceValue;

        const p = document.createElement("p");
        const pValue = response.data[i].description;
        p.textContent = pValue;

        const img = document.createElement("img");
        const imgValue = response.data[i].imgUrl;
        img.src = imgValue;
        document.getElementById("list").appendChild(img);

        const updateForm = document.createElement("input");
        updateForm.placeholder = "Update Item...";


        const updateButton = document.createElement("button");
        // const editButton = response.data[i].edit;
        // if (editButton === false) {
        //   toDoItem.appendChild(h2);
          updateButton.textContent = "Edit";  //<< eventlistener

        // } else if (editButton === true) {
        //   toDoItem.appendChild(s);
        //   updateButton.textContent = "Save";
        // }

        const completeButton = document.createElement("button");
        const boxCheck = response.data[i].completed;
        if (boxCheck === false) {
          toDoItem.appendChild(h2);
          completeButton.textContent = "Complete";
        } else if (boxCheck === true) {
          toDoItem.appendChild(s);
          completeButton.textContent = "Incomplete";
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";

        toDoItem.appendChild(img);
        toDoItem.appendChild(price);
        toDoItem.appendChild(p);
        toDoItem.appendChild(updateForm);
        toDoItem.appendChild(updateButton);
        toDoItem.appendChild(completeButton);

        toDoItem.appendChild(deleteButton);
        completeButton.addEventListener("click", (e) => {
          completeToDo(e, boxCheck);
        });

        updateButton.addEventListener("click", (e) => {
          // updateToDo(e, editButton);
          console.log("updateButton")

        });

        deleteButton.addEventListener("click", (e) => {
          deleteToDo(e);
        });
        document.getElementById("list").appendChild(toDoItem);
      }
    })
    .catch((error) => console.log(error));
};

//Part 3 - PUT Part 1
const completeToDo = (e, updateTodo) => {
  console.log(updateTodo);
  updateTodo = !updateTodo;
  const updatedToDo = {
    completed: updateTodo,
  };
  const { id } = e.target.parentElement;
  axios
    .put(`https://api.vschool.io/rajel/todo/${id}`, updatedToDo)
    .then((response) => {console.log(response.data);
      clearAll();
      getAll();
    })
    .catch((error) => console.log(error));
};

//Part 4 - Delete

const deleteToDo = (e) => {
  console.log(e);
  const { id } = e.target.parentElement;
  axios
    .delete(`https://api.vschool.io/rajel/todo/${id}`)
    .then((response) => {
      console.log(response.data);
      clearAll();
      getAll();
    })
    .catch((error) => console.log(error));
};

getAll();
