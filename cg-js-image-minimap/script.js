document.addEventListener("DOMContentLoaded", function () {
  const imagesContainer = document.querySelector(".images");
  const preview = document.querySelector(".preview");
  const minimap = document.querySelector(".minimap");

  function getElementTop(element) {
    let top = 0;
    while (element) {
      top += element.offsetTop;
      element = element.offsetParent;
    }
    return top;
  }

  const imagesStart = getElementTop(imagesContainer);
  const imagesEnd = imagesStart + imagesContainer.offsetHeight;
  const viewportHeight = window.innerHeight;
  const previewHeight = preview.offsetHeight;
  const previewMaxTranslate = (minimap.offsetHeight - previewHeight) * 2.84;

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollRange = imagesEnd - imagesStart - viewportHeight;
    const previewScrollRange = Math.min(previewMaxTranslate, scrollRange);

    if (
      scrollPosition >= imagesStart &&
      scrollPosition <= imagesEnd - viewportHeight
    ) {
      let scrollFraction = (scrollPosition - imagesStart) / scrollRange;
      let previewTranslateY = scrollFraction * previewScrollRange;
      preview.style.transform = `translateX(-50%) translateY(${previewTranslateY}px)`;
    } else if (scrollPosition < imagesStart) {
      preview.style.transform = "translateX(-50%) translateY(0px)";
    } else {
      preview.style.transform = `translateX(-50%) translateY(${previewMaxTranslate}px)`;
    }
  }

  window.addEventListener("scroll", handleScroll);

  const togglePoint = window.innerHeight * 4;
  const wrapper = document.querySelector(".wrapper");

  function checkScroll() {
    if (window.scrollY >= togglePoint) {
      wrapper.classList.add("dark-theme");
    } else {
      wrapper.classList.remove("dark-theme");
    }
  }

  window.addEventListener("scroll", checkScroll);
});
