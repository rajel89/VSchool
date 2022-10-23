const form = document.myForm;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("Hello World")

  const checkedInputs = [];

  for (let i = 0; i < form.entertainment.length; i++) {
    if (form.entertainment[i].checked) {
      checkedInputs.push(form.entertainment[i].value);
    }
  }

  alert(checkedInputs);

  console.log(checkedInputs);

  console.log(form.city.value);
  console.log(form.gender.value);
});
