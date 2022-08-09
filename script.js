//SECTION:12 TO THE TOP END START
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//SECTION:12 TO THE TOP END END



//SECTION 03: PRELOADER START

$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    
    if ($('#container').hasClass('loaded')) {
      
      $('#preloader').delay(100).queue(function() {
        $(this).remove();
      });}
  }, 700);});
//SECTION 03: PRELOADER END




// FOOD HTML MODAL BUY START
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn1");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// FOOD HTML MODAL BUY END






// SECTION:13 COOKIES START

function setCookie(cookieName, cookieValue, numdaystilexpireasinteger) {
  var d = new Date();
  d.setTime(d.getTime() + (numdaystilexpireasinteger*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookieName+ "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  var name = cookieName+ "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function showLaw() {
  var x = getCookie("cookieName");  
  if (x != "") {
      $("#lawmsg").remove();
  } else {
          setCookie("cookieName", "cookieValue", 2);
      }
  }
  // SECTION:13 COOKIES END