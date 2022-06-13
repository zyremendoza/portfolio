
gsap.registerPlugin(ScrollTrigger);


gsap.to("#landing-img", {
  x:-1200,
  y:710,
  scrollTrigger: {
    trigger: "#landing-img",
    duration: 1.5, 
    scrub: 2.5,
    start: "top top"
  }
});


gsap.to("b", {
  opacity:1,
  scrollTrigger: { 
    trigger: "b",
    start: "center bottom",
  },
  stagger: 0.2,
  delay: 0.2,
});


  gsap.to(".logo ", {
    duration: 1, 
    opacity:1,  
    delay:3.5
  });
  

  gsap.to(".linkAnimation ", {
    duration: 0.3, 
    opacity:1,  
    stagger: 0.2,
    delay:3.5
  });
  

  gsap.to(".textAnimation", { 
    duration: 1, 
    opacity:1,  
    delay:4.5, 
    stagger: 0.2,
  });




gsap.registerPlugin(ScrollTrigger);
    gsap.to('progress', {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 1.5 }
    });