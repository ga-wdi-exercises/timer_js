var buttons = document.getElementById("allButtons");

buttons.addEventListener("click", buttonClick);

function buttonClick(){
  if (event.target.id == "start"){
    document.getElementById("timer").innerHTML = "Time Elapsed: 0";
  }

}
