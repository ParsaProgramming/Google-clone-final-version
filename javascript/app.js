let settings_icon = document.querySelector(".setting-icon");
let settings_popup = document.querySelector(".popup-settings");
let close_window_btn = document.querySelector(".popup-settings button");
// changing Bg
let ImageBgSource = document.querySelectorAll(".popup-settings .option .container .row .col img");
// main Bg
let DefaultImg = document.querySelector(".bg-place img");

ImageBgSource.forEach(bg => {
    bg.addEventListener("click", ()=>{
        DefaultImg.setAttribute("src", bg.getAttribute("src"));
    })
});

settings_icon.addEventListener("click", ()=>{
    settings_popup.classList.add("show");
});

close_window_btn.addEventListener("click", ()=>{
    settings_popup.classList.remove("show");
});