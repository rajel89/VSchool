

//Local storage
//Sesion storage

//JSON - Javacript Object Notaion
    //JSON.stringify => turning JS into JSON
    //JSON.parse => Turns JSON into JS


//Setter - Save data in local storage (key = value paris)
localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends",JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("address",JSON.stringify({street: "123 street", city: "SLC"}))


//Getter

const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = JSON.parse(localStorage.getItem("isAlive"))
const friends = JSON.parse(localStorage.getItem("friends"))
console.log(friends[0])
