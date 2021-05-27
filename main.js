let hamburgerText = document.querySelector(".hamburger-text");

//HAMBURGER MENU//

function openHamburger(event) {
    document.querySelector(".hamburger-content-show").style.display = "block";
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector("#main-body").style.filter = "blur(10px)";
    document.querySelector("#main-body").style.zIndex = "-1";
    document.querySelector(".social-links").style.filter = "blur(10px)";
    document.querySelector('.transition-btn').style.filter = "blur(10px)";
    document.querySelector('.transition-btn-black').style.filter = "blur(10px)";
    document.querySelector('#about').style.filter = "blur(10px)";
    document.querySelector('#discography').style.filter = "blur(10px)";
    document.querySelector('#discography').style.zIndex = "-1";
    event.stopPropagation();
    document.onclick = closeHamburger;
}


function closeHamburger() {
    document.querySelector(".hamburger-content-show").style.display = "none";
    document.querySelector(".hamburger").style.display = "flex";
    document.querySelector("#main-body").style.filter = "none";
    document.querySelector("#main-body").style.zIndex = "0";
    document.querySelector(".social-links").style.filter = "none";
    document.querySelector('.transition-btn').style.filter = "none";
    document.querySelector('.transition-btn-black').style.filter = "none";
    document.querySelector('#about').style.filter = "none";
    document.querySelector('#discography').style.filter = "none";
    document.querySelector('#discography').style.zIndex = "0";
}



hamburgerText.onmouseover = getDataP;
hamburgerText.onmouseout  = removeDataP;

function getDataP (event) {
    console.log(event.path)
    if(event.path.length === 11){
        event.path[2].style.background = "white";
        event.path[0].style.color = "black";
    }
}

function removeDataP (event) {
    if(event.path.length === 11){
        event.path[2].style.background = "black";
        event.path[0].style.color = "white";
    }
}


let categoryHamburger = document.querySelector(".hamburger-text");

categoryHamburger.addEventListener('click',()=>{
    closeHamburger();
})

