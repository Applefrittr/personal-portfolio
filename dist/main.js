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
    this.#intialize();
  }

  #intialize() {
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
    this.#intialize();
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
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  matrix.resize(innerWidth, innerHeight);
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



// const aboutBtn = document.querySelector("#about-button");
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
//const cursor = document.querySelector(".cursor");
//const title = document.querySelector(".title");
//const titleUser = document.querySelector("h1");
//const titleDescrpt = document.querySelector(".title-descrpt");
//const descrptP = document.querySelector(".title-descrpt-p");
//const login = document.querySelector(".login");
const headerLinks = document.querySelector(".header-links-container");
//const svg = document.querySelector(".scroll-svg");
const home = document.querySelector("#home");

const heroCursor = document.querySelector(".hero-cursor");
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
  //   setTimeout(() => {
  //     title.classList.add("slidein");
  //   }, 1000);
  //   setInterval(() => {
  //     cursor.classList.toggle("cursor-blink");
  //   }, 500);

  //   setTimeout(() => {
  //     typeWrite("APPLEFRITTR", titleUser, 100);
  //   }, 3000);

  //   setTimeout(() => {
  //     titleDescrpt.appendChild(cursor);
  //     typeWrite("Designing Web Apps with style", descrptP, 75);
  //   }, 6000);

  //   setTimeout(() => {
  //     login.style.opacity = "1";
  //     setTimeout(() => {
  //       typeWrite(".....", login, 500);
  //     }, 1000);
  //     setTimeout(() => {
  //       const init = document.createElement("span");
  //       init.textContent = " INITIALIZE";
  //       login.appendChild(init);
  //     }, 3750);
  //   }, 10000);

  //   setTimeout(() => {
  //     headerLinks.style.opacity = "1";
  //     setTimeout(() => {
  //       svg.style.opacity = "1";
  //     }, 1000);
  //   }, 14000);
};

