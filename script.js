function changecss() {
  var x = document.getElementById("stylesheet");
  var toggle=document.getElementById("toggler");
  if(toggle.checked){
    x.href = "profstyle.css";
  }
  else{
    x.href = "style.css";
  }
 
}
