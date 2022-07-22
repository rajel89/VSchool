try {
    // try out some code
    // if an error occurs (if an erro is thrown)

    if(2 === 2){
        // throw "Hey I am an error!"

        throw new Error ("Hey I am an error")
    }

}

catch(err){
    //hand the error

    console.log(err)
}

finally{
    console.log("I am running no matter what!")
}

