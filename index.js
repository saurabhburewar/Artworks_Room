const h = document.querySelector('#h');
const b = document.body;

let base = (e) => {
    let x = e.pageX / window.innerWidth - 0.5;
    let y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener('pointermove', base);

document.getElementById("hover_frame").addEventListener("mouseover", function() {
    document.getElementById("trad_text").style.opacity = 1;
    document.getElementById("hover_frame").style.boxShadow = "0.1vw 0vw 0.7vw 0.2vw #fff";

})
document.getElementById("hover_frame").addEventListener("mouseout", function() {
    document.getElementById("trad_text").style.opacity = 0;
    document.getElementById("hover_frame").style.boxShadow = "none";
})

document.getElementById("hover_tab").addEventListener("mouseover", function() {
    document.getElementById("digi_text").style.opacity = 1;
    document.getElementById("tab_light1").style.opacity = 1;
})
document.getElementById("hover_tab").addEventListener("mouseout", function() {
    document.getElementById("digi_text").style.opacity = 0;
    document.getElementById("tab_light1").style.opacity = 0;
})

document.getElementById("monitor").addEventListener("mouseover", function() {
    document.getElementById("web_text").style.opacity = 1;
    document.getElementById("monitor_screen").style.opacity = 1
    document.getElementById("ll_light1").style.opacity = 1
})
document.getElementById("monitor").addEventListener("mouseout", function() {
    document.getElementById("web_text").style.opacity = 0;
    document.getElementById("monitor_screen").style.opacity = 0
    document.getElementById("ll_light1").style.opacity = 0
})

document.getElementById("laptop").addEventListener("mouseover", function() {
    document.getElementById("web_text").style.opacity = 1;
    document.getElementById("monitor_screen").style.opacity = 1
    document.getElementById("ll_light1").style.opacity = 1
})
document.getElementById("laptop").addEventListener("mouseout", function() {
    document.getElementById("web_text").style.opacity = 0;
    document.getElementById("monitor_screen").style.opacity = 0
    document.getElementById("ll_light1").style.opacity = 0
})

document.getElementById("model").addEventListener("mouseover", function() {
    document.getElementById("threed_text").style.opacity = 1;
    document.getElementById("model_light").style.opacity = 1
    document.getElementById("cube").style.opacity = 1
})
document.getElementById("model").addEventListener("mouseout", function() {
    document.getElementById("threed_text").style.opacity = 0;
    document.getElementById("model_light").style.opacity = 0
    document.getElementById("cube").style.opacity = 0
})