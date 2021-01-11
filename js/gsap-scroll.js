let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.header__content',
    }
});

tl1.from('.anim1',{y:100, opacity: 0, duration: 1, stagger: 0.2},"-=1.5 ")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.feature',
    }
});
tl2.from('.feature__title',{x:-200, opacity:0, duration: 0.5})
    .from('.tablink',{y:-100, opacity:0, duration:0.5, stagger: 0.2})
    .from('.features__img',{y:100, opacity:0, duration:1 })
    .from('.content__title',{y:100, opacity:0 ,duration:0.5, stagger:0.1})
    .from('.content__decs',{y:100, opacity:0, duration:0.5  , stagger:0.2})
    
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger:'.about',
    }
}); 

tl3.from('.about__title',{x:-200, opacity:0, duration: 1.5})
    .from('.team__item',{y:100, duration: 1.5,opacity:0, stagger:0.3})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger:'.price',
    }
}); 

tl4.from('.price__title',{x:-200, opacity:0, duration: 1.5})
    .from('.price__item',{y:100, duration: 1,opacity:0, stagger:0.5})

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger:'.contact'
    }
})

tl5.from('.contact__title',{x:-200, opacity:0, duration: 1.5})