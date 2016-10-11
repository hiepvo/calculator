/**
 * Created by hiepvo on 10/9/16.
 */
(function(){
  var tempVal   = "";
  var buttonId  = "";
  var ul        = document.getElementById("keys");
  var resultObj = document.getElementsByClassName("result")[0];
  ul.addEventListener("click", function(e){
    if(e.target.tagName = "li"){
      buttonId = e.target.id;
      switch(buttonId){
        case "clear":
          tempVal = "";
          showData(tempVal);
          break;
        case "del":
          if(tempVal.length > 1){
            if(tempVal.length === 8 && tempVal.indexOf("&minus;") === 0){ // tempVal.length = 8 = &minus;8  = -8
              tempVal = "";
            }
            else
              tempVal = tempVal.slice(0, -1);
          }
          else{
            tempVal = "";
          }
          showData(tempVal);
          break;
        case "neg":
          if(tempVal !== ""){
            if(tempVal.indexOf("&minus;") === -1){
              tempVal = "&minus;" + tempVal;

            }
            else{
              tempVal = tempVal.replace("&minus;", "");
            }
          }
          showData(tempVal);
          break;
        default:
          tempVal += buttonId;
          if(tempVal.indexOf('div') === 0 || tempVal.indexOf('mul') === 0 || tempVal.indexOf('minus') === 0 || tempVal.indexOf('plus') === 0 || tempVal.indexOf('equal') === 0){
            tempVal = "";
          }
          showData(tempVal);
          break;
      }
    }
  });

  // Displays symbols on the screen
  function showData(data){
    if(data === ""){
      resultObj.innerHTML = "0";
    } else{
      resultObj.innerHTML = data;
    }
  }
})();


