var tl = gsap.timeline()

tl.from(".landingpage_bg",{
    scale:2,
    delay:0.6,
    duration:.4,
})

tl.from(".header_item,.header_right_item",{
    y:-10,
    opacity:0,
    stagger:.2,

})
tl.from(".landing_midsection",{
    opacity:0,
    // duration:1,
    y:15,
})

gsap.from(".scnd_sec_left",{
    x:-60,
    opacity:0,
    // delay:2,
    scrollTrigger:{
        trigger:".scnd_sec_left",
        scroller:"#main",
        // markers:true,
        start:"top 80%"
    }
})


gsap.from(".frth_sec_left",{
    x:-60,
    opacity:0,
    // delay:2,
    scrollTrigger:{
        trigger:".frth_sec_left",
        scroller:"#main",
        // markers:true,
        start:"top 80%"
    }
})

gsap.from(".thrd_sec_right",{
    x:60,
    opacity:0,
    // delay:2,
    scrollTrigger:{
        trigger:".thrd_sec_right",
        scroller:"#main",
        // markers:true,
        start:"top 80%"
    }
})

gsap.from(".fft_sec_right",{
    x:60,
    opacity:0,
    // delay:2,
    scrollTrigger:{
        trigger:".fft_sec_right",
        scroller:"#main",
        // markers:true,
        start:"top 80%"
    }
})


var tl2 = gsap.timeline();

tl2.from(".accordion-item",{
    y:20,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".questionaccords",
        scroller:"#main",
        // markers:true,
        start:"top 75%",
        end:"bottom 65%",
        scrub:3,
    }
})

tl2.from(".getemailsec",{
    y:30,
    opacity:0,
    // stagger:1,
    scrollTrigger:{
        trigger:".getemailsec",
        scroller:"#main",
        // markers:true,
        start:"top 55%",
        end:"bottom 50%",
        scrub:3,
    }
})
