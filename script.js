// Change navbar text color based on section background color using GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// For the black background section
ScrollTrigger.create({
  trigger: ".section1", // black section
  start: "top 10%",
  end: "bottom 10%",
  onEnter: () => {
    gsap.to("nav a", { color: "white" });
  },
  onLeaveBack: () => {
    gsap.to("nav a", { color: "black" });
  },
});

// For the white background section
ScrollTrigger.create({
  trigger: ".section2", // white section
  start: "top 10%",
  end: "bottom 10%",
  onEnter: () => {
    gsap.to("nav a", { color: "black" });
  },
  onLeaveBack: () => {
    gsap.to("nav a", { color: "white" });
  },
});

ScrollTrigger.create({
  trigger: ".section3", // black section
  start: "top 10%",
  end: "bottom 10%",
  onEnter: () => {
    gsap.to("nav a", { color: "white" });
  },
  onLeaveBack: () => {
    gsap.to("nav a", { color: "black" });
  },
});

// For the white background section
ScrollTrigger.create({
  trigger: ".section4", // white section
  start: "top 10%",
  end: "bottom 10%",
  onEnter: () => {
    gsap.to("nav a", { color: "black" });
  },
  onLeaveBack: () => {
    gsap.to("nav a", { color: "white" });
  },
});

// -----------------------Landing Page------------------------

const vwInPixels = window.innerWidth;
console.log(vwInPixels);
const originalPath = `M 50 50 Q 350 50 700 50`;
const finalPath = `M 700 50 Q 700 50 700 50`;

const heroAbout = document.querySelector("#heroAbout");
const heroAboutSvg = document.querySelector("#heroAbout svg");
const heroAboutSvgPath = document.querySelector("#heroAbout svg path");

heroAboutSvg.setAttribute("width", vwInPixels);
heroAboutSvgPath.setAttribute("d", originalPath);

gsap.to(heroAboutSvgPath, {
  attr: { d: finalPath },
  scrollTrigger: {
    trigger: "#hero",
    start: "center center",
    end: "center 0%",
    scrub: true,
  },
});

gsap.to(".video-container", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#landingPage",
    start: "bottom top",
    end: "center 0%",
    scrub: true,
  },
});

gsap.to("#hero-text", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#hero",
    start: "center center",
    end: "center 0%",
    scrub: true,
  },
});

gsap.to(".cta-button", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#hero",
    start: "center center",
    end: "center 0%",
    scrub: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero-subtitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from("#heroAbout", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1.1,
});

// Feature section animations
gsap.from(".feature-content", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#feature",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".feature-image", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#feature",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

// Navbar background change on scroll
gsap.to("header", {
  backgroundColor: "transparent",
  duration: 0.5,
  scrollTrigger: {
    trigger: "body",
    start: "top -80px",
    end: "top -80px",
    toggleActions: "play none none reverse",
    // marker: true
  },
});

// ----------------------------- About Us -------------------------------

const project = document.querySelectorAll(".project");

window.addEventListener("load", function () {
  // Select the path element
  const path = document.querySelector(".path");
  const path2 = document.querySelector(".path2");
  const path3 = document.querySelector(".path3");

  // Get the total length of the path
  const pathLength = path.getTotalLength();

  // Set initial stroke-dasharray and stroke-dashoffset to make the path hidden
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;
  path2.style.strokeDasharray = pathLength;
  path2.style.strokeDashoffset = pathLength;
  path3.style.strokeDasharray = pathLength;
  path3.style.strokeDashoffset = pathLength;

  // Use GSAP to animate the stroke-dashoffset from pathLength to 0, revealing the path
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#project1",
      start: "top 66%",
      end: "top 30%",
      // end: "center 10%",
      // end: "bottom center",    // End the animation when we scroll past it
      scrub: true, // Smooth animation as you scroll
      // markers: true,
      // stagger: 1
    },
  });

  gsap.to(path2, {
    strokeDashoffset: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#project2",
      start: "top 66%",
      end: "top 35%",
      // end: "bottom center",    // End the animation when we scroll past it
      scrub: true, // Smooth animation as you scroll
      // markers: true,
    },
  });

  gsap.to(path3, {
    strokeDashoffset: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#project3",
      start: "top 76%",
      end: "top 45%",
      // end: "top 35%",    // End the animation when we scroll past it
      scrub: true, // Smooth animation as you scroll
      // markers: true,
    },
  });
});

project.forEach((e) => {
  gsap.fromTo(
    e,
    {
      opacity: 0.2,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "top 50%",
        // markers: true,
        scrub: true,
      },
      ease: "power2.in",
    }
  );

  gsap.fromTo(
    e,
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0.2,
      scale: 0.8,
      scrollTrigger: {
        trigger: e,
        start: "bottom 50%",
        end: "bottom top",
        // markers: true,
        scrub: true,
      },
      ease: "power2.out",
    }
  );
});

// ----------------------------- Director Msg -------------------------------

// gsap.to("#directorMsgPage", {
//     scrollTrigger: {
//         trigger: "#directorMsgPage",
//         start: "top top",
//         markers :true,
//         pin: true
//     }
// })

const tl = gsap.timeline();

tl.to("#directorMsgPage", {
  scrollTrigger: {
    trigger: "#directorMsgPage",
    start: "top top",
    end: "bottom 60%",
    // markers :true,
    pin: true,
  },
});
tl.to(
  "#director1",
  {
    x: 200,
    scale: 1.3,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#director1",
      start: "top 50%",
      end: "top 20%",
      scrub: true,
      // markers :true,
      // pin: true
    },
  },
  "a"
);
tl.to(
  "#maleDirec",
  {
    x: -200,
    scale: 1.3,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#director1",
      start: "top 50%",
      end: "top 20%",
      scrub: true,
      // markers :true,
      // pin: true
    },
  },
  "a"
);
gsap.from("#director2", {
  x: -200,
  scale: 0.5,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#director2",
    start: "top 50%",
    end: "top 20%",
    scrub: true,
    // pin: true
  },
});
gsap.from("#femaleDirec", {
  x: 200,
  scale: 0.5,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#director1",
    start: "top 50%",
    end: "top 20%",
    scrub: true,
    // pin: true
  },
});
