export { viewPicture };

const viewPicture = (blocks) => {
  document.querySelectorAll(blocks).forEach((block) => {
    const pictureVisible = (block) => {
      const img = block.querySelector("img");

      img.src = img.src.slice(0, -4) + "-1.png";

      block.querySelectorAll("p:not(.sizes-hit)").forEach((item) => {
        item.style.display = "none";
      });
    };

    const pictureHidden = (block) => {
      const img = block.querySelector("img");

      img.src = img.src.slice(0, -6) + ".png";

      block.querySelectorAll("p:not(.sizes-hit)").forEach((item) => {
        item.style.display = "block";
      });
    };

    block.addEventListener("mouseover", () => {
      pictureVisible(block);
    });

    block.addEventListener("mouseout", () => {
      pictureHidden(block);
    });
  });
};
