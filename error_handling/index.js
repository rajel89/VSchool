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




var input = "";

try{
    if(input == ""){
        throw "Input can not be empty";

    }else if(input.length > 5){
        throw "input is to big";
    }else{
        console.log("Your code runs fine!");
    }

}catch(err){
    console.log(err);
}finally{
    console.log("Run no matter what");
    console.log("and the input was " + input);
}
