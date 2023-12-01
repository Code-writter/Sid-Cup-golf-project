
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})


gsap.to("#nav", {
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2
    }
})

var h4all = document.querySelectorAll("#nav h4",)
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#about-us img , #about-us-text",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1,
    }
})

gsap.from(".cardsimg",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cardsimg",
        scroller:"body",
        // marker:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 45%",
        scrub:4
    }

})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 45%",
        scrub:4
    }

})

gsap.from("#page4 h1", {
    y:55,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 100%",
        end:"top 70%",
        scrub:2
    }   
})


gsap.from("#footer #f1img", {
    scale:1.3,
    scrollTrigger:{
        trigger:"#footer #f1img",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:5
    }   
})