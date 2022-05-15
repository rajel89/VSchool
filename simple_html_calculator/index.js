const form = document.calculator


form.addEventListener("add", function(event){
    event.preventDefault()


    const firstNum = form.firstInput.value
    const secondNum = form.secondinput.value

    console.log(firstNum + secondNum)


})


