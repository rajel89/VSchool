//Fetch
// url: "https://rickandmortyapi.com/api/character"

//Fetch will default to GET method

//Fetch offers the ability the HTTP request to perform POST PUT DELETE

// fetch("https://rickandmortyapi.com/api/character",{
//     method: 'post',
//     body: JSON.stringify({})

// })


fetch("https://rickandmortyapi.com/api/character")

.then(res => res.json())
.then(res => console.log(res.results))
.catch(err => console.log(err))

//to show up on the HTML Page

fetch("https://rickandmortyapi.com/api/character") // << step 1. the code till run to get the array from the URL
  .then((res) => res.json())                       // << step 2. it will bring it back (res) and will will convert it to jason and parse it res.json()
  .then((res) => {                                 // << step 3. so we receive it as javascript (res)
    for (let i = 0; i < res.results.length; i++) { // << step 4. loop over its results .res.results.length of array
     
        const h1 = document.createElement("h1");     // << step 5. get all the name to show up in the HTML Page.  
      h1.textContent = res.results[i].name;
      document.body.appendChild(h1);
    }
  })

  .catch((err) => console.log(err));
