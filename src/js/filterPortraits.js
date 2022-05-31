export { filterPortraits };

const filterPortraits = () => {
  const btnContainer = document.querySelector(".portfolio-menu"),
    portfolioNo = document.querySelector(".portfolio-no"),
    portfolioBlocks = document.querySelectorAll(".portfolio-block");

  let activeClass = "";
  let stop = false;
  let counterDisplayBlock = 0;

  const takeClassBtn = (e) => {
    if (e.target.classList.contains("portfolio-menu")) return;

    stop = false;
    btnContainer.childNodes.forEach((item) => {
      if (item.value == 0 && item.classList.contains("active")) {
        // убрал этим #text
        if (stop) return stop;
        item.classList.remove("active");
        e.target.classList.add("active");
        activeClass = e.target;
        useFilter(activeClass);
        setTimeout(checkContent, 300);
      }
    });
  };

  const useFilter = (btnClass) => {
    stop = true;
    btnClass = btnClass.classList[0];
    console.log(btnClass)

    portfolioBlocks.forEach((block) => {
      setTimeout(() => {
        block.style.display = "block";
      }, 300);

      block.style.animationName = "myFadeIn";

      if (!block.classList.contains(btnClass)) {
        setTimeout(() => {
          block.style.display = "none";
        }, 300);

        block.style.animationName = "myFadeOut";
      }
    });
  };

  const checkContent = () => {
    counterDisplayBlock = 0;
    
    portfolioBlocks.forEach((item) => {
      item.style.display == "block" ? counterDisplayBlock++ : true;
    });
    
    counterDisplayBlock == 0
      ? (portfolioNo.style.display = "block")
      : (portfolioNo.style.display = "none");
  };

  btnContainer.addEventListener("click", takeClassBtn);
};
