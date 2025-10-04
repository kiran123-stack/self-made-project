import React, { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideo from '../assets/herovideo.mp4';
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.webp";
import ceo from "../assets/ceo.jpeg";
import employee1 from "../assets/employe1.jpg";
import employee2 from "../assets/employe2.jpg";






gsap.registerPlugin(ScrollTrigger);

const Home=()=>{
  const videoRef=useRef();
  const heroRef=useRef();
  const titleRef=useRef();
  const subtitleRef=useRef();
  const gsapRef=useRef();




useLayoutEffect(()=>{
  const el=videoRef.current;
  const tx=gsap.context(()=>{

    const tl=gsap.timeline({
      defaults:{duration:1.5,ease:"power3.out"}
    });

    tl.from(titleRef.current,{
      y:50,
      opacity:0,
      duration:2.5,
      ease:"back.in"
    })
    tl.from(subtitleRef.current,{
      y:50,
      opacity:0,
      duration:2.5,
      ease:"back.inOut"
      
    },'-=1.8')

     gsap.from(gsapRef.current.querySelectorAll("p"), {
      scrollTrigger: {
        trigger: gsapRef.current,   // section to watch
        start: "top 80%",           // when top of section reaches 80% of viewport
        end: "bottom 20%",
        toggleActions: "play none none none", // play only once
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "ease.in"
    });

    el.onloadedmetadata=()=>{
      ScrollTrigger.create({
        trigger:heroRef.current,
        start:'top top',
        end:'Bottom+=500 top',
        scrub:true,
        animation:gsap.to(el,{
          currentTime:el.duration*0.5,
          ease:'none'
        })
      })
    }
  
  },heroRef);
  
  return()=>tx.revert()
},[])


  return (
    <div className='container'>
        <Navbar/>
        <div className='hero-container ' ref={heroRef}>
          <video className='video-content' ref={videoRef} autoPlay muted loop playsInline>
            <source  src={heroVideo} type='video/mp4'/>
          </video>
          <div className='video-overlay'></div>
          <div className='hero-content'>
            <h1 className='title' ref={titleRef}> leena cosmetics</h1>
            <p className='subtitle' ref={subtitleRef}>Transform social into a growth engine</p>

            <p className='discription' >The ability to schedule across a wide range of networks (Facebook, Instagram, LinkedIn, YouTube, TikTok, X, etc.) with platform-native features (Reels, Stories, Shorts).

</p>

        </div>

        </div>
        <div id="page-2">
        
            <h2>Where self-care meets Skincare</h2>
            <section ref={gsapRef}><p>We stand at a unique crossroads of capability and consciousness,</p>
<p >where the digital scaffolding of our connected world offers not just speed,</p>
<p >but a profound symbiotic potential for human endeavor.</p>
<p >The challenge, then, is to move beyond mere algorithmic efficiency</p>
<p >and cultivate genuine intellectual curiosity—to see the relentless pace of innovation</p>
<p >not as a source of anxiety, but as an unprecedented canvas upon which we can paint</p>
<p >a future defined by equitable progress and sustained existential flourishing.</p>
<p >It is in the judicious application of our collective knowledge, tempered by an unwavering</p>
<p >commitment to empathy and ethical foresight, that we will truly transcend the mundane</p>
<p >and leave a meaningful, indelible mark on the arc of history.</p>
</section>
          
          
        </div>

        <div id="page-3">
          <div id="page3-content" >
            <h5>Lets Dive into beauty products</h5>
            <h6><br/>& Explore some magical produts</h6>
            </div>

            <div id="box">
              <div className="box-item">
                <img src={product1} alt="" />
               
              </div>
              <div className="box-item">
                <img src={product2} alt="" />
               

              </div>
               <div className="box-item">
                <img src={product3} alt="" />
                
               </div>

              
            </div>
          
        </div>

         <div id="page-4">
          <section id="our-story">
            <h2>Our Story</h2>
            <p>At leena.cosmetics, we believe that beautycan never be left behind any kind problem . Our journey started in 2000 when our founder, LEENA, recognized a need for beauty at lowest cost and with best quality products</p>
            <p>Since then, we've grown from a small team with a big idea into a leading provider of anti-effective beauty products with natural hurbs. Our core minimal cost,best product , and loyalty toward customers—guide every decision we make, ensuring we always deliver unparalleled quality and customer focus.</p>
        </section>

        <hr/>

        <section id="work">
            <h2>How We Work</h2>
            <p>We have refined our process to be as simple and effective as possible, ensuring we deliver maximum value without the complexity.</p>
            <div id="process-steps">
                <div className="step">
                    <h3>1. Understand & Strategize</h3>
                    <p>We start by listening. We define a clear, measurable goal based on your unique needs and challenges.</p>
                </div>
                <div className="step">
                    <h3>2. Innovate & Execute</h3>
                    <p>Our team leverages the latest herbal products to build and deliver your solution with precision and speed.</p>
                </div>
                <div className="step">
                    <h3>3. Support & Grow</h3>
                    <p>We provide ongoing support and continuously iterate based on feedback to ensure our partnership remains successful long-term.</p>
                </div>
            </div>
        </section>

        <hr/>

        <section id="our-team">
            <h2>Meet the Team</h2>
            <p>We're more than just a company; we're a collection of passionate experts dedicated to your success. Get to know the people who make it all happen.</p>
            <div id="team">
                
                <div className="team-member">
                    <img src={ceo} alt="Photo of [Employee Name]"/>
                    <h4>Mrs . Arjun singh</h4>
                    <p>*Founder & CEO*</p>
                </div>

                <div className="team-member">
                    <img src={employee1} alt="Photo of [Employee Name]"/>
                    <h4>vijay singh</h4>
                    <p>*Head of Operations*</p>
                </div>

                <div className="team-member">
                    <img src={employee2} alt="Photo of [Employee Name]"/>
                    <h4>manisha shah</h4>
                    <p>*Lead Developer*</p>
                </div>

            </div>
        </section>

        <hr/>

        <section id="contact-info">
            <h2>Our Global Headquarters</h2>
            <div className="address-box">
                <p><strong>vikram towm 360</strong></p>
                <p>khao gali new delhi</p>
                <p>delhi 110001</p>
                <p>india</p>
                <p><strong>Phone:</strong> +91 6742676770 | <strong>Email:</strong> leena.cosmetics@gmail.com</p>
            </div>
        </section>

         </div>
    
        
       

        
        

        <Footer/>
    </div>
  )
}

export default Home