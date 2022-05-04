const form = document["my-form"]

//sumbit event

form.addEventListener("submit", function(event){

    //stop refreshing action

    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""

    console.log(firstName + " " + lastName) // this list will only show value in the console.

    //to capture value and show in the DOM

    const h1 = document.createElement("h1")
    h1.textContent = firstName + " " + lastName
    document.getElementsByTagName("body")[0].append(h1) //in this instance the tagname "body" is used because there's no elements that the values can be put in from the html.


})




// const form = document.words

document.words.addEventListener("submit", function(e){
    e.preventDefault()

    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value

    alert("the " + noun + " did" + adverb + " " + verb + " in it's home")
  
})


