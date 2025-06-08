gsap.registerPlugin(ScrollTrigger);

// Pin the first parallax banner until Section 1 ends
ScrollTrigger.create({
  trigger: "#parallax-banner",
  start: "top top",
  endTrigger: "#diffusion-section-1",
  end: "bottom top",
  pin: true,
  pinSpacing: true,
  scrub: false
});

// Unique effect: fade out and scale up text, bg rotates slightly
gsap.to("#parallax-banner h2", {
  y: -80,
  opacity: 0,
  scale: 1.2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner",
    start: "top top",
    endTrigger: "#diffusion-section-1",
    end: "bottom top",
    scrub: true
  }
});
gsap.to("#parallax-banner div", {
  rotate: 8,
  scale: 1.18,
  filter: "contrast(1.2)",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner",
    start: "top top",
    endTrigger: "#diffusion-section-1",
    end: "bottom top",
    scrub: true
  }
});

// Pin the second parallax banner between Section 1 and Section 2
ScrollTrigger.create({
  trigger: "#parallax-banner-2",
  start: "top top",
  endTrigger: "#diffusion-section-2",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});

// Unique effect: text slides in from right, bg slides left and gets sepia
gsap.fromTo("#parallax-banner-2 h2",
  { x: 200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#parallax-banner-2",
      start: "top top",
      endTrigger: "#diffusion-section-2",
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
    endTrigger: "#diffusion-section-2",
    end: "top top",
    scrub: true
  }
});

// Pin the third parallax banner between Section 2 and Section 3
ScrollTrigger.create({
  trigger: "#parallax-banner-3",
  start: "top top",
  endTrigger: "#diffusion-section-3",
  end: "top top",
  pin: true,
  pinSpacing: true,
  scrub: false
});

// Unique effect: text skews and fades, bg moves diagonally and inverts
gsap.to("#parallax-banner-3 h2", {
  skewX: 20,
  opacity: 0,
  y: 80,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#parallax-banner-3",
    start: "top top",
    endTrigger: "#diffusion-section-3",
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
    endTrigger: "#diffusion-section-3",
    end: "top top",
    scrub: true
  }
});