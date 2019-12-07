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
                              alert('no')
                              detectFlag = 10
                            }//10th
                         }else{
                           alert('no')
                           detectFlag = 9
                         }//9th
                      }else{
                        alert('no')
                        detectFlag =8
                      }//8th
                   }else{
                     alert('no')
                     detectFlag = 7
                   }//7th lvl
                }else{
                  alert('no')
                  detectFlag =6
                }//6th
              }else{
                alert('no')
                detectFlag =5
              }//5th level
          }else{
            alert('no')
            detectFlag =4
          }//4th level
        }else{
          alert('no')
          detectFlag = 3
        }//3rd
      }else{
        alert('no')
        detectFlag = 2
      }//2nd
    }else{
      alert('no')
      detectFlag = 1
    } //1st if


    if (detectFlag === 0){
        alert('Congratulations!')
    }


});

}
