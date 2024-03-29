console.log("CRUD WITH AXIOS");

//POST FUNCTION
const newPost = document.newpost;

newPost.addEventListener("submit", function (event) {
  event.preventDefault();

  const newPostItem = {
    title: newPost.title.value,
    description: newPost.description.value,
    imgUrl: newPost.imgUrl.value,

    // title: "1st CRUD POST",
    // description: "image of a coffee",
    // imgUrl: "https://images.unsplash.com/photo-1641948598832-81c0db0ead86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  };

  axios
    .post("https://api.vschool.io/rajel/todo", newPostItem)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});

//GET FUNCTION

const axiosGet = document.axiosget;

axiosGet.addEventListener("submit", function (event) {
  event.preventDefault();

  const axiosGetId = {
    id: axiosGet.id.value,
  };

  axios
    .get("https://api.vschool.io/rajel/todo/" + axiosGetId.id)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});










//DELETE FUNCTION

const axiosDelete = document.axiosdelete;

axiosDelete.addEventListener("submit", function (event) {
  event.preventDefault();

  const axiosDeleteId = {
    _id: axiosDelete._id.value,
  };

  axios
    .delete("https://api.vschool.io/rajel/todo/" + axiosDeleteId._id)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});

//PUT FUNCTION


const axiosPut = document.axiosput;

axiosPut.addEventListener("submit", function(event){
    event.preventDefault();


    const axiosPutItem = {
        _id: axiosPut._id.value,
        title: axiosPut.title.value,
        description: axiosPut.description.value,
        imgUrl: axiosPut.imgUrl.value,

    }

    axios.put("https://api.vschool.io/rajel/todo/" + axiosPutItem._id, axiosPutItem)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));


})

