export { form };
import spinner from "../assets/img/spinner.gif";
import ok from "../assets/img/ok.png";
import fail from "../assets/img/fail.png";
import {postData} from "../js/services/requests.js"

const form = () => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload = document.querySelectorAll('[name="upload"]');

  const messages = {
    succsesfull: "Спасибо за заявку. Мы свяжемся с Вами в ближайшее время",
    loading: "Загрузка...",
    error: "Что-то пошло не так...",
    uncorrected: "Форма заполнена не полностью",
    spinner: "./assets/img/spinner.gif",
    okImg: "./assets/img/ok.png",
    failImg: "./assets/img/fail.png",
  };

  let api;

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      let name = item.files[0].name.split(".");
      let dots;
      name[0].length > 6 ? (dots = "...") : (dots = ".");
      item.previousElementSibling.innerHTML =
        name[0].substring(0, 6) + dots + name[1];
    });
  });

  const clearInputs = () => {
    inputs.forEach((item) => (item.value = "")); //чистим инпуты после оптарвки
  };

  

  forms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMesseage = document.createElement("div");
      statusMesseage.classList.add("status");
      item.classList.add("animated", "slideOutUp");
      item.parentNode.appendChild(statusMesseage);

      setTimeout(() => {
        item.style.display = "none"
        statusMesseage.appendChild(divMsg);
      statusMesseage.appendChild(imgMsg);
      }, 300);

      let imgMsg = document.createElement("img");
      let divMsg = document.createElement("div");

      imgMsg.setAttribute("src", messages.spinner);
      imgMsg.classList.add("animated", "fadeIn");
      divMsg.innerHTML = messages.loading;

      

      let formData = new FormData(item);
      console.log(formData + 'это формдата')

      item.closest(".popup-design")
        ? (api =
            "https://benzobak.local/practice/2practice/Source/src/assets/designer.php") // определяем путь в зависимости есть пикча или нет
        : (api =
            "https://benzobak.local/practice/2practice/Source/src/assets/server.php");

      postData(api, formData)
        .then((res) => {
          console.log(res);
          imgMsg.setAttribute("src", messages.okImg);
          divMsg.innerHTML = messages.succsesfull;
        })

        .catch(() => {
          imgMsg.setAttribute("src", messages.failImg);
          divMsg.innerHTML = messages.error;
        })

        .finally(() => {
          clearInputs();
          setTimeout(() => {
            item.parentNode.removeChild(statusMesseage);
            item.style.display = "block";
            item.classList.remove("slideOutUp");
            item.classList.add("animated", "slideInDown");
          }, 5000);
        });
    });
  });
};

// -------проверка заполнения данных на модалке------
// function checkLengthArray (targetCheck, length, parentCheck) {
//     let target = document.querySelector(targetCheck)
//     const parent = document.querySelector(parentCheck)
//     target.addEventListener('click', (e) => {
//         if (Object.keys(arrayForm).length < length) {

//             let error = document.createElement('div')

//             error.classList.add('status')
//             error.classList.add('error_modal')
//             error.style.marginTop = '20px'
//             error.innerHTML = 'Заполнены не все данные'
//             if (document.querySelector('.error_modal')) throw Error
//             parent.appendChild(error)
//             setTimeout(() => error.remove(), 2000)
//         }
//     })
// }
