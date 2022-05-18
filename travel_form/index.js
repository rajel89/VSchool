const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Hello World")

    const firstName = form.elements["firstName"].value
    const lastName = form.elements["lastName"].value
    const age = form.elements["age"].value
    

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age)
})

