import { ModalOn, showPopup } from "./modals";
// import { moreStyles } from "./moreStyles";
import { moreStylesJson } from "./moreStyles";
import { price } from "./price";
import { slider } from "./slider";
import { form } from "./postForm";
import { maskPhone } from "./maskPhone";
import { filterPortraits } from "./filterPortraits";
import { viewPicture } from "./viewPicture";
import { accordionVisible } from "./accordionVisible";
import { burger } from "./burger";
import { dragAndDrop } from "./dragAndDrop";
import { uploadPhoto } from "./uploadPhoto";
import "../assets/css/bootstrap.css";
import "../assets/less/main.less";
import "../assets/css/animate.css";
import "../assets/css/main.css";

document.addEventListener("DOMContentLoaded", (e) => {
  ModalOn(".button-design", ".popup-design", ".popup-close");

  ModalOn(".button-consultation", ".popup-consultation", ".popup-close");

  ModalOn(".fixed-gift", ".popup-gift", ".popup-close");
  showPopup(".popup-consultation", 60000);

  // moreStyles(
  //   ".button-transparent",
  //   ".hidden-lg",
  //   ["hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2"],
  //   ["col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1"]
  // );

  moreStylesJson(".button-transparent", "#styles .row");

  price();
  slider(
    ".feedback-slider-item",
    "horizontaly",
    ".main-next-btn",
    ".main-prev-btn"
  );
  slider(".main-slider-item", "verticaly");

  form();
  maskPhone('[name="phone"]');

  filterPortraits();

  viewPicture(".sizes-block");

  accordionVisible(".accordion-block", ".accordion-heading");

  burger(".burger", ".burger-menu");

  dragAndDrop('[name="upload"]')

  uploadPhoto('[name="upload"]')
});
