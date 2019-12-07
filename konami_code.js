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
    var index = 0

    if (key === codes[index]) {
       index++
       if (key === codes[index]){
         index++
         if (key === codes[index]){
           index++
           if (key === codes[index]){
              index++
              if (key === codes[index]){
                index++
                if (key === codes[index]){
                   index++
                   if (key === codes[index]){
                      index++
                      if (key === codes[index]){
                         index++
                         if (key === codes[index]){
                            index++
                            if (key === codes[index]){
                                      // do nothing
                            }else{
                              detect = 10
                            }//10th
                         }else{
                           detect = 9
                         }//9th
                      }else{
                        detect =8
                      }//8th
                   }else{
                     detect = 7
                   }//7th lvl
                }else{
                  detectFlag =6
                }//6th
              }else{
                detectFlag =5
              }//5th level
          }else{
            detectFlag =4
          }//4th level
        }else{
          detectFlag = 3
        }//3rd
      }else{
        detectFlag = 2
      }//2nd
    else{
      detectFlag = 1
    } //1st if


  if (detectFlag === 0){
    alert('Congratulations!')
}


});

//}
