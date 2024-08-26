const display = document.getElementById("display");

function addValue(val) {
    display.value += val;
}
function clearDisplay() {
    display.value = "";
}
function result() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "error";
    }
}