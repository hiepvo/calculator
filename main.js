/**
 * Created by hiepvo on 10/9/16.
 */
(function(){
  var tempVal   = [];
  var buttonId  = "";
  var buttonVal = "";
  var ul        = document.getElementById("keys");
  var resultObj = document.getElementsByClassName("result")[0];
  ul.addEventListener("click", function(e){
    if(e.target.tagName = "li"){
      buttonId  = e.target.id;
      buttonVal = e.target.innerText;
      switch(buttonId){
        case "clear":
          tempVal = [];
          showData(tempVal.join(''));
          break;
        case "del":
          if(tempVal.length > 1){
            //check if there is minus sign before number then set it to 0
            if(tempVal.length === 2 && tempVal[0] === "&minus;"){
              tempVal = [];
            }
            else
              tempVal.splice(-1, 1); //remove last item from an array
          }
          else{
            tempVal = [];
          }
          showData(tempVal.join(''));
          break;
        case "neg":
          if(tempVal.length !== 0){
            if(tempVal[0] !== "&minus;"){ // check if first item is minus sign
              tempVal.unshift("&minus;"); // if no add it
            }
            else{
              tempVal.shift(); // remove minus sign
            }
          }
          showData(tempVal.join(''));
          break;
        case "equal":
          showData(eval(tempVal.join('')));
          break;
        default:
          tempVal.push(buttonVal);
          //check if string start with one of these operators (+, - , * , /, =)
          if(tempVal.length === 1 && (buttonId === 'divide' || buttonId === 'times' || buttonId === 'minus' || buttonId === 'plus' || buttonId === 'equal')){
            tempVal = [];
          }

          /*
           //check if two operator after each other
           if(tempVal.length > 1){
           var i = 0;
           for(i; i < tempVal.length; i++){
           if(operators.indexOf(tempVal[i]) > -1){
           alert('')
           if(operators.indexOf(tempVal[i]) === operators.indexOf(tempVal[i + 1])){
           tempVal = "";
           }
           }
           }
           }*/
          showData(tempVal.join(''));
          break;
      }
    }
  });

// Displays symbols on the screen
  function showData(data){
    if(data.length === 0){
      resultObj.innerHTML = "0";
    } else{
      resultObj.innerHTML = data;
    }
  }
})
();


