gsap.registerPlugin(ScrollTrigger);

// Parallax Banner 1: What is Facilitated Diffusion?
ScrollTrigger.create({
  trigger: "#parallax-banner-1",
  start: "top top",
  endTrigger: "#facdiff-section-1",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.to("#parallax-banner-1 h2", {
  y: -80,
  opacity: 0,
  scale: 1.15,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-1",
    start: "top top",
    endTrigger: "#facdiff-section-1",
    end: "top top",
    scrub: true
  }
});
gsap.to("#parallax-banner-1 div", {
  scale: 1.18,
  filter: "contrast(1.2)",
  rotate: 6,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-1",
    start: "top top",
    endTrigger: "#facdiff-section-1",
    end: "top top",
    scrub: true
  }
});

// Parallax Banner 2: The Factors Affecting Facilitated Diffusion
ScrollTrigger.create({
  trigger: "#parallax-banner-2",
  start: "top top",
  endTrigger: "#facdiff-section-2",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.fromTo("#parallax-banner-2 h2",
  { x: 200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#parallax-banner-2",
      start: "top top",
      endTrigger: "#facdiff-section-2",
      end: "top top",
      scrub: true
    }
  }
);
gsap.to("#parallax-banner-2 div", {
  x: -120,
  filter: "sepia(0.7) blur(3px)",
  scale: 1.09,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-2",
    start: "top top",
    endTrigger: "#facdiff-section-2",
    end: "top top",
    scrub: true
  }
});

// Parallax Banner 3: The Importance of Facilitated Diffusion
ScrollTrigger.create({
  trigger: "#parallax-banner-3",
  start: "top top",
  endTrigger: "#facdiff-section-3",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.to("#parallax-banner-3 h2", {
  skewX: 20,
  opacity: 0,
  y: 80,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-3",
    start: "top top",
    endTrigger: "#facdiff-section-3",
    end: "top top",
    scrub: true
  }
});
gsap.to("#parallax-banner-3 div", {
  x: 80,
  y: -80,
  filter: "invert(0.8) blur(2px)",
  scale: 1.12,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-3",
    start: "top top",
    endTrigger: "#facdiff-section-3",
    end: "top top",
    scrub: true
  }
});

// Go Back Button hover effect
document.querySelectorAll('.go-back-btn a').forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.classList.add('ring-4', 'ring-cyan-400'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('ring-4', 'ring-cyan-400'));
});