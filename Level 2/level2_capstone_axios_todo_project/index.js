//API URL https://api.vschool.io/rajel/todo

//Part 1 - Get
//- If a todo item is complete, it should have a strikethrough line on it
//- Images should be displayed as images if there are any

function getData(){
    axios.get("https://api.vschool.io/rajel/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

function listData(data){

    // document.getElementById('todo-list').innerHTML = ""  <<----the innerHTML could be used but not all browsers support the .innerHTML. as a solution, the function clearList() is used.

    clearList()
    
    for (let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}


function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()






//Part 2 - POST 

//- The user can add new todos to their list. 
    //The new item should be posted to the todo API so a future reload of the page will still display that new todo item. 
    //Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.

//- A user should be able to give the item a title.
//- A user should be able to give the item a price.
//- A user should be able to give the item a description.
//- A user should be able to attach an imgUrl to the item


const todoForm = document["todo-form"]


todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
    }
    todoForm.title.value =""
    todoForm.price.value = ""
    todoForm.description.value =""
    todoForm.imgUrl.value=""

    axios.post("https://api.vschool.io/rajel/todo", newTodo)
    .then(res => getData(res))
    .catch(err => console.log(err))
})




