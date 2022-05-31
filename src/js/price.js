export { price };
//код полное г непрактичное
const price = () => {
  let coef = 0;
  let coef1 = 0;
  let coef2 = 0; // задаю переменные куда буду записывать стоимость услугим в зависимости от выбора пользователя
  let sum = 0;

  const calcPrice = (select, price, mustHaveSelectors) => {
    let windowPrice = document.querySelector(price);
    let doc_select = document.querySelector(select);

    doc_select.addEventListener("change", (e) => {
      let dataPrice = doc_select.querySelectorAll("[data-price]");

      dataPrice.forEach((item) => {
        if (doc_select.value == item.innerHTML) {
          if (doc_select == document.querySelector(mustHaveSelectors[0])) {
            coef = item.getAttribute("data-price");
          } else if (
            doc_select == document.querySelector(mustHaveSelectors[1])
          ) {
            //при выборе опции находим какую именно выбрал пользователь и записываем коэфицициент data-price в переменную
            coef1 = item.getAttribute("data-price");
          } else coef2 = item.getAttribute("data-price");
        }
      });

      if (
        document.querySelector(mustHaveSelectors[0]).childNodes[1].innerHTML !=
          document.querySelector(mustHaveSelectors[0]).value &&
        document.querySelector(mustHaveSelectors[1]).childNodes[1].innerHTML !=
          document.querySelector(mustHaveSelectors[1]).value
      ) {
        // если 1 и 2 опции выбраны то пишем цену
        if (document.querySelector(".promocode").value == "IWANTPOPART") {
          console.log("promo aga");
          windowPrice.innerHTML =
            (500 * coef + 500 * coef1 + 500 * coef2) * 0.7 + " РУБ";
        } else
          windowPrice.innerHTML =
            500 * coef + 500 * coef1 + 500 * coef2 + " РУБ";
      } else
        windowPrice.innerHTML =
          "Для расчета нужно выбрать размер картины и материал картины";
    });
  };
  const promocode = (selector, price) => {
    let code = document.querySelector(selector);

    code.addEventListener("keyup", () => {
      if (document.querySelector(price).innerHTML.includes("РУБ"))
      console.log(code.value)
        code.value == "IWANTPOPART"
          ? (document.querySelector(price).innerHTML =
              (500 * coef + 500 * coef1 + 500 * coef2) * 0.7 + " РУБ")
          : document.querySelector(price).innerHTML =
              500 * coef + 500 * coef1 + 500 * coef2 + " РУБ";
    });
  };
  calcPrice("#size", ".calc-price", ["#size", "#material"], "IWANTPOPART");
  calcPrice("#material", ".calc-price", ["#size", "#material"], "IWANTPOPART");
  calcPrice("#options", ".calc-price", ["#size", "#material"], "IWANTPOPART");
  promocode(".promocode", ".calc-price");
};
