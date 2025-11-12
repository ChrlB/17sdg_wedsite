const hide_navBtn = document.getElementById("hide_navBtn");
const show_navBtn = document.getElementById("show_navBtn");
const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");

hide_navBtn.addEventListener("click", ()=>{//alert("in")
 sidenav.style.width = "0";
})

show_navBtn.addEventListener("click", ()=>{//alert("in")
 sidenav.style.width = "30%";
})
sidenav.addEventListener("mouseleave", ()=>{//alert("in")
 sidenav.style.width = "0";
})