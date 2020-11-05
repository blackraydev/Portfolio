export default function BurgerMenu() {
    const navbar  = document.querySelector(".navbar"),
          menuBtn = document.querySelector(".menu-btn");

    
    if (!menuBtn.classList.contains("active__menu-btn")) {
        navbar.style.transform = "translateX(0)";
    }
    else {
        navbar.style.transform = "translateX(-100px)";
    }

    menuBtn.classList.toggle("active__menu-btn");

}