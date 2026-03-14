/* ล็อก scroll */

window.addEventListener("wheel",function(e){
e.preventDefault()
},{passive:false})


window.addEventListener("keydown",function(e){

if([
"ArrowUp",
"ArrowDown",
"PageUp",
"PageDown",
"Space"
].includes(e.code)){

e.preventDefault()

}

})


/* ปุ่มไป */

document.getElementById("nextBtn").addEventListener("click",()=>{

document.querySelector(".menuPage").scrollIntoView({

behavior:"smooth"

})

})


/* ปุ่มกลับ */

document.querySelectorAll(".backBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

window.location.href="index.html"

})

})


/* ปุ่มเมนู */

document.getElementById("infoBtn").onclick = function(){

window.location.href = "info.html"

}

document.getElementById("rovBtn").onclick=function(){

window.location.href="rov.html"

}

document.getElementById("loveBtn").onclick=function(){

window.location.href="love.html"

}

document.querySelector(".backPolicy").addEventListener("click",()=>{

document.querySelector(".policy").scrollIntoView({

behavior:"smooth"

})

})



/* ปุ่มเมนู */

document.getElementById("infoBtn").onclick = function(){

window.location.href = "info.html"

}

document.getElementById("rovBtn").onclick=function(){

window.location.href="rov.html"

}

document.getElementById("loveBtn").onclick=function(){

window.location.href="love.html"

}

document.querySelector(".backPolicy").addEventListener("click",()=>{

document.querySelector(".policy").scrollIntoView({

behavior:"smooth"

})

})




