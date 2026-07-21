window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 40) {
        navbar.style.padding = "14px 0";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.06)";
    } else {
        navbar.style.padding = "22px 0";
        navbar.style.boxShadow = "none";
    }
});