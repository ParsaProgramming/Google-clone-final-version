let settings_icon = document.querySelector(".setting-icon");
let settings_popup = document.querySelector(".popup-settings");
let close_window_btn = document.querySelector(".final-buttons button.close");


settings_icon.addEventListener("click", ()=>{
    settings_popup.classList.add("show");
});

close_window_btn.addEventListener("click", ()=>{
    settings_popup.classList.remove("show");
});