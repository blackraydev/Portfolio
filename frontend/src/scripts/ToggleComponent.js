export default function ToggleComponent() {
    const currentLocation = window.location.pathname;

    const components = document.querySelectorAll(".list .icon_holder"),
          icons      = document.querySelectorAll(".list .icon");

    for (let i = 0; i < components.length; i++) {
        components[i].classList.remove("active");
        icons[i].classList.remove("activeIcon");
    }

    if (currentLocation === "/") {
        if (!components[0].classList.contains("active")) {
            components[0].classList.add("active");
            icons[0].classList.add("activeIcon");
        }
    }
    else if (currentLocation === "/projects") {
        if (!components[1].classList.contains("active")) {
            components[1].classList.add("active");
            icons[1].classList.add("activeIcon");
        }
    }
    else if (currentLocation === "/contacts") {
        if (!components[2].classList.contains("active")) {
            components[2].classList.add("active");
            icons[2].classList.add("activeIcon");
        }
    }
}