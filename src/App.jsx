import React, {useEffect} from 'react'
import gsap from 'gsap'
import { CSSRulePlugin, ScrollTrigger } from 'gsap/all'
import './App.css'
import Navbar from './components/navbar/navbar'
import Card from './components/card/card'
import face from './static/face.jpg'
import {projects} from './projects'

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger)
function App() {

  useEffect(()=>{
    console.log(projects);
    let titleSpan= CSSRulePlugin.getRule('.title__item:after') 

    const workTl = gsap.timeline();

    gsap.to(titleSpan,{
      cssRule:{
        scaleX:0,
        transformOrigin:'left'
      },
      duration:1,
    })

    // workTl.from('.Work',{
    //   opacity:0,
    //   duration:1,
    //   scrollTrigger:{
    //     trigger:'.Work'
    //   }
    // }).from('#Card',{
    //   opacity:0,
    //   x:-20,
    //   delay:0.5,
    //   stagger:{
    //     amount:0.8
    //   }
    // })

 
  },[])

  return (
    <div className="App">
      <Navbar />
      <header className="Header">
        <div className='header__title'>
          <h1 className='title__item'> Hi , I am Ariless </h1>
          <h1 className='title__item'> ML Engineer</h1>
        </div>

        <div className='header__bottom'>
          <div className='bottom__scroll'>
            <span className='scroll__txt'> scroll</span>
            <div className='scroll__line'></div>
          </div>
          <span className='bottom__location'> Lille, France</span>
        </div>

      </header>

      <section className='Work'>
        <h1 className='work__title'>WORK</h1>
        <div className='work__flex'>
          {projects.map((project)=>{
            return(
              <Card id='Card' key={project.id} data={project}/>
            )
          })}
        </div>
        
      </section>

      <section className='About'>
        <h1 className='about__title'> ABOUT </h1>
        <div className='about__image'>
          <img src={face} alt="" />
        </div>
        <p className='about__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum. Nesciunt iste nisi obcaecati provident, veritatis at nam iure deleniti cumque eum labore inventore hic corrupti, unde beatae, non aspernatur!
        Doloremque explicabo, animi velit accusantium aperiam veritatis praesentium hic. Possimus tempora totam quam magnam quia ad blanditiis sunt voluptatem molestias ipsam nesciunt ipsa in exercitationem, eum unde esse. Rem, ipsam!
        Doloribus sapiente illo odio suscipit eius placeat, nihil aliquid eligendi aspernatur corrupti veniam enim eveniet culpa id itaque quaerat, quos dolorum. Dignissimos nobis, minima tempore alias dolore repellat molestias odit.</p>
      </section>


      <section className='Contact'>
            <a className='link_item' href="https://github.com/">GITHUB</a>
            <a className='link_item' href="">EMAIL</a>
            <a className='link_item' href="https://www.linkedin.com/in/ariless-tir-360b6a164/">LINKEDIN</a>
      </section>

    </div>
  )
}

export default App
