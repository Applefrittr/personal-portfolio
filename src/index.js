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
const gif1 = document.querySelector("#gif1")
const gif2 = document.querySelector("#gif2")
const gif3 = document.querySelector("#gif3")
const cursor = document.querySelector(".cursor")
const title = document.querySelector(".title");
const titleUser = document.querySelector("h1")
const titleDescrpt = document.querySelector(".title-descrpt")
const descrptP = document.querySelector(".title-descrpt-p")
const login = document.querySelector(".login")
const headerLinks = document.querySelector(".header-links-container")
const svg = document.querySelector(".scroll-svg")

const titleAnimations = () => {
  setTimeout(() => {
    title.classList.add("slidein");
  }, 1000);
  setInterval(() => {
    cursor.classList.toggle("cursor-blink")
  }, 500)

  setTimeout(() => {
    typeWrite("APPLEFRITTR", titleUser, 100)
  }, 3000)
  
  setTimeout(() => {
    titleDescrpt.appendChild(cursor)
    typeWrite("Designing Web Apps with style", descrptP, 75)
  }, 6000)
  
  setTimeout(() => {
    login.style.opacity = "1"
    setTimeout(() => {
      typeWrite(".....", login, 500)
    }, 1000)
    setTimeout(() => {
      const init = document.createElement("span")
      init.textContent = " INITIALIZE"
      login.appendChild(init)
    }, 3750)
  }, 10000)

  setTimeout(() => {
    // let count = 0
    // const print = setInterval(() => {
    //   if (count === 20) clearInterval(print)
    //   let ele = document.createElement('p')
    //   ele.textContent = "//"
    //   title.appendChild(ele)
    //   count++
    // }, 25)
    headerLinks.style.opacity = "1"
    setTimeout(() => {
      svg.style.opacity = "1"
    }, 1000)
  }, 14000)


}

const scrollEvents = () => {
  //console.log(window.scrollY)
  let aboutHT = about.offsetTop,
    projectsHT = projects.offsetTop,
    viewHT = window.innerHeight;
  //console.log(aboutHT, projectsHT, scrollY + viewHT);
  if (window.scrollY < 300) {
    title.style.paddingTop = `${100 + window.scrollY * 0.5}px`;
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
  } else if (
    window.scrollY + viewHT > aboutHT &&
    window.scrollY + viewHT < projectsHT + gif1.offsetTop + 100
  ) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.remove("scale");
    projectsHead.classList.remove("header-slide");
    gif1.classList.remove("gif-slidein")
  } else if (window.scrollY + viewHT > projectsHT + gif1.offsetTop + 100 && window.scrollY + viewHT < projectsHT + gif2.offsetTop + 100) {
    aboutHead.classList.add("header-slide");
    about.classList.add("scale");
    projects.classList.add("scale");
    projectsHead.classList.add("header-slide");
    gif1.classList.add("gif-slidein")
    gif2.classList.remove("gif-slidein")
  } else if (window.scrollY + viewHT > projectsHT + gif2.offsetTop + 100 && window.scrollY + viewHT < projectsHT + gif3.offsetTop + 100) {
    about.classList.remove("scale");
    aboutHead.classList.remove("header-slide");
    gif2.classList.add("gif-slidein")
    gif3.classList.remove("gif-slidein")
  } else if (window.scrollY + viewHT > projectsHT + gif3.offsetTop + 100) {
    gif3.classList.add("gif-slidein")
  } else return;
};

const typeWrite = (string, target, wait) => {
  const arr = string.split('')
  let interval = 250
  arr.forEach((char) => {
    setTimeout(() => {
      let ele = document.createElement("span")
      ele.textContent = char
      target.appendChild(ele)
    }, interval )
    interval += wait
  })
}

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


//Page open

titleAnimations()