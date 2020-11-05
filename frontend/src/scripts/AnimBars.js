export default function AnimBars() {
    setTimeout(() => {
        const some = getComputedStyle(document.querySelector(".progress .bar"), "content");

        if (some.visibility === "visible") return;

        const bars     = document.querySelectorAll(".progress .bar"),
              backBars = document.querySelectorAll(".progress .back_bar"); 

        const colors = [
            "rgb(255, 155, 75)", "rgb(100, 160, 255)", "rgb(245, 215, 80)", "rgb(90, 200, 255)",
            "rgb(190, 240, 105)", "rgb(230, 95, 180)", "rgb(200, 115, 240)", "rgb(130, 165, 215)"
        ];

        const backColors = [
            "rgb(120, 80, 30)", "rgb(40, 75, 120)", "rgb(125, 110, 40)", "rgb(75, 110, 125)",
            "rgb(80, 100, 40)", "rgb(105, 40, 80)", "rgb(85, 50, 105)", "rgb(60, 80, 105)"
        ];

        const clientWidth = document.documentElement.clientWidth;

        let percentage;

        for (let i = 0; i < backColors.length; i++) {
            percentage = bars[i].getAttribute("percentage");

            if (clientWidth <= 900) {
                bars[i].style.transform = `translate(${-1 * percentage}px)`;
                bars[i].style.width = percentage + "px";
            }
            else {
                bars[i].style.transform = `translate(${-1.5 * percentage}px)`;
                bars[i].style.width = percentage * 1.5 + "px";
            }
            
            bars[i].style.visibility = "visible";
            backBars[i].style.background = backColors[i];
        }

        setTimeout(() => {
            for (let i = 0; i < bars.length; i++) {
                percentage = bars[i].getAttribute("percentage");
                bars[i].style.transition = 1.25 + "s ease-in-out";
                bars[i].style.transform = `translate(0)`;
                bars[i].style.background = colors[i];
            }
        }, 500);
    }, 0);
}