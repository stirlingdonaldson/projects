const sliderContent = [
  "LuminaPad",
  "PulseEar",
  "ZenithWatch",
  "AeroCharge",
  "NimbusCam",
  "EclipseDrive",
  "TerraHub",
  "QuantumKey",
  "MeshRouter",
  "AuraBearm",
];
let currentImageIndex = 2;
let currentContentIndex = 1;
const totalImages = 10;
let isAnimating = false;

function splitTextIntoSpans(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map(function (char) {
        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
}

gsap.to(".slide-next-img", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1.5,
  ease: "power3.out",
  delay: 1,
});

document.addEventListener("click", function () {
  if (isAnimating) return;
  isAnimating = true;

  splitTextIntoSpans(".slider-content-active h1");

  gsap.to(".slide-active img", {
    scale: 2,
    duration: 2,
    ease: "power3.out",
  });

  gsap.to(".slider-content-active h1 span", {
    top: "-175px",
    stagger: 0.05,
    ease: "power3.out",
    duration: 0.5,
    onComplete: () => {
      gsap.to(".slider-content-active", {
        top: "-175px",
        duration: 0.25,
        ease: "power3.out",
      });
    },
  });

  splitTextIntoSpans(".slider-content-next h1");
  gsap.set(".slider-content-next h1 span", { top: "200px" });

  gsap.to(".slider-content-next", {
    top: "0",
    duration: 1.125,
    ease: "power3.out",
    onComplete: function () {
      document.querySelector(".slider-content-active").remove();
      gsap.to(".slider-content-next h1 span", {
        top: 0,
        stagger: 0.05,
        ease: "power3.out",
        duration: 0.5,
      });

      const nextContent = document.querySelector(".slider-content-next");
      nextContent.classList.remove("slider-content-next");
      nextContent.classList.add("slider-content-active");
      nextContent.style.top = "0";

      currentContentIndex = (currentContentIndex + 1) % totalImages;
      const nextContentText = sliderContent[currentContentIndex];
      const newContentHTML = `<div class="slider-content-next" style="top: 200px;"><h1>${nextContentText}</h1></div>`;
      document
        .querySelector(".slider-content")
        .insertAdjacentHTML("beforeend", newContentHTML);
    },
  });

  currentImageIndex = (currentImageIndex % totalImages) + 1;

  const newSlideHTML = `
     <div class="slide-next">
       <div class="slide-next-img">
         <img src="./assets/${currentImageIndex}.jpg" alt="" />
       </div>
     </div>
   `;
  document
    .querySelector(".slider")
    .insertAdjacentHTML("beforeend", newSlideHTML);

  gsap.to(".slider .slide-next:last-child .slide-next-img", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5,
  });

  const slideNextImg = document.querySelector(".slide-next-img");
  gsap.to(slideNextImg, {
    width: "100vw",
    height: "100vh",
    duration: 2,
    ease: "power3.out",
    onComplete: function () {
      const currentActiveSlide = document.querySelector(".slide-active");
      if (currentActiveSlide) {
        currentActiveSlide.parentNode.removeChild(currentActiveSlide);
      }

      const nextSlide = document.querySelector(".slide-next");
      if (nextSlide) {
        nextSlide.classList.remove("slide-next");
        nextSlide.classList.add("slide-active");

        const nextSlideImg = nextSlide.querySelector(".slide-next-img");
        if (nextSlide) {
          nextSlideImg.classList.remove("slide-next-img");
        }
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    },
  });
});
