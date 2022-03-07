var btn= document.querySelector(".modal-btn");
var Ab= document.querySelector(".modalA");

btn.addEventListener('click',function(){
    Ab.classList.add("bg-active");
});

var close= document.querySelector(".modal-close");
close.addEventListener('click',function(){
    Ab.classList.remove("bg-active");
});

