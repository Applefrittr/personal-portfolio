/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "matrix": () => (/* binding */ matrix)
/* harmony export */ });
const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Symbol {
  characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ:・.=*+-<></>[]{}0123456789日ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.fontSize = size;
    this.char = "";
  }

  draw() {
    ctx.translate(this.x, this.y);
    ctx.scale(-1, 1);
    ctx.fillText(this.char, -this.x * this.fontSize, this.y * this.fontSize);
    ctx.resetTransform();
  }

  update() {
    this.y++;
    if (this.y * this.fontSize > canvas.height && Math.random() > 0.97)
      this.y = 0;
    this.char =
      this.characters[Math.floor(Math.random() * this.characters.length)];
    this.draw();
  }
}

class Matrix {
  constructor() {
    this.width = canvas.width;
    this.height = canvas.height;
    this.fontSize = 18;
    this.columns = this.width / this.fontSize;
    this.symbols = [];
    this.#createSymbols();
  }

  #createSymbols() {
    for (let i = 0; i < this.columns; i++) {
      const symbol = new Symbol(i, 0, this.fontSize);
      this.symbols.push(symbol);
    }
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    this.columns = this.width / this.fontSize;
    this.symbols = [];
    this.#createSymbols();
  }
}

const matrix = new Matrix();

let lastTime = 0;
const FPS = 30;
const nextFrame = 1000 / FPS;
let timer = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.font = matrix.fontSize + "px monospace";
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, matrix.width, matrix.height);
    ctx.fillStyle = "#ff003c";
    matrix.symbols.forEach((symbol) => symbol.update());
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  if (canvas.width !== innerWidth) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    matrix.resize(innerWidth, innerHeight);
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");



const body = document.querySelector("body");
const about = document.querySelector(".about");
const aboutHead = document.querySelector("#about-head");
const projects = document.querySelector(".projects");
const projectsHead = document.querySelector("#projects-head");
const aboutLnks = document.querySelectorAll("#about-link");
const contact = document.querySelector("footer");
const projectsLnks = document.querySelectorAll("#projects-link");
const contactLnk = document.querySelector("#contact-link");
const gif0 = document.querySelector("#gif0");
const gif1 = document.querySelector("#gif1");
const gif2 = document.querySelector("#gif2");
const gif3 = document.querySelector("#gif3");
const gif4 = document.querySelector("#gif4");
const headerLinks = document.querySelector(".header-links-container");
const home = document.querySelector("#home");

const heroCursor = document.querySelector(".hero-cursor");
const loginContainer = document.querySelector(".login-container");
const loginUser = document.querySelector("#login-user");
const loginPass = document.querySelector("#login-pass");
const loginPassField = document.querySelector("#login-pass-field");
const loginExecute = document.querySelector("#login-execute");
const loginExecuteOverlay = document.querySelector("#login-execute-overlay");
const headerUser = document.querySelector(".header-user");

