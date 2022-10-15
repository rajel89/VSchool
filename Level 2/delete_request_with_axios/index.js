// const button = document.getElemenetById("delete-button")

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/rajel/todo/631ecabf18d1a05bceae7455")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// })


axios.delete("https://api.vschool.io/rajel/todo/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))





//GET all todos
// axios.get("https://api.vschool.io/rajel/todo/")
// .then(response => console.log(response.data))
// .catch(error => console.log(error))
