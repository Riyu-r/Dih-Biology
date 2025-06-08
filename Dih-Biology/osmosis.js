gsap.registerPlugin(ScrollTrigger);

// Parallax Banner 1: What is Osmosis (between top banner and Section 1)
// Effect: Text fades in/out and moves up, bg zooms in
ScrollTrigger.create({
  trigger: "#parallax-banner-1",
  start: "top top",
  endTrigger: "#osmosis-section-1",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.to("#parallax-banner-1 h2", {
  y: -80,
  opacity: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-1",
    start: "top top",
    endTrigger: "#osmosis-section-1",
    end: "top top",
    scrub: true
  }
});
gsap.to("#parallax-banner-1 div", {
  scale: 1.2,
  filter: "brightness(0.8)",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-1",
    start: "top top",
    endTrigger: "#osmosis-section-1",
    end: "top top",
    scrub: true
  }
});

// Parallax Banner 2: Understanding Osmosis (between Section 1 and Section 2)
// Effect: Text slides in from left, bg slides right and saturates
ScrollTrigger.create({
  trigger: "#parallax-banner-2",
  start: "top top",
  endTrigger: "#osmosis-section-2",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.fromTo("#parallax-banner-2 h2",
  { x: -200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#parallax-banner-2",
      start: "top top",
      endTrigger: "#osmosis-section-2",
      end: "top top",
      scrub: true
    }
  }
);
gsap.to("#parallax-banner-2 div", {
  x: 150,
  filter: "saturate(1.5) blur(4px)",
  scale: 1.05,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-2",
    start: "top top",
    endTrigger: "#osmosis-section-2",
    end: "top top",
    scrub: true
  }
});

// Parallax Banner 3: Examples of Osmosis (between Section 2 and Section 3)
// Effect: Text rotates and fades, bg moves up and gets grayscale
ScrollTrigger.create({
  trigger: "#parallax-banner-3",
  start: "top top",
  endTrigger: "#osmosis-section-3",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});
gsap.to("#parallax-banner-3 h2", {
  rotation: 10,
  opacity: 0,
  y: 100,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-3",
    start: "top top",
    endTrigger: "#osmosis-section-3",
    end: "top top",
    scrub: true
  }
});
gsap.to("#parallax-banner-3 div", {
  y: -120,
  filter: "grayscale(1) blur(2px)",
  scale: 1.13,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-3",
    start: "top top",
    endTrigger: "#osmosis-section-3",
    end: "top top",
    scrub: true
  }
});

// Go Back Button hover effect (optional)
document.querySelectorAll('.go-back-btn a').forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.classList.add('ring-4', 'ring-cyan-400'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('ring-4', 'ring-cyan-400'));
});