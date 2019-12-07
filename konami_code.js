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
  var action = document.body.addEventListener('keydown', function(event) {

    const key = event.key;
    var detectFlag = 0
    var index = 0



      if (key === codes[index]) {
        index++;
        alert("congratulations!");
        if (index === codes.length) {
         

          index = 0;
        }
      } else {
        index = 0;
      }


});

}
