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
            tempVal = tempVal.slice(0, -1);
          }
          else{
            tempVal = "";
          }
          showData(tempVal);
          break;
        case "neg":
          if(tempVal.indexOf("&minus;") === -1){
            tempVal = "&minus;" + tempVal;

          }
          else{
            tempVal = tempVal.replace("&minus;", "")
          }
          showData(tempVal);
          break;
        default:
          tempVal += buttonId;
          showData(tempVal);
          break;
      }
    }
  });

  // Displays symbols on the calc screen
  function showData(data){
    if(data === ""){
      resultObj.innerHTML = "0";
    } else{
      resultObj.innerHTML = data;
    }
  }
})();


