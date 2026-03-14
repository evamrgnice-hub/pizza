// เลื่อนลง

document.getElementById("scrollBtn").addEventListener("click", () => {

document.getElementById("about").scrollIntoView({
behavior:"smooth"
})

})


// กลับหน้าแรก

document.getElementById("backBtn").addEventListener("click", () => {

document.querySelector(".hero").scrollIntoView({
behavior:"smooth"
})

})


// ปุ่มเริ่ม

document.getElementById("startBtn").addEventListener("click", () => {

let name = document.getElementById("username").value

if(name === ""){
alert("กรุณากรอกชื่อก่อน")
return
}

window.location.href="main.html"

})
// ล็อก scroll เมาส์

window.addEventListener("wheel", function(e){
e.preventDefault();
}, { passive:false });


// ล็อกปุ่มคีย์บอร์ดที่ใช้เลื่อน

window.addEventListener("keydown", function(e){

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

