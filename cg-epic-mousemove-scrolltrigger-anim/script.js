document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".sticky", {
    scrollTrigger: {
      trigger: ".sticky",
      start: "top top",
      end: () =>
        "+=" +
        (window.innerHeight +
          document.querySelector(".website-content").offsetHeight * 0.5),
      scrub: 1,
      pin: true,
    },
    y: 250,
    scale: 0.75,
    rotation: -15,
    ease: "power3.out",
  });

  gsap.fromTo(
    ".website-content",
    {
      x: -100,
      scale: 0.3,
      rotation: 15,
    },
    {
      scrollTrigger: {
        trigger: ".website-content",
        start: "top 200%",
        end: "top 50%",
        scrub: 1,
      },
      x: 0,
      scale: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});

const wrapper = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emojiFace = document.querySelector(".emoji-face");

const moveEvent = (e) => {
  const wrapperRect = wrapper.getBoundingClientRect();

  const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
  const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

  const emojiMaxDisplacement = 50;
  const emojiFaceMaxDisplacement = 75;

  const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
  const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;
  const emojiFaceDisplacementX =
    (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
  const emojiFaceDisplacementY =
    (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

  gsap.to(emoji, {
    x: emojiDisplacementX,
    y: emojiDisplacementY,
    ease: "power3.out",
    duration: 0.35,
  });

  gsap.to(emojiFace, {
    x: emojiFaceDisplacementX,
    y: emojiFaceDisplacementY,
    ease: "power3.out",
    duration: 0.35,
  });
};

const leaveEvent = () => {
  gsap.to([emoji, emojiFace], {
    x: 0,
    y: 0,
    ease: "power3.out",
    duration: 1,
  });
};

wrapper.addEventListener("mousemove", moveEvent);
wrapper.addEventListener("mouseleave", leaveEvent);
