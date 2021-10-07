const mousePointer = document.querySelector(".mouse_pointer_extention");
const mouseContainer = document.querySelector(".mouse_hightliter_extention");


window.addEventListener("mousemove", mouseMove);
window.addEventListener("keydown", onKeyPress);  // key pressing
// window.addEventListener("keydown", mouseMove);


function mouseMove(event) {
    let x = event.clientX;
    let y = event.clientY;

    mousePointer.style.left = x + "px";
    mousePointer.style.top = y + "px";

}
function onKeyPress(event) {
    const mousePointer_height = mousePointer.clientHeight;   // (clientHeight) is property height  In our case curcle hieght find
    const mousePointer_width = mousePointer.clientWidth;    // (clientnWidth) is property width  In our case curcle width find

    if (event.shiftKey && event.code === "KeyC") {
        mouseContainer.style.display = "none";

    } else if (event.shiftKey && event.code === "KeyO") {
        mouseContainer.style.display = "block";

    } else if (event.shiftKey && event.code === "Minus") {
        mousePointer.style.width = mousePointer_width - 10 + "px";
        mousePointer.style.height = mousePointer_height - 10 + "px";

    } else if (event.shiftKey && event.code === "Equal") {
        mousePointer.style.width = mousePointer_width + 10 + "px";
        mousePointer.style.height = mousePointer_height + 10 + "px";
    }
};


