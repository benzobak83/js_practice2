export { accordionVisible };

const accordionVisible = (accordionBlock, accordionHeading) => {
  const accBlock = document.querySelectorAll(accordionBlock);
  const accHeading = document.querySelectorAll(accordionHeading);

  const accordionsHidden = () => {
    accHeading.forEach((heading) => {
      
      heading.classList.remove("active");
    });
    accBlock.forEach((item) => {
      item.style.display = "none";
    });
  };

  function accordionDisplayBlock(event) {
    accordionsHidden();
    event.target.parentNode.classList.add("active");
    const block = event.target.parentNode.nextElementSibling;

    block.style.display = "block";
    block.classList.add("animated", "fadeIn");
  }

  accHeading.forEach((heading) => {
    heading.addEventListener("click", accordionDisplayBlock);
  });

  accordionsHidden();
};
