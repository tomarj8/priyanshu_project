// gsap.from(".head",{
//     x:-700,
//     duration:1
// })

gsap.to(".head", {
    y:-700,
    transform:"scale(0)",
    scrollTrigger:{
        trigger:"#page2",
        start:"top 700",
        end:"top 200",
        scrub:2,
        duration:1,
        // markers:true

    }
  })

  gsap.to(".head_cont", {
    y:700,
    transform:"scale(0)",
    scrollTrigger:{
        trigger:"#page2",
        start:"top 700",
        end:"end 600",
        scrub:2,
        duration:1,
        // markers:true

    }
  })

gsap.to("#main", {
    backgroundColor : "white",
    
    scrollTrigger:{
      trigger:"#page2",
     
      start:"top 700",
      end:"top 400",
      duration:1,
      scrub:3,
      
      markers:true
    }
  })

  
