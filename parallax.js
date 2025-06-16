const sections = document.querySelectorAll(".section-hero");

sections.forEach(section => {
  const heroTitle = section.querySelector(".hero-title");
  const heroTitleClone = section.querySelector(".hero-title-clone");
  const heroImgWrapper = section.querySelector(".hero-img-wrapper");
  const speed = 1.1;

  function setPos() {
    const { x: titleX, y: titleY } = heroTitle.getBoundingClientRect();
    const { x: wrapperX, y: wrapperY } = heroImgWrapper.getBoundingClientRect();

    heroTitleClone.style.top = `${titleY - getSpeed() - wrapperY}px`;
    heroTitleClone.style.left = `${titleX - wrapperX}px`;
  }

  function getSpeed() {
    return window.pageYOffset * speed;
  }

  window.addEventListener("load", setPos);
  window.addEventListener("resize", setPos);
  window.addEventListener("scroll", function () {
    const t = `translateY(${getSpeed()}px)`;
    heroTitle.style.transform = t;
    heroTitleClone.style.transform = t;
  });
});
