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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsMERBQTBEO0FBQzlFLENBQUM7O0FBRUQ7QUFDQSxvQkFBb0IscUNBQXFDO0FBQ3pELENBQUM7O0FBRUQ7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzU4NDYiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2pzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbmNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jbGFzcyBTeW1ib2wge1xuICBjaGFyYWN0ZXJzID1cbiAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaOuODuy49KistPD48Lz5bXXt9MDEyMzQ1Njc4OeaXpe+9pu+9se+9s++9tO+9te+9tu+9t++9ue+9uu+9u++9vO+9ve+9vu+9v+++gO++gu++g+++he++hu++h+++iO++iu++i+++ju++j+++kO++ke++ku++k+++lO++le++l+++mO++nFwiO1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgIHRoaXMuY2hhciA9IFwiXCI7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5zY2FsZSgtMSwgMSk7XG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuY2hhciwgLXRoaXMueCAqIHRoaXMuZm9udFNpemUsIHRoaXMueSAqIHRoaXMuZm9udFNpemUpO1xuICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueSsrO1xuICAgIGlmICh0aGlzLnkgKiB0aGlzLmZvbnRTaXplID4gY2FudmFzLmhlaWdodCAmJiBNYXRoLnJhbmRvbSgpID4gMC45NylcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5jaGFyID1cbiAgICAgIHRoaXMuY2hhcmFjdGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoKV07XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cbn1cblxuY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IDE4O1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMud2lkdGggLyB0aGlzLmZvbnRTaXplO1xuICAgIHRoaXMuc3ltYm9scyA9IFtdO1xuICAgIHRoaXMuI2NyZWF0ZVN5bWJvbHMoKTtcbiAgfVxuXG4gICNjcmVhdGVTeW1ib2xzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IG5ldyBTeW1ib2woaSwgMCwgdGhpcy5mb250U2l6ZSk7XG4gICAgICB0aGlzLnN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMud2lkdGggLyB0aGlzLmZvbnRTaXplO1xuICAgIHRoaXMuc3ltYm9scyA9IFtdO1xuICAgIHRoaXMuI2NyZWF0ZVN5bWJvbHMoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuXG5sZXQgbGFzdFRpbWUgPSAwO1xuY29uc3QgRlBTID0gMzA7XG5jb25zdCBuZXh0RnJhbWUgPSAxMDAwIC8gRlBTO1xubGV0IHRpbWVyID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUodGltZVN0YW1wKSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgaWYgKHRpbWVyID4gbmV4dEZyYW1lKSB7XG4gICAgY3R4LmZvbnQgPSBtYXRyaXguZm9udFNpemUgKyBcInB4IG1vbm9zcGFjZVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC4wNSlcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgbWF0cml4LndpZHRoLCBtYXRyaXguaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYwMDNjXCI7XG4gICAgbWF0cml4LnN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiBzeW1ib2wudXBkYXRlKCkpO1xuICAgIHRpbWVyID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aW1lciArPSBkZWx0YVRpbWU7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmIChjYW52YXMud2lkdGggIT09IGlubmVyV2lkdGgpIHtcbiAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbiAgICBtYXRyaXgucmVzaXplKGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcbiAgfVxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHsgbWF0cml4LCBhbmltYXRlIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5cbi8vIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1idXR0b25cIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWhlYWRcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBwcm9qZWN0c0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWhlYWRcIik7XG5jb25zdCBhYm91dExua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Fib3V0LWxpbmtcIik7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbmNvbnN0IHByb2plY3RzTG5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHMtbGlua1wiKTtcbmNvbnN0IGNvbnRhY3RMbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcbmNvbnN0IGdpZjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjBcIik7XG5jb25zdCBnaWYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWYxXCIpO1xuY29uc3QgZ2lmMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2lmMlwiKTtcbmNvbnN0IGdpZjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dpZjNcIik7XG5jb25zdCBnaWY0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWY0XCIpO1xuLy9jb25zdCBjdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvclwiKTtcbi8vY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuLy9jb25zdCB0aXRsZVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4vL2NvbnN0IHRpdGxlRGVzY3JwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZGVzY3JwdFwiKTtcbi8vY29uc3QgZGVzY3JwdFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRlc2NycHQtcFwiKTtcbi8vY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luXCIpO1xuY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1saW5rcy1jb250YWluZXJcIik7XG4vL2NvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsLXN2Z1wiKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5cbmNvbnN0IGhlcm9DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8tY3Vyc29yXCIpO1xuY29uc3QgbG9naW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWNvbnRhaW5lclwiKTtcbmNvbnN0IGxvZ2luVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tdXNlclwiKTtcbmNvbnN0IGxvZ2luUGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tcGFzc1wiKTtcbmNvbnN0IGxvZ2luUGFzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbi1wYXNzLWZpZWxkXCIpO1xuY29uc3QgbG9naW5FeGVjdXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbi1leGVjdXRlXCIpO1xuY29uc3QgbG9naW5FeGVjdXRlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tZXhlY3V0ZS1vdmVybGF5XCIpO1xuY29uc3QgaGVhZGVyVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXVzZXJcIik7XG5cbmNvbnN0IHRpdGxlQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdHlwZVdyaXRlKFwiYXBwbGVmcml0dHJcIiwgbG9naW5Vc2VyLCA1MCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvZ2luUGFzc0ZpZWxkLmFwcGVuZENoaWxkKGhlcm9DdXJzb3IpO1xuICAgICAgdHlwZVdyaXRlKFwiKioqKioqKioqKioqXCIsIGxvZ2luUGFzcywgNTApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9naW5FeGVjdXRlT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9naW5FeGVjdXRlLmNsYXNzTGlzdC5hZGQoXCJiZy10aGVtZVwiKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYW5pbWF0ZSgwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGhlYWRlclVzZXIuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVXNlci5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyTGlua3MuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICAgICAgICAgICAgICBsb2dpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlckxpbmtzLmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIDEwMDApO1xuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInNsaWRlaW5cIik7XG4gIC8vICAgfSwgMTAwMCk7XG4gIC8vICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgY3Vyc29yLmNsYXNzTGlzdC50b2dnbGUoXCJjdXJzb3ItYmxpbmtcIik7XG4gIC8vICAgfSwgNTAwKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgdHlwZVdyaXRlKFwiQVBQTEVGUklUVFJcIiwgdGl0bGVVc2VyLCAxMDApO1xuICAvLyAgIH0sIDMwMDApO1xuXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICB0aXRsZURlc2NycHQuYXBwZW5kQ2hpbGQoY3Vyc29yKTtcbiAgLy8gICAgIHR5cGVXcml0ZShcIkRlc2lnbmluZyBXZWIgQXBwcyB3aXRoIHN0eWxlXCIsIGRlc2NycHRQLCA3NSk7XG4gIC8vICAgfSwgNjAwMCk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIGxvZ2luLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICB0eXBlV3JpdGUoXCIuLi4uLlwiLCBsb2dpbiwgNTAwKTtcbiAgLy8gICAgIH0sIDEwMDApO1xuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IGluaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgLy8gICAgICAgaW5pdC50ZXh0Q29udGVudCA9IFwiIElOSVRJQUxJWkVcIjtcbiAgLy8gICAgICAgbG9naW4uYXBwZW5kQ2hpbGQoaW5pdCk7XG4gIC8vICAgICB9LCAzNzUwKTtcbiAgLy8gICB9LCAxMDAwMCk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIGhlYWRlckxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICBzdmcuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAvLyAgICAgfSwgMTAwMCk7XG4gIC8vICAgfSwgMTQwMDApO1xufTtcblxuY29uc3Qgc2Nyb2xsRXZlbnRzID0gKCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKVxuICBsZXQgYWJvdXRIVCA9IGFib3V0Lm9mZnNldFRvcCxcbiAgICBwcm9qZWN0c0hUID0gcHJvamVjdHMub2Zmc2V0VG9wLFxuICAgIHZpZXdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgLy9jb25zb2xlLmxvZyhhYm91dEhULCBwcm9qZWN0c0hULCBzY3JvbGxZICsgdmlld0hUKTtcbiAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMzAwKSB7XG4gICAgLy90aXRsZS5zdHlsZS5wYWRkaW5nVG9wID0gYCR7MTAwICsgd2luZG93LnNjcm9sbFkgKiAwLjV9cHhgO1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZVwiKTtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zbGlkZVwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IGFib3V0SFQgJiZcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA8IHByb2plY3RzSFQgKyBnaWYwLm9mZnNldFRvcCArIDEwMFxuICApIHtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zbGlkZVwiKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwic2NhbGVcIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlXCIpO1xuICAgIHByb2plY3RzSGVhZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXNsaWRlXCIpO1xuICAgIGdpZjAuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjAub2Zmc2V0VG9wICsgMTAwICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmMS5vZmZzZXRUb3AgKyAxMDBcbiAgKSB7XG4gICAgYWJvdXRIZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItc2xpZGVcIik7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcInNjYWxlXCIpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJzY2FsZVwiKTtcbiAgICBwcm9qZWN0c0hlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zbGlkZVwiKTtcbiAgICBnaWYwLmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgICBnaWYxLmNsYXNzTGlzdC5yZW1vdmUoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IHByb2plY3RzSFQgKyBnaWYxLm9mZnNldFRvcCArIDEwMCAmJlxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUIDwgcHJvamVjdHNIVCArIGdpZjIub2Zmc2V0VG9wICsgMTAwXG4gICkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZVwiKTtcbiAgICBhYm91dEhlYWQuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zbGlkZVwiKTtcbiAgICBnaWYxLmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgICBnaWYyLmNsYXNzTGlzdC5yZW1vdmUoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cuc2Nyb2xsWSArIHZpZXdIVCA+IHByb2plY3RzSFQgKyBnaWYyLm9mZnNldFRvcCArIDEwMCAmJlxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUIDwgcHJvamVjdHNIVCArIGdpZjMub2Zmc2V0VG9wICsgMTAwXG4gICkge1xuICAgIGdpZjIuY2xhc3NMaXN0LmFkZChcImdpZi1zbGlkZWluXCIpO1xuICAgIGdpZjMuY2xhc3NMaXN0LnJlbW92ZShcImdpZi1zbGlkZWluXCIpO1xuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5zY3JvbGxZICsgdmlld0hUID4gcHJvamVjdHNIVCArIGdpZjMub2Zmc2V0VG9wICsgMTAwICYmXG4gICAgd2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPCBwcm9qZWN0c0hUICsgZ2lmNC5vZmZzZXRUb3AgKyAxMDBcbiAgKSB7XG4gICAgZ2lmMy5jbGFzc0xpc3QuYWRkKFwiZ2lmLXNsaWRlaW5cIik7XG4gICAgZ2lmNC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2lmLXNsaWRlaW5cIik7XG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgKyB2aWV3SFQgPiBwcm9qZWN0c0hUICsgZ2lmNC5vZmZzZXRUb3AgKyAxMDApIHtcbiAgICBnaWY0LmNsYXNzTGlzdC5hZGQoXCJnaWYtc2xpZGVpblwiKTtcbiAgfSBlbHNlIHJldHVybjtcbn07XG5cbmNvbnN0IHR5cGVXcml0ZSA9IChzdHJpbmcsIHRhcmdldCwgd2FpdCkgPT4ge1xuICBjb25zdCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gIGxldCBpbnRlcnZhbCA9IDI1MDtcbiAgYXJyLmZvckVhY2goKGNoYXIpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGVsZS50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICB9LCBpbnRlcnZhbCk7XG4gICAgaW50ZXJ2YWwgKz0gd2FpdDtcbiAgfSk7XG59O1xuXG4vLyBldmVudCBsaXN0ZW5lcnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXZlbnRzKTtcblxuYWJvdXRMbmtzLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBhYm91dC5vZmZzZXRUb3AgLSAyNCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pXG4pO1xucHJvamVjdHNMbmtzLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogcHJvamVjdHMub2Zmc2V0VG9wIC0gMjQsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH0pXG4pO1xuY29udGFjdExuay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGNvbnRhY3Qub2Zmc2V0VG9wIC0gMjQsIGxlZnQ6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xufSk7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbn0pO1xuXG4vL1BhZ2Ugb3BlblxuXG50aXRsZUFuaW1hdGlvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==