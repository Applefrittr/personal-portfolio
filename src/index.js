import "./styles/main.css";

// const aboutBtn = document.querySelector("#about-button");
const body = document.querySelector("body");
const about = document.querySelector(".about");
const aboutHead = document.querySelector("#about-head");
const projects = document.querySelector(".projects");
const projectsHead = document.querySelector("#projects-head");
const aboutLnk = document.querySelector("#about-link");
const contact = document.querySelector("footer")
const projectsLnk = document.querySelector("#projects-link")
const contactLnk = document.querySelector("#contact-link")

// aboutBtn.addEventListener("click", () => {
//   body.classList.toggle("nightmode");
// });

const title = document.querySelector(".title");

setTimeout(() => {
  title.classList.add("slidein");
}, 1000);

const scrollEvents = () => {
  //console.log(window.scrollY)
  let aboutHT = about.offsetTop,
    projectsHT = projects.offsetTop,
    viewHT = window.innerHeight;
  console.log(aboutHT, projectsHT, scrollY + viewHT);
  if (window.scrollY < 300) {
    title.style.paddingTop = `${100 + window.scrollY * 0.9}px`;
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
  } else if (
    window.scrollY + viewHT > aboutHT &&
    window.scrollY + viewHT < projectsHT + 300
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.remove("scale");
    projectsHead.classList.remove("header-slide");
  } else if (window.scrollY + viewHT > projectsHT + 300) {
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
    projects.classList.add("scale");
    projectsHead.classList.add("header-slide");
  } else return;
};

// event listeners
document.addEventListener("scroll", scrollEvents);

aboutLnk.addEventListener("click", () => {
  window.scrollTo({ top: about.offsetTop - 24, left: 0, behavior: "smooth" });
});
projectsLnk.addEventListener("click", () => {
  window.scrollTo({ top: projects.offsetTop - 24, left: 0, behavior: "smooth" });
});
contactLnk.addEventListener("click", () => {
  window.scrollTo({ top: contact.offsetTop - 24, left: 0, behavior: "smooth" });
});
