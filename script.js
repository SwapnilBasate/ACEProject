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
gsap.from('.container1 .information .img',{
    opacity:0,
    y:-100,
    delay:1.5,
    duration:0.9
})
gsap.from('.container1 .information h2',{
    opacity:0,
    y:100,
    scale:2.5,
    delay:2.5,
    duration:0.5,
})
gsap.from('.container1 .information p',{
    opacity:0,
    y:400,
    delay:2.7,
    duration:0.5,
})
gsap.from('.container1 .information h3',{
    opacity:0,
    y:400,
    delay:3.1,
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
var image = document.querySelectorAll('.image-gallery img')
var btnNext1 = document.querySelector('#btnNext')
var btnPrev1 = document.querySelector('#btnPrev')
var count=0

image.forEach((image)=>{
    image.style.left=`${count*100}%`
    count++
})

var counter=0
btnNext1.addEventListener('click',()=>{
    counter++
    if(counter>4){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })

})  
btnPrev1.addEventListener('click',()=>{
    counter--
    if(counter<0){
        counter=4
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
})  

setInterval(() => {
    counter++
    if(counter>4){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
},3000);
gsap.from('.service .parent .card11',{
    x:100,
    opacity:0,
    delay:0.5,
    duration:0.7,
    //stagger:-0.1,
    scrollTrigger:{
        trigger:".service .parent .card11",
        scroller:'body',
        start:'top 60%',
        end:'top 40%',
        scrub:1,
    }
})
gsap.from('.service .parent .card22',{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.7,
    //stagger:-0.1,
    scrollTrigger:{
        trigger:".service .parent .card22",
        scroller:'body',
        start:'top 60%',
        end:'top 40%',
        scrub:1
    }
})

gsap.from('.service .parent .card33',{
    x:-100,
    opacity:0,
    delay:0.5,
    duration:0.7,
    //stagger:-0.1,
    scrollTrigger:{
        trigger:".service .parent .card33",
        scroller:'body',
        start:'top 60%',
        end:'top 40%',
        scrub:1
    }
})

gsap.from('.content01 img',{
    opacity:0,
    scale:3,
    stagger:0.5,
    scrollTrigger:{
    trigger:".content01 img",
    scroller:'body',
    start:'top 10%',
    end:'top 30%',
    scrub:1
   } 
})
var demoButton = document.querySelector('.container .left button')
var leftDiv=document.querySelector('.container .left')
var rightDiv=document.querySelector('.container .right')
var heading = document.querySelector('.container .left h2')
var text = document.querySelector('.container .left p')
var fnField = document.querySelector('#fnField')
var cpField = document.querySelector('#cpField')
var title = document.querySelector('.container .right .title h2')
var actionButton=document.querySelector('.container .right form button')

demoButton.addEventListener('click',()=>{
  if(demoButton.innerHTML==='Register'){
    leftDiv.style.transform='translateX(425px)'
    rightDiv.style.transform='translateX(-425px)'
    demoButton.innerHTML='Login'
    heading.innerHTML='Create your new account!'
    text.innerHTML='Already have account,click here to login!'
    fnField.style.maxHeight='100px'
    fnField.style.padding='8px'
    cpField.style.maxHeight='100px'
    cpField.style.padding='8px'
    title.innerHTML='Register'
    actionButton.innerHTML='Register'
  }
  else if(demoButton.innerHTML==='Login'){
    leftDiv.style.transform='translateX(0px)'
    rightDiv.style.transform='translateX(0px)'
    demoButton.innerHTML='Register'
    heading.innerHTML='Hi, Welcome user !!'
    text.innerHTML='Dont have account? To create a new account click here!'
    fnField.style.maxHeight='0px'
    fnField.style.padding='0px'
    cpField.style.maxHeight='0px'
    cpField.style.padding='0px'
    title.innerHTML='Login'
    actionButton.innerHTML='Login'
  }
})

// gsap
var tl1 = gsap.timeline()

tl1.from('.contact-form .title2 h2',{
    opacity:0,
    y:-100
})
tl1.from('.contact-form .container .left h2',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .left p',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .left button',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .right form .title h2',{
    opacity:0,
    y:-100
})
tl1.from('.contact-form .container .right form button',{
    opacity:0,
    x:100
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.footer',
        scroller:'body',
        start:'top 240%',
        end:'top 10%',
        scrub:2,
    }
})
tl2.from('.footer .container2 .row .col',{
    opacity:0,
    y:-400,
})

