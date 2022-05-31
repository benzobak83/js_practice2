export { ModalOn, showPopup };
let scrollWidth = 0;
let btnPressed = false;
function ModalOn(trigger, modal, close, scroll = calcScrollWidth()) {
  const btn_triggers = document.querySelectorAll(trigger);

  for (let b_trigger of btn_triggers) {
    b_trigger.addEventListener("click", (e) => {
      btnPressed = true;
      if (e.target) e.preventDefault();
      if (e.target.classList.contains("fixed-gift")) {
        e.target.style.display = "none";
        window.removeEventListener("scroll", showGiftAfterScroll);
      }
      document.querySelector(modal).classList.add("animated", "fadeInDown");
      document.querySelector(modal).style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    });
  }
  const btn_closes = document.querySelectorAll(close);

  for (let b_close of btn_closes) {
    b_close.addEventListener("click", () => {
      document.querySelector(modal).style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
  }

  document.querySelector(modal).addEventListener("click", (e) => {
    if (e.target === document.querySelector(modal)) {
      document.querySelector(modal).style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
}

function showPopup(show_modal, time, scroll = calcScrollWidth()) {
  setTimeout(() => {
    if (document.body.style.overflow == "")
      document.querySelector(show_modal).style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  }, time);
}

function calcScrollWidth() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.style.overflowY = "scroll";
  scrollWidth = div.offsetWidth - div.clientWidth;
  return scrollWidth; // убираем дергания при открытии модалки
}

const showGiftAfterScroll = () => {
  if (
    !btnPressed &&
    window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
  ) {
    document.querySelector(".fixed-gift").click();
  }
};

window.addEventListener("scroll", showGiftAfterScroll); // обработчик появления модалки при скроле вниз
