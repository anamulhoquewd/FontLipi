const nav = document.querySelector("nav#nav");
const bar = document.querySelector("#bar");

bar.addEventListener("click", () => {
    if(nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        nav.classList.add("flex");
    } else{
        nav.classList.remove("flex");
        nav.classList.add("hidden");
    }
})

// max-h-16 max-h-fit

const buttons = document.querySelectorAll("button.button");

buttons.forEach(button => {
    const content = button.previousElementSibling.firstElementChild;
    console.log(content.classList);
    button.addEventListener("click", () => {
        console.log();
        if(content.classList.contains("max-h-16")) {
            content.classList.remove("max-h-16");
            content.classList.add("max-h-fit");
        } else{
            content.classList.add("max-h-16");
            content.classList.remove("max-h-fit");
        }
    })
});
