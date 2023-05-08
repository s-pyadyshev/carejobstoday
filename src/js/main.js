import "./vendor";
// import { vhFix } from "./vendor/vh-fix";
import { accordion } from "./components/accordion";
import { mobileMenu } from "./components/mobile-menu";
import { slider } from "./components/slider";
import { sliderPagination } from "./components/sliderPagination";
import { welcomeSlider } from "./components/welcome-slider";
import { providersSlider } from "./components/providers-slider";
import { exploreSlider } from "./components/explore-slider";
import { toggle } from "./components/toggle";
import { searchSelect } from "./components/search-select";
import { videoVimeo } from "./components/video-vimeo";
import { quiz } from "./components/quiz";
import { navSlider } from "./components/navSlider";
import "./components/scrollto";

window.addEventListener(
  "load",
  () => {
    accordion.init();
    mobileMenu.init();
    slider.init();
    sliderPagination.init();
    welcomeSlider.init();
    providersSlider.init();
    exploreSlider.init();
    toggle.init();
    searchSelect.init();
    videoVimeo.init();
    quiz.init();
    navSlider.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
