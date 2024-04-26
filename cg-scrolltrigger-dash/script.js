document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".logo", {
    y: "-50%",
    scale: 0.35,
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "top top",
      end: "100vh top",
      scrub: 1,
    },
  });

  gsap.to(".dashboard", {
    y: "-25%",
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "top top",
      end: "200vh top",
      scrub: 1,
    },
  });

  gsap.to("#dashboard-img", {
    filter: "blur(10px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "600vh top",
      end: "1000vh top",
      scrub: 0.5,
    },
  });

  gsap.to("#window img", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "400vh top",
      end: "450vh top",
      scrub: 0.5,
    },
  });

  gsap.to(".dashboard", {
    transformOrigin: "center 85.6%",
    scale: 75,
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "600vh top",
      end: "900vh top",
      scrub: 1,
    },
  });

  gsap.to(".dashboard", {
    opacity: 0,
    display: "none",
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "800vh top",
      end: "825vh top",
      scrub: true,
    },
  });
});
