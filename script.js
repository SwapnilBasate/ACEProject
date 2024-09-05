
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
    if(counter>6){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })

})  
btnPrev1.addEventListener('click',()=>{
    counter--
    if(counter<0){
        counter=6
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
})  

setInterval(() => {
    counter++
    if(counter>6){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
},5000);
gsap.from('.service .parent .card11',{
    x:100,
    opacity:0,
    delay:0.5,
    duration:0.7,
    //stagger:-0.1,
    scrollTrigger:{
        trigger:".service .parent .card11",
        scroller:'body',
        start:'top 10%',
        end:'top 60%',
        scrub:1
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
        start:'top 10%',
        end:'top 60%',
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
        start:'top 10%',
        end:'top 60%',
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
