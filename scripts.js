window.addEventListener("load", function () {
  const form = document.getElementById("surveyDrop");
  form.addEventListener("submit", surveySubmit);
});

function surveySubmit(e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const color = document.getElementById("color").value;
  const animal = document.getElementById("animal").value;
  const car = document.getElementById("car").value;
  const turtle = document.getElementById("turtle").value;

  let language;
  if (role === "Full Time Job") {
    if (animal === "dog") {
      language = "HTML";
    } else {
      language = "CSS";
    }
  } else {
    language = "JS";
  }
  console.log(language);
  htmlEl = document.getElementById("html");
  cssEl = document.getElementById("css");
  jsEl = document.getElementById("js");
}
