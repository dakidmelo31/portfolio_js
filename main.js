
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import splt from 'spltjs'


gsap.registerPlugin(ScrollTrigger)

splt({})

const tl = gsap.timeline();
const main = gsap.timeline();

window.onload = ()=>{
    
    const storyBtn = document.querySelector("#story")
    const educationBtn = document.querySelector("#education")
    const experienceBtn = document.querySelector("#experience")

    experienceBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        tl.to("div.column",{
            height: 0,
            opacity: 0,
            duration: .2
        })
        tl.to("div.column",{
            display: "none",
            duration: .01
        })

        tl.to("div.experience_description", {
            height: "auto",
            display: "block",
            opacity: 1,
            duration: .2
        })
    })

educationBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.preventDefault();
    tl.to("div.column",{
        height: 0,
        opacity: 0,
        duration: .2
    })
    tl.to("div.column",{
        display: "none",
        duration: .01
    })

    tl.to("div.education_description", {
        height: "auto",
        display: "block",
        opacity: 1,
        duration: .2
    })})


storyBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.preventDefault();
    tl.to("div.column",{
        height: 0,
        opacity: 0,
        duration: .2
    })
    tl.to("div.column",{
        display: "none",
        duration: .01
    })

    tl.to("div.story_description", {
        height: "auto",
        display: "block",
        opacity: 1,
        duration: .2
    })})

    // gsap.from( ".experience_description .char", {
    //     scrollTrigger: {
    //         trigger: ".experience_description .char",
    //         start: "top center",
    //         markers: true,
    //         scrub: 1,
    //         onEnter: ()=>{
    //             console.log("Entered")
    //         },
    //         toggleActions: "play none none none"
    //     },
    //     duration: .15,
    //     y: 10,
    //     opacity: 0.2,
    //     stagger: .05
    // })

    gsap.to(".story_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".story_description").offsetHeight * 1),
            scrub: 1,
            // //markers: true,
            onEnter: ()=>{
                document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
            },
            onEnterBack: ()=>{
                document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
            },
            onLeaveBack:()=>{
                document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
            },
            onLeave:()=>{
                document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1.0,
        stagger: .015,
        duration: .1
    })


    gsap.to(".experience_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".experience_description").offsetHeight * 1),
            scrub: 1,
            //markers: true,
            onEnter: ()=>{
                console.log("has entered: ", document.querySelector(".experience_description").offsetHeight)
            },
            onLeave: ()=>{
                console.log("has entered")
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1,
        stagger: .015,
        duration: .1
    })

    gsap.to(".education_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".education_description").offsetHeight * 1),
            scrub: 1,
            //markers: true,
            onEnter: ()=>{
                console.log("has entered: ", document.querySelector(".education_description").offsetHeight)
            },
            onLeave: ()=>{
                console.log("has entered")
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1.0,
        stagger: .015,
        duration: .1
    })


    const sections = gsap.utils.toArray(".projects .project")

    sections.forEach((e)=>{
        gsap.from(e,{
            scrollTrigger:{
                trigger: e,
                start: "top center",
                end: ()=> "+=" + (e.offsetHeight * .9),
                scrub: 3,
                //markers: false,
                onEnter: ()=>{
    
                },
                onLeave: ()=>{
    
                },
                toggleActions: "restart none none pause"
            },
    
            y: -20,
            opacity: ".4",
            scale: 0.65,
            borderRadius: 50,
            ease: "elastic",
            stagger: .025,
            duration: .2
        })
    
    
    })

    gsap.to(".scroll_texts img", {
        scale: .5,
        duration: .2,
        ease: "slow(.03, .99)",
        fill: "rgb(52, 35, 166)",
        rotateZ: 52 * (22/7) * 23,
        stagger: .5,
        repeat: -1,
        yoyo: true,
        delay: 1
    })


    gsap.to(".row_1", {
        scrollTrigger: {
            trigger: ".scroll_texts",
            //markers: true,
            start: "top center",
            toggleActions: "restart none none pause",
            end: "bottom 200%",
        },
        x: ()=> - document.querySelector(".row_1").offsetWidth * 1,
        duration: 42
    })



document.querySelector(".projects").addEventListener("click", (e)=>{


})
}
