

// <<<      AJAX Part 2    >>> //

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const jsonData = xhr.responseText;
//         const data = JSON.parse(jsonData);
//         const name = data.name;
//         document.getElementById("demo1").textContent = "JSON results:" +jsonData;
//         document.getElementById("demo2").textContent = "Parsed JSON's 'name' property:" + data.name;
//         spaceshipurl = data.starship[0];
//         console.log(spaceshipurl);
//     }
// };

// xhr.open("GET", "http://swapi.dev/api/people/2", true);
// xhr.send();


// <<<      AJAX Part 2    >>> //



const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results)
    }
}

function showData(arr){
    for (let i = 0 ; i < arr.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent = arr[i].name
    document.body.appendChild(h1)
    }
}