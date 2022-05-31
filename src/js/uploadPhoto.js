export { uploadPhoto };
import { postData } from "../js/services/requests.js";

const uploadPhoto = (selectors) => {
  const inputs = document.querySelectorAll(selectors);
  let selectorElement = "";

  inputs.forEach((input) => {
    if (input.closest(".main")) selectorElement = input;
  });

  selectorElement.addEventListener("drop", (e) => {
    let form = new FormData();
    form.append("photo", selectorElement.files[0]);
    postData(
      "https://benzobak.local/practice/2practice/Source/src/assets/designer.php",
      form
    )
      .then((res) => {
        console.log("фото успешно загружено:" + res);
      })
      .catch("ошибка");
  });
};
