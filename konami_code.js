const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var action = document.body.addeventlistener('keydown', function(event) {

    const key = event.key;
    var detectFlag = 0

    if (key === "ArrowUp") {
      detectFlag = 1
    else {
      if (key === "ArrowUp") {
          detectFlag = 1
      }
    }



});

}
