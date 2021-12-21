let container = document.querySelector(".container");
let jumbo = document.querySelector(".jumbo");
let thumb = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
    if (e.target.className == "thumb") {
        let src = e.target.getAttribute("src");
        jumbo.setAttribute("src", src);
        jumbo.classList.add("fade");
        setTimeout(() => {
            jumbo.classList.remove("fade");
        }, 500);
        thumb.forEach((e) => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");
    }
});
