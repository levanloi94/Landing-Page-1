window.onscroll = function() {scrollFunction()};
var menuLink = document.getElementsByClassName("menu__link");
let backToTopBtn = document.querySelector('.back-to-top');
function scrollFunction() {
    var name = "color-black";
    var arr;
    for( var j = 0 ; j < menuLink.length; j++){
        if (document.body.onscrollTop>200 || document.documentElement.scrollTop > 200) {
            document.getElementById("menu").style.backgroundColor = "white";
            document.getElementById("menu").style.boxShadow = " 0 0 14px 14px rgba(0, 0, 0, 0.04)";
            document.getElementById("logo").style.color="black";
            document.querySelector('.back-to-top').style.display = "flex";
            arr = menuLink[j].className.split(" ");
            if( arr.indexOf(name) == -1){
                menuLink[j].className += " "  + name;
            }
        }else{
            menuLink[j].classList.remove(name);
            document.getElementById("menu").style.backgroundColor = "";
            document.getElementById("logo").style.color="white";
            document.getElementById("menu").style.boxShadow = "";
            document.querySelector('.back-to-top').style.display = "";
        }      
    }
}

// if(document.body.onscrollTop>200 || document.documentElement.scrollTop > 200){
//     document.querySelector('.back-to-top').style.display = "block";


