/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! exports provided: accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
var accordion = function () {
  var init = function init() {
    var accordionList = document.querySelectorAll(".accordion-list");
    if (!accordionList.length) {
      return;
    }
    accordionList.forEach(function (list) {
      list.addEventListener("click", function (event) {
        toggleAccordion(event);
      });
    });
    function toggleAccordion(event) {
      var accordionButton = event.target.closest(".accordion__toggle");
      var isExpanded = accordionButton.getAttribute("aria-expanded") === "true";
      var target = accordionButton.parentElement.nextElementSibling;
      accordionButton.setAttribute("aria-expanded", !isExpanded);
      target.hidden = isExpanded;
    }
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/explore-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/explore-slider.js ***!
  \*********************************************/
/*! exports provided: exploreSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exploreSlider", function() { return exploreSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var exploreSlider = function () {
  var init = function init() {
    var exploreSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".js-explore-slider", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: ".js-explore-slider-next",
        prevEl: ".js-explore-slider-prev"
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
var mobileMenu = function () {
  var init = function init() {
    var $mobileMenuToggle = $(".js-toggle-menu");
    var $mobileMenuClose = $(".menu-toggle-close ");
    if (!$mobileMenuToggle.length) {
      return;
    }
    var $body = $("body");
    $mobileMenuToggle.on("click", function () {
      $body.toggleClass("mobile-menu-active");
      $mobileMenuClose.focus();
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/providers-slider.js":
/*!***********************************************!*\
  !*** ./src/js/components/providers-slider.js ***!
  \***********************************************/
/*! exports provided: providersSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providersSlider", function() { return providersSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var providersSlider = function () {
  var init = function init() {
    var providersSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".js-providers-slider", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: ".js-providers-slider-next",
        prevEl: ".js-providers-slider-prev"
      },
      breakpoints: {
        360: {
          slidesPerView: 2,
          spaceBetween: 11
        },
        430: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16
        }
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/quiz.js":
/*!***********************************!*\
  !*** ./src/js/components/quiz.js ***!
  \***********************************/
/*! exports provided: quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quiz", function() { return quiz; });
var quiz = function () {
  var init = function init() {
    var isQuizStarted = false;
    var quickStart = document.querySelector(".js-quiz-start");
    var quizQuestionIntro = document.querySelector(".quiz__intro");
    var quizQuestionWrap = document.querySelector(".quiz__question-wrap");
    var quizQuestions = document.querySelectorAll(".quiz__question");
    var nextQuestions = document.querySelectorAll(".quiz__next");
    var prevQuestions = document.querySelectorAll(".quiz__prev");
    var quizProgressLine = document.querySelector(".progress__line");
    // const quizProgressDividers = document.querySelector(".progress__dividers");
    var quizProgressCurrent = document.querySelector(".progress__questions-current");
    var quizProgressTotal = document.querySelector(".progress__questions-total");
    var quizProgressStats = document.querySelector(".progress__questions");
    var currentQuestionNumber = 1;
    var questionsAmount = quizQuestions.length;
    var progressLineRatio = 100 / questionsAmount;
    quizProgressTotal.textContent = questionsAmount;
    quickStart.addEventListener("click", function () {
      quizQuestionWrap.classList.toggle("active");
      quizQuestionIntro.classList.toggle("hidden");
      quizQuestions[0].classList.add("active");
      quizProgressStats.classList.add("active");
      isQuizStarted = true;
      quizProgressLine.setAttribute("value", currentQuestionNumber * progressLineRatio);
      quizProgressCurrent.textContent = currentQuestionNumber;
    });
    nextQuestions.forEach(function (button, index) {
      button.addEventListener("click", function () {
        quizQuestions.forEach(function () {
          quizQuestions[index].classList.remove("active");
          quizQuestions[index + 1].classList.add("active");
        });
        currentQuestionNumber += 1;
        quizProgressLine.setAttribute("value", currentQuestionNumber * progressLineRatio);
        quizProgressCurrent.textContent = currentQuestionNumber;
      });
    });
    prevQuestions.forEach(function (button, index) {
      button.addEventListener("click", function () {
        quizQuestions.forEach(function () {
          quizQuestions[index + 1].classList.remove("active");
          quizQuestions[index].classList.add("active");
        });
        currentQuestionNumber -= 1;
        quizProgressLine.setAttribute("value", currentQuestionNumber * progressLineRatio);
        quizProgressCurrent.textContent = currentQuestionNumber;
      });
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/scrollto.js":
/*!***************************************!*\
  !*** ./src/js/components/scrollto.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrolltosmooth_dist_scrolltosmooth_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrolltosmooth/dist/scrolltosmooth.esm */ "./node_modules/scrolltosmooth/dist/scrolltosmooth.esm.js");

var smoothScroll = new scrolltosmooth_dist_scrolltosmooth_esm__WEBPACK_IMPORTED_MODULE_0__["default"]("button", {
  targetAttribute: "data-scrollto",
  duration: 400,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
  offset: '.header'
});
smoothScroll.init();

/***/ }),

