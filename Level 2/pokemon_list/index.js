const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // console.log(xhr.responseText) // << console.log to test "GET" function to pull the data from the API.
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data.objects); //<< this is just to show the results in the cosole. and cam be commented out if needed.
    showData(data.objects[0].pokemon); // << the data.objects[0].pokemon allows the block of code to index into the next array which is the pokemon.
  }
};

function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = arr[i].name;
    document.body.appendChild(h1);
  }
}

