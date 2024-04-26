document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });
  gsap.set(".nav-item", { y: 25, opacity: 0 });
  gsap.set("h1, .item, footer", { y: 200 });

  const tl = gsap.timeline({ delay: 1 });

  tl.to(".img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(
      ".img:not(#loader-logo)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .to(
      ".nav-item, h1, footer, .item",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
});
