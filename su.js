const toggle=document.querySelector(".toggle");
const primaryNavigation =document.querySelector("#primary-nav");

toggle.addEventListener("click",()=>{
const change =primaryNavigation.getAttribute("data-visible");
if(change === "false" ){
    primaryNavigation.setAttribute("data-visible",true);
    toggle.setAttribute("aria-expanded",true);
}
else if(change==="true"){
    primaryNavigation.setAttribute("data-visible",false);
    toggle.setAttribute("aria-expanded",false);
}

});
