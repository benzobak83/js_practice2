export { slider };

const slider = (items, dir, next, prev) => {
  const itemsOfSlider = document.querySelectorAll(items),
    nextBtn = document.querySelector(next),
    prevBtn = document.querySelector(prev);

  let slideIndex = 1; // индекс картинки которая будет видна
  let let_interval;

  function showSlide() {
    // функция которая задает видимость картинке с новым индексом
    document.querySelector(".feedback").style.overflow = "hidden";
    if (slideIndex > itemsOfSlider.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = itemsOfSlider.length;

    itemsOfSlider.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    itemsOfSlider[slideIndex - 1].style.display = "block";
  }

  showSlide();

  function plusSlideIndex(n) {
    // изменяем индекс картинки
    return (slideIndex += n);
  }

  function nextPrev() {
    // обработчик кнопок следующего и прошлого слайда
    try {
      nextBtn.addEventListener("click", () => {
        showSlide(plusSlideIndex(1));
        itemsOfSlider[slideIndex - 1].classList.remove("slideInLeft");
        itemsOfSlider[slideIndex - 1].classList.add("slideInRight");
      });
      prevBtn.addEventListener("click", () => {
        showSlide(plusSlideIndex(-1));
        itemsOfSlider[slideIndex - 1].classList.remove("slideInRight");
        itemsOfSlider[slideIndex - 1].classList.add("slideInLeft");
      });
    } catch (e) {}
  }
  nextPrev();

  function stopAnimation() {
    // остановка прокрутки автоматтической слайдов при наведении
    if (dir == "verticaly") {
      let_interval = setInterval(() => {
        showSlide(plusSlideIndex(1));
        itemsOfSlider[slideIndex - 1].classList.add("slideInDown");
      }, 5000);
    } else if (dir == "horizontaly") {
      let_interval = setInterval(() => {
        showSlide(plusSlideIndex(1));
        itemsOfSlider[slideIndex - 1].classList.remove("slideInLeft");
        itemsOfSlider[slideIndex - 1].classList.add("slideInRight");
      }, 3000);
    }
  }
  itemsOfSlider[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(let_interval);
  });
  itemsOfSlider[0].parentNode.addEventListener("mouseleave", () => {
    stopAnimation();
  });
  stopAnimation();
};
