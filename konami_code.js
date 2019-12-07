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

    if (key === codes[index]) {
      index++
      if(key === codes[index]){
        index++
        if (key === codes[index]){

        }else{

        }
      }else{
        detectFlag = 2
      }//2nd
    else{
      detectFlag = 1
    } //1st if





});

}
