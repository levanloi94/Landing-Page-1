window.onscroll = function() {scrollFunction()};
var menuLink = document.getElementsByClassName("menu__link");
function scrollFunction() {
    var name = "color-black";
    var arr;
    for( var j = 0 ; j < menuLink.length; j++){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("menu").style.backgroundColor = "white";
            document.getElementById("menu").style.boxShadow = " 0 0 14px 14px rgba(0, 0, 0, 0.04)";
            document.getElementById("logo").style.color="black";
            arr = menuLink[j].className.split(" ");
            if( arr.indexOf(name) == -1){
                menuLink[j].className += " "  + name;
            }
        }else{
            menuLink[j].classList.remove(name);
            document.getElementById("menu").style.backgroundColor = "";
            document.getElementById("logo").style.color="white";
            document.getElementById("menu").style.boxShadow = "";
        }      
    }
}

