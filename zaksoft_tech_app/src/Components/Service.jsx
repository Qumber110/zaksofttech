import React from 'react'
import styles, { layout } from "../style";
import {service01, robot} from "../assets";
import Carousel from 'better-react-carousel'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContactForm from './ContactForm';
import styled from "styled-components";





const Service = () => (
  
    <section id="service" className={layout.sectionInfo}>
      <p className={styles.paragraph1}>What We Do </p>
      <h1 className={styles.heading4}>We Run all kinds of Service that your</h1>
      <h3 className={styles.heading4}><span className="text-gradient">Success</span></h3>
      <div className={styles.marginY}>
        
      <div className={`flex-1 flex ${styles.flexCenter} ${styles.boxWidth}  sm:mx:0 mx-10 md:my-0 my-10  relative`}>
      <Carousel cols={3} rows={2} gap={10}>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="right center">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
    </Popup>
      </Carousel.Item>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="relative">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
      </Popup>
      </Carousel.Item>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="left center">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
     </Popup>
      </Carousel.Item>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="relative">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
     </Popup>
      </Carousel.Item>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="relative">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
      </Popup>
      </Carousel.Item>
      <Carousel.Item>
      <Popup  trigger={<button> <img width="90%" src={service01} /></button>} position="relative">
    <div className={`${layout.sectionImg} flex-col`}><StyledContactForm><ContactForm /></StyledContactForm></div>
      </Popup>
      </Carousel.Item>
    </Carousel>
    
    </div>
      
    </div>
    
    </section>
    
    

  
);

export default Service;

//Styles

const StyledContactForm = styled.div`
background-color:white;
height:930px;
margin-top:-60px;
margin-bottom:-10px


`;