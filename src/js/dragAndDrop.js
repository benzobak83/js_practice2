// dragenter - объект над droparea
// dragleave - javascripобъект за пределами droparea
// dragover - объект зависает над droparea
// drop - объект отправлен в droparea

export { dragAndDrop };

const dragAndDrop = (inputsSelector) => {
  const inputsElements = document.querySelectorAll(inputsSelector),
    allEvents = ["dragenter", "dragleave", "dragover", "drop"],
    enterEvents = ["dragenter", "dragover"],
    dropEvents = ["drop", "dragleave"];

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highLighter = (input) => {
    input.closest(".file_upload").style.backgroundColor = "orange";
  };

  const unHighLighter = (input) => {
    if (input.closest(".form-calc"))
      input.closest(".file_upload").style.backgroundColor = "white";
    else if (input.closest(".main"))
      input.closest(".file_upload").style.backgroundColor = "#f7e7e6";
    else input.closest(".file_upload").style.backgroundColor = "#ededed";
  };

  const fileUpload = (e, input) => {
    input.files = e.dataTransfer.files;
    let name = input.files[0].name.split(".");
    let dots;
    name[0].length > 6 ? (dots = "...") : (dots = ".");
    input.previousElementSibling.innerHTML =
      name[0].substring(0, 6) + dots + name[1];
  };

  allEvents.forEach((selectEvent) => {
    inputsElements.forEach((input) => {
      input.addEventListener(selectEvent, preventDefault);
    });
  });

  enterEvents.forEach((selectEvent) => {
    inputsElements.forEach((input) => {
      input.addEventListener(selectEvent, () => {
        highLighter(input);
      });
    });
  });

  dropEvents.forEach((selectEvent) => {
    inputsElements.forEach((input) => {
      input.addEventListener(selectEvent, () => {
        unHighLighter(input);
      });
    });
  });

  inputsElements.forEach((input) => {
    input.addEventListener("drop", (e) => {
      fileUpload(e, input);
    });
  });
};
