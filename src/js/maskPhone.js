export { maskPhone };

const maskPhone = (selector) => {
  // const positionCursor = (pos, elem) => {
  //     elem.focus()
  //     elem.setSelectionRange(pos,pos)
  // }

  function refreshVal(event) {
    let mask = "+7 (___) ___-__-__",
      def = mask.replace(/[^\+\d]/g, ""),
      val = this.value.replace(/[^\+\d]/g, ""),
      i = 0;

    if (event.type == "keydown") {
      if (event.code == "Backspace") {
        clickDelete(this.value.length, def, this, val);
        return;
      }
    }

    if (def.length >= val.length) val = def;

    this.value = mask.replace(/./g, function (a) {
      return /[_\d\+]/.test(a) && val.length > i
        ? val.charAt(i++)
        : val.length <= i
        ? ""
        : a;
    });

    if (event.type == "blur" && this.value == "+7") this.value = "";
  }
  const inputs = document.querySelectorAll('[name="phone"]');

  const clickDelete = (valueLength, def, elem, val) => {
    if (valueLength > 9) {
      elem.value = def;
    }
    //    else positionCursor(this.value.length, this)
  };

  inputs.forEach((input) => {
    input.addEventListener("input", refreshVal);
    input.addEventListener("blur", refreshVal);
    input.addEventListener("focus", refreshVal);
    input.addEventListener("keydown", refreshVal);
  });
};
