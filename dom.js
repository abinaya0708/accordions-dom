var icons=document.querySelectorAll(".top");

icons.forEach(function(icon){
    var para=icon.nextElementSibling;
    var icon_direc=icon.lastElementChild;
    icon.addEventListener("click",function(){
        para.classList.add("active");
        icon_direc.style.transform="rotate(180deg)";
    })
})
