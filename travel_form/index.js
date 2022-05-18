const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Hello World")

    const firstName = form.elements["firstName"].value
    const lastName = form.elements["lastName"].value
    const age = form.elements["age"].value
    const gender = form.elements["gender"].value
    const destination = form.elements["destination"].value;
    

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination)
})

