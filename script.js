const btn = document.querySelector("#theme-toggle");
const page = document.documentElement;

btn.addEventListener("click", () => {
    const theme = page.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark"

        page.setAttribute("data-theme", theme)
        console.log('BOBER');
})

console.log(btn)