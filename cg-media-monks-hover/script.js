document.addEventListener("DOMContentLoaded", function () {
  const workItems = document.querySelectorAll(".work-item");
  const work = document.querySelector(".work");
  const overlay = document.querySelector(".overlay");
  const prevElements = document.querySelectorAll(".prev");

  overlay.style.top = "0%";
  overlay.style.left = "13.25%";
  document.querySelector("#prev-2").classList.add("active");

  function removeActiveClass() {
    prevElements.forEach(function (prev) {
      prev.classList.remove("active");
    });
  }

  workItems.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      removeActiveClass();
      const activePrev = document.querySelector("#prev-" + (index + 1));
      if (activePrev) {
        activePrev.classList.add("active");
      }

      work.classList.add("hovered");
      switch (index) {
        case 0:
          overlay.style.top = "50%";
          overlay.style.left = "50%";
          work.className = "work bg-color-red hovered";
          break;
        case 1:
          overlay.style.top = "0%";
          overlay.style.left = "13.25%";
          work.className = "work bg-color-blue hovered";
          break;
        case 2:
          overlay.style.top = "-50%";
          overlay.style.left = "-23.5%";
          work.className = "work bg-color-green hovered";
          break;
      }
    });

    item.addEventListener("mouseout", function () {
      work.classList.remove("hovered");
      work.className = "work";
      overlay.style.top = "0%";
      overlay.style.left = "13.25%";
      removeActiveClass();
      document.querySelector("#prev-2").classList.add("active");
    });
  });
});
