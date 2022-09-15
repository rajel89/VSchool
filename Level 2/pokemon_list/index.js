const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // console.log(xhr.responseText) // << console.log to test "GET" function to pull the data from the API
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata)
    console.log(data.objects) 
    // showData(data)
  }


};

