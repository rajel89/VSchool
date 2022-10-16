// Get request with axios

//url: https://api.vschool.io/rajel/todo

// Get All - is to pull all data from the end point "/todo"
// axios is promise base. Once axios GET the data, what do we want to do with it?

axios.get("https://api.vschool.io/rajel/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

// Get One - is to pull one data from the list of todo's by using the object id "631ecabf18d1a05bceae7455"

axios.get("https://api.vschool.io/rajel/todo/634b00c718d1a05bceae81d3")
.then(response => console.log(response.data))
.catch(error => console.log(error))

// Posting result into the web page

axios.get("https://api.vschool.io/rajel/todo")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement('h1')
      h1.textContent = response.data[i].title
      document.body.appendChild(h1);
    }
  })
  .catch(error => console.log(error))



