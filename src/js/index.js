import "../styles/main.css";
import { matrix, animate } from "./canvas";

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
            animate(0);

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
  if (window.scrollY < 300) {
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