const titleAnimations = () => {
  setTimeout(() => {
    typeWrite("applefrittr", loginUser, 50);

    setTimeout(() => {
      loginPassField.appendChild(heroCursor);
      typeWrite("************", loginPass, 50);

      setTimeout(() => {
        loginExecuteOverlay.classList.add("slide");

        setTimeout(() => {
          loginExecute.classList.add("bg-theme");

          setTimeout(() => {
            (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.animate)(0);

            setTimeout(() => {
              headerUser.classList.add("reveal");
              setTimeout(() => {
                headerUser.classList.add("fade-in");
              }, 100);
              setTimeout(() => {
                headerLinks.classList.add("reveal");
                loginContainer.classList.add("hide");
                setTimeout(() => {
                  headerLinks.classList.add("fade-in");
                }, 100);
              }, 1000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

const scrollEvents = () => {
  let aboutHT = about.offsetTop,
    projectsHT = projects.offsetTop,
    viewHT = window.innerHeight;
  if (window.scrollY + viewHT < 300) {
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
  } else if (
    window.scrollY + viewHT > aboutHT &&
    window.scrollY + viewHT < projectsHT + gif0.offsetTop
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.remove("scale");
    projectsHead.classList.remove("header-slide");
    gif0.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif0.offsetTop &&
    window.scrollY + viewHT < projectsHT + gif1.offsetTop
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.add("scale");
    projectsHead.classList.add("header-slide");
    gif0.classList.add("gif-slidein");
    gif1.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif1.offsetTop &&
    window.scrollY + viewHT < projectsHT + gif2.offsetTop
  ) {
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
    gif1.classList.add("gif-slidein");
    gif2.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif2.offsetTop &&
    window.scrollY + viewHT < projectsHT + gif3.offsetTop
  ) {
    gif2.classList.add("gif-slidein");
    gif3.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif3.offsetTop &&
    window.scrollY + viewHT < projectsHT + gif4.offsetTop
  ) {
    gif3.classList.add("gif-slidein");
    gif4.classList.remove("gif-slidein");
  } else if (window.scrollY + viewHT > projectsHT + gif4.offsetTop) {
    gif4.classList.add("gif-slidein");
  } else return;
};

const typeWrite = (string, target, wait) => {
  const arr = string.split("");
  let interval = 250;
  arr.forEach((char) => {
    setTimeout(() => {
      let ele = document.createElement("span");
      ele.textContent = char;
      target.appendChild(ele);
    }, interval);
    interval += wait;
  });
};

// event listeners
document.addEventListener("scroll", scrollEvents);

aboutLnks.forEach((button) =>
  button.addEventListener("click", () => {
    window.scrollTo({ top: about.offsetTop - 24, left: 0, behavior: "smooth" });
  })
);
projectsLnks.forEach((button) =>
  button.addEventListener("click", () => {
    window.scrollTo({
      top: projects.offsetTop - 24,
      left: 0,
      behavior: "smooth",
    });
  })
);
contactLnk.addEventListener("click", () => {
  window.scrollTo({ top: contact.offsetTop - 24, left: 0, behavior: "smooth" });
});

home.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

//Page open

titleAnimations();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUN6RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDZTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0RBQU87O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix3REFBd0Q7QUFDOUUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLDBEQUEwRDtBQUM5RSxDQUFDOztBQUVEO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RCxDQUFDOztBQUVEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9tYWluLmNzcz81ODQ2Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9qcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5jYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2xhc3MgU3ltYm9sIHtcbiAgY2hhcmFjdGVycyA9XG4gICAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjrjg7suPSorLTw+PC8+W117fTAxMjM0NTY3ODnml6XvvabvvbHvvbPvvbTvvbXvvbbvvbfvvbnvvbrvvbvvvbzvvb3vvb7vvb/vvoDvvoLvvoPvvoXvvobvvofvvojvvorvvovvvo7vvo/vvpDvvpHvvpLvvpPvvpTvvpXvvpfvvpjvvpxcIjtcbiAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICB0aGlzLmNoYXIgPSBcIlwiO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHguc2NhbGUoLTEsIDEpO1xuICAgIGN0eC5maWxsVGV4dCh0aGlzLmNoYXIsIC10aGlzLnggKiB0aGlzLmZvbnRTaXplLCB0aGlzLnkgKiB0aGlzLmZvbnRTaXplKTtcbiAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnkrKztcbiAgICBpZiAodGhpcy55ICogdGhpcy5mb250U2l6ZSA+IGNhbnZhcy5oZWlnaHQgJiYgTWF0aC5yYW5kb20oKSA+IDAuOTcpXG4gICAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuY2hhciA9XG4gICAgICB0aGlzLmNoYXJhY3RlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCldO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuZm9udFNpemUgPSAxODtcbiAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLndpZHRoIC8gdGhpcy5mb250U2l6ZTtcbiAgICB0aGlzLnN5bWJvbHMgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVTeW1ib2xzKCk7XG4gIH1cblxuICAjY3JlYXRlU3ltYm9scygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBuZXcgU3ltYm9sKGksIDAsIHRoaXMuZm9udFNpemUpO1xuICAgICAgdGhpcy5zeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLndpZHRoIC8gdGhpcy5mb250U2l6ZTtcbiAgICB0aGlzLnN5bWJvbHMgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVTeW1ib2xzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcblxubGV0IGxhc3RUaW1lID0gMDtcbmNvbnN0IEZQUyA9IDMwO1xuY29uc3QgbmV4dEZyYW1lID0gMTAwMCAvIEZQUztcbmxldCB0aW1lciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlKHRpbWVTdGFtcCkge1xuICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lU3RhbXAgLSBsYXN0VGltZTtcbiAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gIGlmICh0aW1lciA+IG5leHRGcmFtZSkge1xuICAgIGN0eC5mb250ID0gbWF0cml4LmZvbnRTaXplICsgXCJweCBtb25vc3BhY2VcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIG1hdHJpeC53aWR0aCwgbWF0cml4LmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAzY1wiO1xuICAgIG1hdHJpeC5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4gc3ltYm9sLnVwZGF0ZSgpKTtcbiAgICB0aW1lciA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGltZXIgKz0gZGVsdGFUaW1lO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBpZiAoY2FudmFzLndpZHRoICE9PSBpbm5lcldpZHRoKSB7XG4gICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgbWF0cml4LnJlc2l6ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gIH1cbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCB7IG1hdHJpeCwgYW5pbWF0ZSB9IGZyb20gXCIuL2NhbnZhc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWhlYWRcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBwcm9qZWN0c0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWhlYWRcIik7XG5jb25zdCBhYm91dExua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Fib3V0LWxpbmtcIik7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbmNvbnN0IHByb2plY3RzTG5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHMtbGlua1wiKTtcbmNvbnN0IGNvbnRhY3RMbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcbmNvbnN0IGdpZjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjBcIik7XG5jb25zdCBnaWYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWYxXCIpO1xuY29uc3QgZ2lmMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2lmMlwiKTtcbmNvbnN0IGdpZjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjNcIik7XG5jb25zdCBnaWY0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWY0XCIpO1xuY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1saW5rcy1jb250YWluZXJcIik7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuXG5jb25zdCBoZXJvQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLWN1cnNvclwiKTtcbmNvbnN0IGxvZ2luQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1jb250YWluZXJcIik7XG5jb25zdCBsb2dpblVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLXVzZXJcIik7XG5jb25zdCBsb2dpblBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLXBhc3NcIik7XG5jb25zdCBsb2dpblBhc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tcGFzcy1maWVsZFwiKTtcbmNvbnN0IGxvZ2luRXhlY3V0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tZXhlY3V0ZVwiKTtcbmNvbnN0IGxvZ2luRXhlY3V0ZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLWV4ZWN1dGUtb3ZlcmxheVwiKTtcbmNvbnN0IGhlYWRlclVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci11c2VyXCIpO1xuXG5jb25zdCB0aXRsZUFuaW1hdGlvbnMgPSAoKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHR5cGVXcml0ZShcImFwcGxlZnJpdHRyXCIsIGxvZ2luVXNlciwgNTApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2dpblBhc3NGaWVsZC5hcHBlbmRDaGlsZChoZXJvQ3Vyc29yKTtcbiAgICAgIHR5cGVXcml0ZShcIioqKioqKioqKioqKlwiLCBsb2dpblBhc3MsIDUwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvZ2luRXhlY3V0ZU92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInNsaWRlXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZ2luRXhlY3V0ZS5jbGFzc0xpc3QuYWRkKFwiYmctdGhlbWVcIik7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGUoMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBoZWFkZXJVc2VyLmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhlYWRlclVzZXIuY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7XG4gICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhlYWRlckxpbmtzLmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XG4gICAgICAgICAgICAgICAgbG9naW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICB9LCAxMDAwKTtcbn07XG5cbmNvbnN0IHNjcm9sbEV2ZW50cyA9ICgpID0+IHtcbiAgbGV0IGFib3V0SFQgPSBhYm91dC5vZmZzZXRUb3AsXG4gICAgcHJvamVjdHNIVCA9IHByb2plY3RzLm9mZnNldFRvcCxcbiAgICB2aWV3SFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA8IDMwMCkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZVwiKTtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zbGlkZVwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IGFib3V0SFQgJiZcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA8IHByb2plY3RzSFQgKyBnaWYwLm9mZnNldFRvcFxuICApIHtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zbGlkZVwiKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwic2NhbGVcIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlXCIpO1xuICAgIHByb2plY3RzSGVhZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXNsaWRlXCIpO1xuICAgIGdpZjAuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjAub2Zmc2V0VG9wICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmMS5vZmZzZXRUb3BcbiAgKSB7XG4gICAgYWJvdXRIZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItc2xpZGVcIik7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcInNjYWxlXCIpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJzY2FsZVwiKTtcbiAgICBwcm9qZWN0c0hlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zbGlkZVwiKTtcbiAgICBnaWYwLmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgICBnaWYxLmNsYXNzTGlzdC5yZW1vdmUoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IHByb2plY3RzSFQgKyBnaWYxLm9mZnNldFRvcCAmJlxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUIDwgcHJvamVjdHNIVCArIGdpZjIub2Zmc2V0VG9wXG4gICkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZVwiKTtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zbGlkZVwiKTtcbiAgICBnaWYxLmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgICBnaWYyLmNsYXNzTGlzdC5yZW1vdmUoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IHByb2plY3RzSFQgKyBnaWYyLm9mZnNldFRvcCAmJlxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUIDwgcHJvamVjdHNIVCArIGdpZjMub2Zmc2V0VG9wXG4gICkge1xuICAgIGdpZjIuY2xhc3NMaXN0LmFkZChcImdpZi1zbGlkZWluXCIpO1xuICAgIGdpZjMuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjMub2Zmc2V0VG9wICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmNC5vZmZzZXRUb3BcbiAgKSB7XG4gICAgZ2lmMy5jbGFzc0xpc3QuYWRkKFwiZ2lmLXNsaWRlaW5cIik7XG4gICAgZ2lmNC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2lmLXNsaWRlaW5cIik7XG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPiBwcm9qZWN0c0hUICsgZ2lmNC5vZmZzZXRUb3ApIHtcbiAgICBnaWY0LmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIHJldHVybjtcbn07XG5cbmNvbnN0IHR5cGVXcml0ZSA9IChzdHJpbmcsIHRhcmdldCwgd2FpdCkgPT4ge1xuICBjb25zdCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gIGxldCBpbnRlcnZhbCA9IDI1MDtcbiAgYXJyLmZvckVhY2goKGNoYXIpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGVsZS50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICB9LCBpbnRlcnZhbCk7XG4gICAgaW50ZXJ2YWwgKz0gd2FpdDtcbiAgfSk7XG59O1xuXG4vLyBldmVudCBsaXN0ZW5lcnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXZlbnRzKTtcblxuYWJvdXRMbmtzLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBhYm91dC5vZmZzZXRUb3AgLSAyNCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pXG4pO1xucHJvamVjdHNMbmtzLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogcHJvamVjdHMub2Zmc2V0VG9wIC0gMjQsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH0pXG4pO1xuY29udGFjdExuay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGNvbnRhY3Qub2Zmc2V0VG9wIC0gMjQsIGxlZnQ6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xufSk7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbn0pO1xuXG4vL1BhZ2Ugb3BlblxuXG50aXRsZUFuaW1hdGlvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==