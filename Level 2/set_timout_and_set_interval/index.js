console.log("hello world")


setTimeout(function(){});

setTimeout(function(){},1000)


// setTimeout(function(){
//     console.log("hello!");
// },1000);



// setInterval(function(){
//     console.log("hello");
// },1000)


// const intervalID = setInterval(function(){
//     console.log("hello")
// },1000)


// const intervalID = setInterval(function(){
//     console.log("hello!")
// },1000);


// const intervalID = setInterval(function(){
//     console.log("hello")
// },1000);

// clearInterval(intervalID)



// function sayHello(){
//     console.log("hello!");
// }
// const intervalID = setInterval(sayHello, 1000);


function sayHello(){
    console.log("hello!");
}

function stopSayingHello(){
    clearInterval(intervalID)
}

const intervalID = setInterval(sayHello, 1000);
setTimeout(stopSayingHello,6000)


//Now that we have a handle on the basics, let's see a practical use of this to 
//make a clock using Javascripts's Date constructor.


// const display = document.getElementById('time-display');

// function getTime(){
//     const now = new Date();
//     const hour = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();

//     display.textContent = `${hour}:${min}:${sec}`}

//     setInterval(getTime,1000)


    // If you are following along, you'll notice that when the seconds, minutes, or hours are less than 10, 
    //the time looks like this:8:5:2

    // To fix this, we just need to add a little more logic to our function to tell 
    //it to add a '0' before the number if it's less than 10.


const display = document.getElementById('time-display');

function getTime(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    if(hour < 10) {
        min = `0${min}`;
    }

    if(sec<10){
        sec = `0${sec}`;
    }

    display.textContent = `${hour}:${min}:${sec}`;
}

setInterval(getTime, 1000);




