let photos = document.querySelectorAll(".photo")
let popup = document.getElementById("popup")
let popupImg = document.getElementById("popupImg")
let close = document.querySelector(".close")


/* ปุ่มกลับ */

document.querySelectorAll(".backBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

window.location.href="main.html"

})

})


/* คลิกรูปเพื่อเปิด */

photos.forEach(img=>{

img.addEventListener("click",()=>{

popup.style.display="flex"

popupImg.src=img.src

})

})


/* ปิด popup */

if(close){

close.addEventListener("click",()=>{

popup.style.display="none"

})

}


/* คลิกพื้นหลังเพื่อปิด */

if(popup){

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none"

}

})

}