var tl=gsap.timeline()
var menuicon=document.querySelector('.header i')
var closeicon=document.querySelector('.menu .links i')

tl.pause()
tl.to(".menu",{
    right:0,
    duration:0.5
})
tl.from(".menu .links a",{
    x:100,
    opacity:0,
    stagger:0.5,
})
tl.from(".menu .links button",{
    y:100,
    opacity:0
})
tl.from(".menu .links i",{
    scale:0.5,
    opacity:0
})
menuicon.addEventListener('click',()=>{
    tl.play()
})
closeicon.addEventListener('click',()=>{
    tl.reverse()
})

gsap.from('.header .logo img',{
    opacity:0,
    x:-500,
    delay:0.8,
    duration:0.9,
   
    
})
gsap.from('.container .information .img',{
    opacity:0,
    y:-100,
    delay:1.5,
    duration:0.9
})
gsap.from('.container .information h2',{
    opacity:0,
    y:100,
    scale:2.5,
    delay:2.5,
    duration:0.5,
})
var tl2=gsap.timeline()
tl2.from('.about .right h2 ',{
    opacity:0,
    x:1800,
    duration:0.5,
    scrollTrigger:{
    trigger:'.about .right h2',
    scroller:'body',
    start:'top 80%',
    end:'top 30%',
    scrub:4,
    }
})
var tl3=gsap.timeline()
tl3.from('.about .right p',{
    opacity:0,
    x:-800,
    duration:0.5,
    scrollTrigger:{
    trigger:'.about .right p',
    scroller:'body',
    start:'top 100%',
    end:'top 50%',
    scrub:4,
    }
})
var tl4=gsap.timeline()
tl4.from('.about .right h3',{
    opacity:0.8,
    x:1800,
    duration:0.5,
    scrollTrigger:{
    trigger:'.about .right h3',
    scroller:'body',
    start:'top 100%',
    end:'top 50%',
    scrub:4,
    }
})
var tl5=gsap.timeline()
tl4.from('.about .left',{
transform:'translateX(140%)',
x:500,
scrollTrigger:{
    trigger:'.about ',
    scroller:'body',
    start:'top 100%',
    end:'top 20%',
    scrub:5,
    }
})