const scrollEvents = () => {
  //console.log(window.scrollY)
  let aboutHT = about.offsetTop,
    projectsHT = projects.offsetTop,
    viewHT = window.innerHeight;
  //console.log(aboutHT, projectsHT, scrollY + viewHT);
  if (window.scrollY < 300) {
    //title.style.paddingTop = `${100 + window.scrollY * 0.5}px`;
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
  } else if (
    window.scrollY + viewHT > aboutHT &&
    window.scrollY + viewHT < projectsHT + gif0.offsetTop + 100
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.remove("scale");
    projectsHead.classList.remove("header-slide");
    gif0.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif0.offsetTop + 100 &&
    window.scrollY + viewHT < projectsHT + gif1.offsetTop + 100
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.add("scale");
    projectsHead.classList.add("header-slide");
    gif0.classList.add("gif-slidein");
    gif1.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif1.offsetTop + 100 &&
    window.scrollY + viewHT < projectsHT + gif2.offsetTop + 100
  ) {
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
    gif1.classList.add("gif-slidein");
    gif2.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif2.offsetTop + 100 &&
    window.scrollY + viewHT < projectsHT + gif3.offsetTop + 100
  ) {
    gif2.classList.add("gif-slidein");
    gif3.classList.remove("gif-slidein");
  } else if (
    window.scrollY + viewHT > projectsHT + gif3.offsetTop + 100 &&
    window.scrollY + viewHT < projectsHT + gif4.offsetTop + 100
  ) {
    gif3.classList.add("gif-slidein");
    gif4.classList.remove("gif-slidein");
  } else if (window.scrollY + viewHT > projectsHT + gif4.offsetTop + 100) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLDBEQUEwRDtBQUM5RSxDQUFDOztBQUVEO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RCxDQUFDOztBQUVEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9tYWluLmNzcz81ODQ2Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9qcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5jYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2xhc3MgU3ltYm9sIHtcbiAgY2hhcmFjdGVycyA9XG4gICAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjrjg7suPSorLTw+PC8+W117fTAxMjM0NTY3ODnml6XvvabvvbHvvbPvvbTvvbXvvbbvvbfvvbnvvbrvvbvvvbzvvb3vvb7vvb/vvoDvvoLvvoPvvoXvvobvvofvvojvvorvvovvvo7vvo/vvpDvvpHvvpLvvpPvvpTvvpXvvpfvvpjvvpxcIjtcbiAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcbiAgICB0aGlzLmNoYXIgPSBcIlwiO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHguc2NhbGUoLTEsIDEpO1xuICAgIGN0eC5maWxsVGV4dCh0aGlzLmNoYXIsIC10aGlzLnggKiB0aGlzLmZvbnRTaXplLCB0aGlzLnkgKiB0aGlzLmZvbnRTaXplKTtcbiAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnkrKztcbiAgICBpZiAodGhpcy55ICogdGhpcy5mb250U2l6ZSA+IGNhbnZhcy5oZWlnaHQgJiYgTWF0aC5yYW5kb20oKSA+IDAuOTcpXG4gICAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuY2hhciA9XG4gICAgICB0aGlzLmNoYXJhY3RlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCldO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuZm9udFNpemUgPSAxODtcbiAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLndpZHRoIC8gdGhpcy5mb250U2l6ZTtcbiAgICB0aGlzLnN5bWJvbHMgPSBbXTtcbiAgICB0aGlzLiNpbnRpYWxpemUoKTtcbiAgfVxuXG4gICNpbnRpYWxpemUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgY29uc3Qgc3ltYm9sID0gbmV3IFN5bWJvbChpLCAwLCB0aGlzLmZvbnRTaXplKTtcbiAgICAgIHRoaXMuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gICAgdGhpcy5jb2x1bW5zID0gdGhpcy53aWR0aCAvIHRoaXMuZm9udFNpemU7XG4gICAgdGhpcy5zeW1ib2xzID0gW107XG4gICAgdGhpcy4jaW50aWFsaXplKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcblxubGV0IGxhc3RUaW1lID0gMDtcbmNvbnN0IEZQUyA9IDMwO1xuY29uc3QgbmV4dEZyYW1lID0gMTAwMCAvIEZQUztcbmxldCB0aW1lciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlKHRpbWVTdGFtcCkge1xuICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lU3RhbXAgLSBsYXN0VGltZTtcbiAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gIGlmICh0aW1lciA+IG5leHRGcmFtZSkge1xuICAgIGN0eC5mb250ID0gbWF0cml4LmZvbnRTaXplICsgXCJweCBtb25vc3BhY2VcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIG1hdHJpeC53aWR0aCwgbWF0cml4LmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAzY1wiO1xuICAgIG1hdHJpeC5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4gc3ltYm9sLnVwZGF0ZSgpKTtcbiAgICB0aW1lciA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGltZXIgKz0gZGVsdGFUaW1lO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gIG1hdHJpeC5yZXNpemUoaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHsgbWF0cml4LCBhbmltYXRlIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5cbi8vIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1idXR0b25cIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWhlYWRcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBwcm9qZWN0c0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWhlYWRcIik7XG5jb25zdCBhYm91dExua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Fib3V0LWxpbmtcIik7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbmNvbnN0IHByb2plY3RzTG5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHMtbGlua1wiKTtcbmNvbnN0IGNvbnRhY3RMbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcbmNvbnN0IGdpZjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjBcIik7XG5jb25zdCBnaWYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWYxXCIpO1xuY29uc3QgZ2lmMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2lmMlwiKTtcbmNvbnN0IGdpZjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjNcIik7XG5jb25zdCBnaWY0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWY0XCIpO1xuLy9jb25zdCBjdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvclwiKTtcbi8vY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuLy9jb25zdCB0aXRsZVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4vL2NvbnN0IHRpdGxlRGVzY3JwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZGVzY3JwdFwiKTtcbi8vY29uc3QgZGVzY3JwdFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRlc2NycHQtcFwiKTtcbi8vY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luXCIpO1xuY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1saW5rcy1jb250YWluZXJcIik7XG4vL2NvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsLXN2Z1wiKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5cbmNvbnN0IGhlcm9DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8tY3Vyc29yXCIpO1xuY29uc3QgbG9naW5Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbi11c2VyXCIpO1xuY29uc3QgbG9naW5QYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbi1wYXNzXCIpO1xuY29uc3QgbG9naW5QYXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLXBhc3MtZmllbGRcIik7XG5jb25zdCBsb2dpbkV4ZWN1dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLWV4ZWN1dGVcIik7XG5jb25zdCBsb2dpbkV4ZWN1dGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbi1leGVjdXRlLW92ZXJsYXlcIik7XG5jb25zdCBoZWFkZXJVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItdXNlclwiKTtcblxuY29uc3QgdGl0bGVBbmltYXRpb25zID0gKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0eXBlV3JpdGUoXCJhcHBsZWZyaXR0clwiLCBsb2dpblVzZXIsIDUwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9naW5QYXNzRmllbGQuYXBwZW5kQ2hpbGQoaGVyb0N1cnNvcik7XG4gICAgICB0eXBlV3JpdGUoXCIqKioqKioqKioqKipcIiwgbG9naW5QYXNzLCA1MCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsb2dpbkV4ZWN1dGVPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2dpbkV4ZWN1dGUuY2xhc3NMaXN0LmFkZChcImJnLXRoZW1lXCIpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbmltYXRlKDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaGVhZGVyVXNlci5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJVc2VyLmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xuICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyTGlua3MuY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LCAxMDAwKTtcbiAgfSwgMTAwMCk7XG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVpblwiKTtcbiAgLy8gICB9LCAxMDAwKTtcbiAgLy8gICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vICAgICBjdXJzb3IuY2xhc3NMaXN0LnRvZ2dsZShcImN1cnNvci1ibGlua1wiKTtcbiAgLy8gICB9LCA1MDApO1xuXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICB0eXBlV3JpdGUoXCJBUFBMRUZSSVRUUlwiLCB0aXRsZVVzZXIsIDEwMCk7XG4gIC8vICAgfSwgMzAwMCk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIHRpdGxlRGVzY3JwdC5hcHBlbmRDaGlsZChjdXJzb3IpO1xuICAvLyAgICAgdHlwZVdyaXRlKFwiRGVzaWduaW5nIFdlYiBBcHBzIHdpdGggc3R5bGVcIiwgZGVzY3JwdFAsIDc1KTtcbiAgLy8gICB9LCA2MDAwKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgbG9naW4uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIHR5cGVXcml0ZShcIi4uLi4uXCIsIGxvZ2luLCA1MDApO1xuICAvLyAgICAgfSwgMTAwMCk7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgY29uc3QgaW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAvLyAgICAgICBpbml0LnRleHRDb250ZW50ID0gXCIgSU5JVElBTElaRVwiO1xuICAvLyAgICAgICBsb2dpbi5hcHBlbmRDaGlsZChpbml0KTtcbiAgLy8gICAgIH0sIDM3NTApO1xuICAvLyAgIH0sIDEwMDAwKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgaGVhZGVyTGlua3Muc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIHN2Zy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIC8vICAgICB9LCAxMDAwKTtcbiAgLy8gICB9LCAxNDAwMCk7XG59O1xuXG5jb25zdCBzY3JvbGxFdmVudHMgPSAoKSA9PiB7XG4gIC8vY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpXG4gIGxldCBhYm91dEhUID0gYWJvdXQub2Zmc2V0VG9wLFxuICAgIHByb2plY3RzSFQgPSBwcm9qZWN0cy5vZmZzZXRUb3AsXG4gICAgdmlld0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAvL2NvbnNvbGUubG9nKGFib3V0SFQsIHByb2plY3RzSFQsIHNjcm9sbFkgKyB2aWV3SFQpO1xuICBpZiAod2luZG93LnNjcm9sbFkgPCAzMDApIHtcbiAgICAvL3RpdGxlLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHsxMDAgKyB3aW5kb3cuc2Nyb2xsWSAqIDAuNX1weGA7XG4gICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlXCIpO1xuICAgIGFib3V0SGVhZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXNsaWRlXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gYWJvdXRIVCAmJlxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUIDwgcHJvamVjdHNIVCArIGdpZjAub2Zmc2V0VG9wICsgMTAwXG4gICkge1xuICAgIGFib3V0SGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXNsaWRlXCIpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJzY2FsZVwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGVcIik7XG4gICAgcHJvamVjdHNIZWFkLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItc2xpZGVcIik7XG4gICAgZ2lmMC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2lmLXNsaWRlaW5cIik7XG4gIH0gZWxzZSBpZiAoXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPiBwcm9qZWN0c0hUICsgZ2lmMC5vZmZzZXRUb3AgKyAxMDAgJiZcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA8IHByb2plY3RzSFQgKyBnaWYxLm9mZnNldFRvcCArIDEwMFxuICApIHtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zbGlkZVwiKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwic2NhbGVcIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInNjYWxlXCIpO1xuICAgIHByb2plY3RzSGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXNsaWRlXCIpO1xuICAgIGdpZjAuY2xhc3NMaXN0LmFkZChcImdpZi1zbGlkZWluXCIpO1xuICAgIGdpZjEuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjEub2Zmc2V0VG9wICsgMTAwICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmMi5vZmZzZXRUb3AgKyAxMDBcbiAgKSB7XG4gICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlXCIpO1xuICAgIGFib3V0SGVhZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXNsaWRlXCIpO1xuICAgIGdpZjEuY2xhc3NMaXN0LmFkZChcImdpZi1zbGlkZWluXCIpO1xuICAgIGdpZjIuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjIub2Zmc2V0VG9wICsgMTAwICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmMy5vZmZzZXRUb3AgKyAxMDBcbiAgKSB7XG4gICAgZ2lmMi5jbGFzc0xpc3QuYWRkKFwiZ2lmLXNsaWRlaW5cIik7XG4gICAgZ2lmMy5jbGFzc0xpc3QucmVtb3ZlKFwiZ2lmLXNsaWRlaW5cIik7XG4gIH0gZWxzZSBpZiAoXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPiBwcm9qZWN0c0hUICsgZ2lmMy5vZmZzZXRUb3AgKyAxMDAgJiZcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA8IHByb2plY3RzSFQgKyBnaWY0Lm9mZnNldFRvcCArIDEwMFxuICApIHtcbiAgICBnaWYzLmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgICBnaWY0LmNsYXNzTGlzdC5yZW1vdmUoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IHByb2plY3RzSFQgKyBnaWY0Lm9mZnNldFRvcCArIDEwMCkge1xuICAgIGdpZjQuY2xhc3NMaXN0LmFkZChcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgcmV0dXJuO1xufTtcblxuY29uc3QgdHlwZVdyaXRlID0gKHN0cmluZywgdGFyZ2V0LCB3YWl0KSA9PiB7XG4gIGNvbnN0IGFyciA9IHN0cmluZy5zcGxpdChcIlwiKTtcbiAgbGV0IGludGVydmFsID0gMjUwO1xuICBhcnIuZm9yRWFjaCgoY2hhcikgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgZWxlLnRleHRDb250ZW50ID0gY2hhcjtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGUpO1xuICAgIH0sIGludGVydmFsKTtcbiAgICBpbnRlcnZhbCArPSB3YWl0O1xuICB9KTtcbn07XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxFdmVudHMpO1xuXG5hYm91dExua3MuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGFib3V0Lm9mZnNldFRvcCAtIDI0LCBsZWZ0OiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSlcbik7XG5wcm9qZWN0c0xua3MuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBwcm9qZWN0cy5vZmZzZXRUb3AgLSAyNCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfSlcbik7XG5jb250YWN0TG5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogY29udGFjdC5vZmZzZXRUb3AgLSAyNCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG59KTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGxlZnQ6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xufSk7XG5cbi8vUGFnZSBvcGVuXG5cbnRpdGxlQW5pbWF0aW9ucygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9