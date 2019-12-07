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
  document.body.addEventListener('keydown', function(event) {

    const key = event.key;

    var index = 0

      if (key === codes[index]) {
        index++;

        if (key === codes.length) {
          index = 0;
           alert('congrats');
        }
      } else {
        index = 0;

      }
});

}

//
