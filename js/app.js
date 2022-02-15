// const BADGE_KEY = "BADGE_KEY"
const badge = document.getElementById("badge");
const btnCart = document.querySelectorAll(".btnCart");
let addBadge = 0;
badge.innerHTML = 0;
for(let i=0;i<3;i++){
    btnCart[i].addEventListener("click", () => {
        btnCart[i].innerHTML = "Berhasil dibeli"
        btnCart[i].style.backgroundColor = "green"
        btnCart[i].style.color = "white"
        badge.removeAttribute("hidden")
        addBadge++;
        // sessionStorage.setItem(BADGE_KEY, addBadge)
        badge.innerHTML = addBadge
        if (addBadge == 1) {
            btnCart[i].setAttribute("disabled", "disabled")
        }
    })
      

}
const searchBtn = document.getElementById("search-btn");
const wrapForm = document.getElementById("wrap-form");
const CloseSearchBtn = document.getElementById("CloseSearchBtn");
searchBtn.addEventListener("click",()=>{
    searchBtn.style.display="none";
    wrapForm.style.display="flex"
})
CloseSearchBtn.addEventListener("click",()=>{
    searchBtn.style.display="block"
    wrapForm.style.display="none"
})

window.addEventListener("scroll",()=>{
    document.getElementById("headerNih").classList.toggle("Bg-White-for-Header",window.scrollY>0)
})



// if (typeof (Storage) !== undefined) {
//     // if (sessionStorage.getItem(BADGE_KEY) === null) {
//     //     sessionStorage.setItem(BADGE_KEY, 0);
//     // }


// } else {
//     alert("Browser tak dukung web storage")
// }