/***/ "./src/js/components/search-select.js":
/*!********************************************!*\
  !*** ./src/js/components/search-select.js ***!
  \********************************************/
/*! exports provided: searchSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSelect", function() { return searchSelect; });
var searchSelect = function () {
  var init = function init() {
    var $search = $('.js-search');
    var $searchSelect = $('.js-search-select');
    $searchSelect.on('click', function () {
      $search.toggleClass('show');
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var slider = function () {
  var init = function init() {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderPagination.js":
/*!***********************************************!*\
  !*** ./src/js/components/sliderPagination.js ***!
  \***********************************************/
/*! exports provided: sliderPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderPagination", function() { return sliderPagination; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var sliderPagination = function () {
  var init = function init() {
    var swiperPagination = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-pagination", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        renderBullet: function renderBullet(index, className) {
          return '<button class="' + className + '">' + (index + 1) + "</button>";
        }
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/*! exports provided: toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
var toggle = function () {
  var init = function init() {
    var collapseLinks = document.querySelectorAll("[data-collapse-target]");
    if (!collapseLinks.length) {
      return;
    }
    collapseLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var collapseTarget = event.target.dataset.collapseTarget;
        var collapseTargets = document.querySelectorAll("[data-collapse-target=\"".concat(collapseTarget, "\"]"));
        var target = document.querySelector("[data-collapse-content=\"".concat(collapseTarget, "\"]"));
        target.classList.toggle("active");
        collapseTargets.forEach(function (target) {
          return target.classList.toggle("active");
        });
      });
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/video-vimeo.js":
/*!******************************************!*\
  !*** ./src/js/components/video-vimeo.js ***!
  \******************************************/
/*! exports provided: videoVimeo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoVimeo", function() { return videoVimeo; });
var videoVimeo = function () {
  var init = function init() {
    if ($('.js-play-video').length) {
      $('.js-play-video').on('click', function () {
        var $this = $(this);
        var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);
        player.play();
        player.on('play', function () {
          $this.fadeOut(300);
        });
        player.on('pause', function () {
          $this.fadeIn(300);
        });
      });
    }
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/welcome-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/welcome-slider.js ***!
  \*********************************************/
/*! exports provided: welcomeSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcomeSlider", function() { return welcomeSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var welcomeSlider = function () {
  var init = function init() {
    var welcomeSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".js-welcome-slider", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      pagination: {
        el: ".js-welcome-slider-pagination",
        clickable: "true",
        bulletElement: "button",
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_sliderPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliderPagination */ "./src/js/components/sliderPagination.js");
/* harmony import */ var _components_scrollto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scrollto */ "./src/js/components/scrollto.js");
/* harmony import */ var _components_welcome_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/welcome-slider */ "./src/js/components/welcome-slider.js");
/* harmony import */ var _components_providers_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/providers-slider */ "./src/js/components/providers-slider.js");
/* harmony import */ var _components_explore_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/explore-slider */ "./src/js/components/explore-slider.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.js");
/* harmony import */ var _components_search_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-select */ "./src/js/components/search-select.js");
/* harmony import */ var _components_video_vimeo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/video-vimeo */ "./src/js/components/video-vimeo.js");
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/quiz */ "./src/js/components/quiz.js");

// import { vhFix } from "./vendor/vh-fix";




// import { sliderThumbs } from "./components/sliderThumbs";
// import {tabs} from './components/tabs';

// import "./components/gsap-animations";







