let moveHeader = document.querySelector(".scroll-head");
let productSection = document.querySelector("#Products");

moveHeader.addEventListener("mouseenter", function() {
    productSection.scrollIntoView({ behavior: "smooth"});
    productSection.computedStyleMap.transition = "1s easein";
});

