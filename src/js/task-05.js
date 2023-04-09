const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", onInputClick);

function onInputClick(event) {
    if (event.currentTarget.value === "") {
        outputElement.textContent = "Anonymous";
    }
    else
        outputElement.textContent = event.currentTarget.value;
}