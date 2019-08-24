const slide = document.querySelector('.slide')
const mountain = document.querySelector('#mountain')

const tl = new TimelineMax()

tl.fromTo(mountain,0.5,{height:"0%"},{height:"80%"})
.fromTo(mountain,0.5,{width:"100%"},{width:"80%"},'+=0.5')
.fromTo(slide,0.5,{x:'-100%'},{x:'0%'})