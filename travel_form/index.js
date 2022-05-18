const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Hello World")

    const firstName = form.elements["firstName"].value


    alert(firstName)
})

