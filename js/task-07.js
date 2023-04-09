const font = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = font.value + "px";

function changeFont(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}

font.addEventListener("input", changeFont);