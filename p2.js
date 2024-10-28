let r = 0;
let g = 0;
let b = 0;
let w = 0;

document.getElementById("red_slider").addEventListener("input", updateColors);
document.getElementById("green_slider").addEventListener("input", updateColors);
document.getElementById("blue_slider").addEventListener("input", updateColors);
document.getElementById("border_slider").addEventListener("input", updateColors)


function updateColors() {
    r = document.getElementById("red_slider").value
    g = document.getElementById("green_slider").value
    b = document.getElementById("blue_slider").value
    w = document.getElementById("border_slider").value

    document.getElementById("editable_text").style.setProperty("color", "rgb("+r+","+g+","+b+")")
    document.getElementById("editable_text").style.setProperty("border-width", String(w))
}