// import { togglePassword } from "./components/toggle-password";
// import { barChart } from "./components/bar-chart";
// import { pieChart } from "./components/pie-chart";

$(function () {
  _components_accordion__WEBPACK_IMPORTED_MODULE_1__["accordion"].init();
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__["mobileMenu"].init();
  _components_slider__WEBPACK_IMPORTED_MODULE_3__["slider"].init();
  _components_sliderPagination__WEBPACK_IMPORTED_MODULE_4__["sliderPagination"].init();
  // tabs.init();
  _components_welcome_slider__WEBPACK_IMPORTED_MODULE_6__["welcomeSlider"].init();
  _components_providers_slider__WEBPACK_IMPORTED_MODULE_7__["providersSlider"].init();
  _components_explore_slider__WEBPACK_IMPORTED_MODULE_8__["exploreSlider"].init();
  _components_toggle__WEBPACK_IMPORTED_MODULE_9__["toggle"].init();
  _components_search_select__WEBPACK_IMPORTED_MODULE_10__["searchSelect"].init();
  _components_video_vimeo__WEBPACK_IMPORTED_MODULE_11__["videoVimeo"].init();
  _components_quiz__WEBPACK_IMPORTED_MODULE_12__["quiz"].init();
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./vendor/fancyselect */ "./src/js/vendor/fancyselect.js");

/***/ }),

/***/ "./src/js/vendor/fancyselect.js":
/*!**************************************!*\
  !*** ./src/js/vendor/fancyselect.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2021 Momo Bassit.
 * Licensed under the MIT License (MIT)
 * https://github.com/mdbassit/fancySelect
 */

