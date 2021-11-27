let hh=1;
let mm=29;
let ss=60;
let id=setInterval(UpdateCounter,1000);
function UpdateCounter(){
document.getElementById("hh").innerHTML="Hour"+hh;
document.getElementById("mm").innerHTML="Minutes"+mm;
document.getElementById("ss").innerHTML="Seconds"+ss;
ss--;
if(ss<=0){
  mm--;
  ss=60
}
if(mm<=0){
    hh--;
    mm=59;
  }
  if(hh<0){
   clearInterval(id);
   alert("Time has Ended");
  }
}
