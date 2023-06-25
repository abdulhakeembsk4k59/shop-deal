
  var header = document.getElementById("parent");
  var itms = header.getElementsByClassName("nav-item");
  for(var i = 0; i<itms.length; i++){
      itms[i].addEventListener("click",function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active","");
          this.className += " active";
      });
  }
