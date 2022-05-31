export { burger };

const burger = (burgerSelector, menuSelector) => {
  const burgerElem = document.querySelector(burgerSelector),
    menuElem = document.querySelector(menuSelector);

  menuElem.style.display = "none";

  burgerElem.addEventListener("click", () => {
    if (menuElem.style.display == "none" && window.screen.width <= 992) {
      menuElem.style.display = "block";
    } else menuElem.style.display = "none";

    window.addEventListener("resize", () => {
      if (window.screen.availWidth > 992 && menuElem.style.display == "block") {
        console.log(1);
        menuElem.style.display = "none";
      }
    });
  });
};
