// export { moreStyles };
export { moreStylesJson };
import { getJson } from "./services/requests";

// -------подгрузка стилей с верстки---------

// const moreStyles = (trigger, classForDelete, removeStyles, addStyles) => {
//   trigger = document.querySelector(trigger);

// trigger.addEventListener("click", () => {
//   let hiddensStyles = document.querySelectorAll(classForDelete);

//   hiddensStyles.forEach((item) => {
//     for (let i = 0; i < removeStyles.length; i++) {
//       item.classList.remove(removeStyles[i]); // удаляем все хайден стили у стилей рисунка
//       item.classList.add("animated", "fadeIn");
//     }
//     for (let i = 0; i < addStyles.length; i++) {
//       item.classList.add(addStyles[i]); // добавляем стили для подобающей видимости у стилей рисунка
//     }

//     trigger.style.display = "none"; //убираем кнопку тригер
//   });
// });

// -------подгрузка стилей с бд json---------

const moreStylesJson = (trigger, wrapper) => {
  trigger = document.querySelector(trigger);
  trigger.addEventListener("click", function () {
    getJson("http://localhost:3000/styles").then((res) => {
      loadStyles(res);
    });

    const loadStyles = (responce) => {
      responce.forEach((styles) => {
        let card = document.createElement("div");
        card.classList.add(
          "animated",
          "fadeIn",
          "col-sm-3",
          "col-sm-offset-0",
          "col-xs-10",
          "col-xs-offset-1"
        );

        card.innerHTML = `
        <div class=styles-block>
          <img src=${styles.src} alt='styles'>
          <h4>${styles.title}</h4>
          <a href=${styles.link}>Подробнее</a>
        </div>`;

        document.querySelector(wrapper).appendChild(card);
      });
    };
  });
};