(function (window, document, autoInitialize) {
  var currentElement = null;
  var searchString = "";
  var searchTimeout = null;
  var counter = 0;

  /**
   * Initialize the custom select box elements.
   * @param {string} [selector] An optional selector representing native select elements.
   */
  function init(selector) {
    selector = selector || "select:not(.fsb-ignore)";

    // Replace all eligible native select elements with custom select boxes
    document.querySelectorAll(selector).forEach(replaceNativeSelect);
  }

  /**
   * Replace a native select element with a custom select box.
   * @param {object} select The native select.
   * @param {function} [renderer] An optional custom item label renderer.
   */
  function replaceNativeSelect(select, renderer) {
    // Skip if the native select has already been processed
    if (select.nextElementSibling && select.nextElementSibling.classList.contains("fsb-select")) {
      return;
    }
    var options = select.children;
    var parentNode = select.parentNode;
    var customSelect = document.createElement("span");
    var label = document.createElement("span");
    var button = document.createElement("button");
    var list = document.createElement("span");
    var widthAdjuster = document.createElement("span");
    var index = counter++;

    // Add a custom CSS class to the native select element
    select.classList.add("fsb-original-select");

    // Label for accessibility
    label.id = "fsb_" + index + "_label";
    label.className = "fsb-label";
    label.textContent = getNativeSelectLabel(select, parentNode);

    // List box button
    button.id = "fsb_" + index + "_button";
    button.className = "fsb-button";
    button.textContent = "&nbsp;";
    button.setAttribute("type", "button");
    button.setAttribute("aria-disabled", select.disabled);
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-labelledby", "fsb_" + index + "_label fsb_" + index + "_button");

    // List box
    list.className = "fsb-list";
    list.setAttribute("role", "listbox");
    list.setAttribute("tabindex", "-1");
    list.setAttribute("aria-labelledby", "fsb_" + index + "_label");

    // List items
    for (var i = 0, len = options.length; i < len; i++) {
      var _getItemFromOption = getItemFromOption(options[i], renderer),
        item = _getItemFromOption.item,
        selected = _getItemFromOption.selected,
        itemLabel = _getItemFromOption.itemLabel;
      list.appendChild(item);
      if (selected) {
        button.innerHTML = itemLabel;
      }
    }

    // Custom select box container
    customSelect.className = "fsb-select";
    customSelect.appendChild(label);
    customSelect.appendChild(button);
    customSelect.appendChild(list);
    customSelect.appendChild(widthAdjuster);

    // Hide the native select
    select.style.display = "none";

    // Insert the custom select box after the native select
    if (select.nextSibling) {
      parentNode.insertBefore(customSelect, select.nextSibling);
    } else {
      parentNode.appendChild(customSelect);
    }

    // Force the select box to take the width of the longest item by default
    if (list.firstElementChild) {
      var span = document.createElement("span");
      span.setAttribute("style", "width: " + list.firstElementChild.offsetWidth + "px;");
      widthAdjuster.className = "fsb-resize";
      widthAdjuster.appendChild(span);
    }
  }

  /**
   * Update the custom select box attached to a native select.
   * @param {object} select The native select.
   * @param {function} [renderer] An optional custom item label renderer.
   */
  function updateFromNativeSelect(select, renderer) {
    var options = select.children;
    var parentNode = select.parentNode;
    var customSelect = select.nextElementSibling;

    // Abort if this native select hasn't been initialized
    if (!customSelect || !customSelect.classList.contains("fsb-select")) {
      return;
    }
    var label = customSelect.firstElementChild;
    var button = label.nextElementSibling;
    var list = button.nextElementSibling;
    var widthAdjuster = list.nextElementSibling;
    var listContent = document.createDocumentFragment();

    // Update the accessibility label
    label.textContent = getNativeSelectLabel(select, parentNode);

    // Update the button status
    button.setAttribute("aria-disabled", select.disabled);

    // Generate the list items
    for (var i = 0, len = options.length; i < len; i++) {
      var _getItemFromOption2 = getItemFromOption(options[i], renderer),
        item = _getItemFromOption2.item,
        selected = _getItemFromOption2.selected,
        itemLabel = _getItemFromOption2.itemLabel;
      listContent.appendChild(item);
      if (selected) {
        button.innerHTML = itemLabel;
      }
    }

    // Clear the list box
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    // Update the list items
    list.appendChild(listContent);

    // Force the select box to take the width of the longest item by default
    if (list.firstElementChild) {
      widthAdjuster.firstElementChild.setAttribute("style", "width: " + list.firstElementChild.offsetWidth + "px;");
    }
  }

  /**
   * Try to guess the native select element's label if any.
   * @param {object} select The native select.
   * @param {object} parent The parent node.
   * @return {string} The native select's label or an empty string.
   */
  function getNativeSelectLabel(select, parent) {
    var id = select.id;
    var labelElement;

    // If the select element is inside a label element
    if (parent.nodeName === "LABEL") {
      labelElement = parent;

      // Or if the select element has an ID, and there is a label element
      // with an attribute "for" that points to that ID
    } else if (id !== undefined) {
      labelElement = document.querySelector('label[for="' + id + '"]');
    }

    // If a label element is found, return the first non empty child text node
    if (labelElement) {
      var textNodes = [].filter.call(labelElement.childNodes, function (n) {
        return n.nodeType === 3;
      });
      var texts = textNodes.map(function (n) {
        return n.textContent.replace(/\s+/g, " ").trim();
      });
      var label = texts.filter(function (l) {
        return l !== "";
      })[0];
      if (label) {
        // Open the list box on click on the label element
        labelElement.onclick = function (event) {
          select.nextElementSibling.querySelector("button").click();
          event.preventDefault();
          event.stopImmediatePropagation();
        };
        return label;
      }
    }
    return "";
  }

  /**
   * Generate a listbox item from a native select option.
   * @param {object} option The native select option.
   * @param {function} [renderer] An optional custom item label renderer.
   * @return {object} The listbox item, its selected state and its label.
   */
  function getItemFromOption(option, renderer) {
    var item = document.createElement("span");
    var selected = option.selected;
    var itemLabel = getItemLabel(option, renderer);
    item.className = "fsb-option";
    item.innerHTML = itemLabel;
    item.setAttribute("role", "option");
    item.setAttribute("tabindex", "-1");
    item.setAttribute("aria-selected", selected);
    return {
      item: item,
      selected: selected,
      itemLabel: itemLabel
    };
  }

  /**
   * Render a listbox item's label.
   * @param {object} option The native select option.
   * @param {function} [renderer] An optional custom item label renderer.
   * @return {string} The listbox item's label.
   */
  function getItemLabel(option, renderer) {
    if (typeof renderer === "function") {
      return renderer(option);
    }
    var text = option.text;
    var icon = option.getAttribute("data-icon");
    var label = text !== "" ? text : "&nbsp;";

    // Wrap label in a span to better handle long text
    label = "<span>" + label + "</span>";
    if (icon !== null) {
      label = '<svg aria-hidden="true"><use href="' + icon + '"></use></svg> ' + label;
    }
    return label;
  }

  /**
   * Open a list box.
   * @param {object} button The button to which the list box is attached.
   */
  function openListBox(button) {
    var rect = button.getBoundingClientRect();
    var list = button.nextElementSibling;
    var selectedItem = list.querySelector('[aria-selected="true"]');
    if (!selectedItem) {
      selectedItem = list.firstElementChild;
    }

    // Open the list box and focus the selected item
    button.parentNode.className = "fsb-select";
    button.setAttribute("aria-expanded", "true");
    selectedItem.focus();
    currentElement = button;

    // Position the list box on top of the button if there isn't enough space on the bottom
    if (rect.y + rect.height + list.offsetHeight > document.documentElement.clientHeight) {
      button.parentNode.className = "fsb-select fsb-top";
    }
  }

  /**
   * Close the active list box.
   * @param {boolean} focusButton If true, set focus on the button to which the list box is attached.
   */
  function closeListBox(focusButton) {
    var activeListBox = document.querySelector('.fsb-button[aria-expanded="true"]');
    if (activeListBox) {
      activeListBox.setAttribute("aria-expanded", "false");
      if (focusButton) {
        activeListBox.focus();
      }

      // Clear the search string in case someone is a ninja!!!
      searchString = "";
      searchTimeout = null;
    }
    currentElement = null;
  }

  /**
   * Set the selected item.
   * @param {object} item The item to be selected.
   */
  function selectItem(item) {
    var list = item.parentNode;
    var button = list.previousElementSibling;
    var itemIndex = [].indexOf.call(list.children, item);
    var selectedItem = list.querySelector('[aria-selected="true"]');
    var originalSelect = list.parentNode.previousElementSibling;
    if (selectedItem) {
      selectedItem.setAttribute("aria-selected", "false");
    }
    item.setAttribute("aria-selected", "true");
    button.innerHTML = item.innerHTML;

    // Update the original select
    originalSelect.selectedIndex = itemIndex;
    originalSelect.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    originalSelect.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }

  /**
   * Get the next item that matches a string.
   * @param {object} list The active list box.
   * @param {string} search The search string.
   * @return {object} The item that matches the string.
   */
  function getMatchingItem(list, search) {
    var items = [].map.call(list.children, function (item) {
      return item.textContent.trim().toLowerCase();
    });
    var firstMatch = filterItems(items, search)[0];

    // If an exact match is found, return it
    if (firstMatch) {
      return list.children[items.indexOf(firstMatch)];

      // If the search string is the same character repeated multiple times
      // we need to cycle through the items starting with that character
    } else if (isRepeatedCharacter(search)) {
      // Get all the items matching the character
      var matches = filterItems(items, search[0]);

      // The match we want depends on the length of the repeated string
      // e.g: "aa" means the second item starting with "a"
      var matchIndex = (search.length - 1) % matches.length;

      // Return the match
      var match = matches[matchIndex];
      return list.children[items.indexOf(match)];
    }
    return null;
  }

  /**
   * Focus the next item that matches a string.
   * @param {object} list The active list box.
   */
  function focusMatchingItem(list) {
    var item = getMatchingItem(list, searchString);
    if (item) {
      item.focus();
    }
  }

  /**
   * Filter an array of string.
   * @param {array} items.
   * @param {string} filter The filter string.
   * @return {array} The array items that matches the filter.
   */
  function filterItems(items, filter) {
    return items.filter(function (item) {
      return item.indexOf(filter.toLowerCase()) === 0;
    });
  }

  /**
   * Check if the the user is typing printable characters.
   * @param {object} event A keydown event.
   * @return {boolean} True if the key pressed is a printable character.
   */
  function isTyping(event) {
    var key = event.key,
      altKey = event.altKey,
      ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;
    if (key.length === 1 && !altKey && !ctrlKey && !metaKey) {
      if (searchTimeout) {
        window.clearTimeout(searchTimeout);
      }
      searchTimeout = window.setTimeout(function () {
        searchString = "";
      }, 500);
      searchString += key;
      return true;
    }
    return false;
  }

  /**
   * Check if a string is the same character repeated multiple times.
   * @param {string} str The string to check.
   * @return {boolean} True if the string the same character repeated multiple times (e.g "aaa").
   */
  function isRepeatedCharacter(str) {
    var characters = str.split("");
    return characters.every(function (_char) {
      return _char === characters[0];
    });
  }

  /**
   * Shortcut for addEventListener with delegation support.
   * @param {object} context The context to which the listener is attached.
   * @param {string} type Event type.
   * @param {(string|function)} selector Event target if delegation is used, event handler if not.
   * @param {function} [fn] Event handler if delegation is used.
   */
  function addListener(context, type, selector, fn) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

    // Delegate event to the target of the selector
    if (typeof selector === "string") {
      context.addEventListener(type, function (event) {
        if (matches.call(event.target, selector)) {
          fn.call(event.target, event);
        }
      });

      // If the selector is not a string then it's a function
      // in which case we need regular event listener
    } else {
      fn = selector;
      context.addEventListener(type, fn);
    }
  }

  /**
   * Call a function only when the DOM is ready.
   * @param {function} fn The function to call.
   * @param {array} [args] Arguments to pass to the function.
   */
  function DOMReady(fn, args) {
    args = args !== undefined ? args : [];
    if (document.readyState !== "loading") {
      fn.apply(void 0, args);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        fn.apply(void 0, args);
      });
    }
  }

  // On click on the list box button
  addListener(document, "click", ".fsb-button", function (event) {
    var isClickToClose = currentElement === event.target;
    closeListBox();
    if (!isClickToClose) {
      openListBox(event.target);
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  });

  // On key press on the list box button
  addListener(document, "keydown", ".fsb-button", function (event) {
    var button = event.target;
    var list = button.nextElementSibling;
    var preventDefault = true;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "Enter":
      case " ":
        openListBox(button);
        break;
      default:
        if (isTyping(event)) {
          openListBox(button);
          focusMatchingItem(list);
        } else {
          preventDefault = false;
        }
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });

  // When the mouse moves on an item, focus it.
  // Use mousemove instead of mouseover to prevent accidental focus on the wrong item,
  // namely when the list box is opened with a keyboard shortcut, and the mouse arrow
  // just happens to be on an item.
  addListener(document.documentElement, "mousemove", ".fsb-option", function (event) {
    event.target.focus();
  });

  // On click on an item
  addListener(document, "click", ".fsb-option", function (event) {
    selectItem(event.target);
    closeListBox(true);
  });

  // On key press on an item
  addListener(document, "keydown", ".fsb-option", function (event) {
    var item = event.target;
    var list = item.parentNode;
    var preventDefault = true;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        if (item.previousElementSibling) {
          item.previousElementSibling.focus();
        }
        break;
      case "ArrowDown":
      case "ArrowRight":
        if (item.nextElementSibling) {
          item.nextElementSibling.focus();
        }
        break;
      case "Home":
        list.firstElementChild.focus();
        break;
      case "End":
        list.lastElementChild.focus();
        break;
      case "PageUp":
      case "PageDown":
        // Disable Page Up and Page Down keys
        break;
      case "Tab":
        selectItem(item);
        closeListBox();
        preventDefault = false;
        break;
      case "Enter":
      case " ":
        selectItem(item);
      case "Escape":
        closeListBox(true);
        break;
      default:
        if (isTyping(event)) {
          focusMatchingItem(list);
        } else {
          preventDefault = false;
        }
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });

  // On click outside the custom select box, close it
  addListener(document, "click", function (event) {
    closeListBox();
  });

  // Expose the constructor to the global scope
  window.FancySelect = function () {
    function FancySelect() {
      DOMReady(init);
    }

    // Available methodes
    FancySelect.init = init;
    FancySelect.replace = replaceNativeSelect;
    FancySelect.update = updateFromNativeSelect;
    return FancySelect;
  }();

  // Initialize the custom select boxes when the DOM is ready
  if (autoInitialize) {
    DOMReady(init);
  }
})(window, document, typeof FancySelectAutoInitialize !== "undefined" ? FancySelectAutoInitialize : true);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map