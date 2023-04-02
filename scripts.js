window.addEventListener("load", function () {
  const form = document.getElementById("surveyDrop");
  form.addEventListener("submit", surveySubmit);
});

function surveySubmit(e) {
  e.preventDefault();
  console.log("form got submitted");
}
function onFormSubmit() {
  console.log("anything");
}
