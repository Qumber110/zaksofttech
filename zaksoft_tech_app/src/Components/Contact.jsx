import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import styles, { layout } from "../style";
import { address } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== address.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a4ihor9",
        "template_dkuavrc",
        form.current,
        "zdCr5B_VR3LxBYAmS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent!");
        }
      );
  };


return (
  <section id="contact-us" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">Contact Us</h1>
    <h2 className={styles.heading3}>
    Grow Your Business With <br className="sm:block hidden" /> <span className="text-gradient">Our Expertise 
    </span>
    
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    We understand the importance of approaching
    each work integrally and believe in the 
    power of simple.
    </p>

    {address.map((address, index) => (
      <FeatureCard key={address.id} {...address} index={index} />
    ))}

    {/* <Button styles={`mt-10`} /> */}
    
   
    
        
    </div>
  

  <div className={`${layout.sectionImg} flex-col`}>
  <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder="name" name="user_name" required/>
        <label>Email</label>
        <input type="email" placeholder="email" name="user_email" required />
        <label>Message</label>
        <textarea  placeholder="message" name="message" required/>
        <input type="submit" value="Send" />
      </form>
      
    </StyledContactForm>
    
  </div>
</section>
  );};



  export default Contact;

  // Styles
const StyledContactForm = styled.div`
width: 350px;

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  border: 1px solid white;
    

  input {
    width: 90%;
    margin-left: 1rem;
    height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);

    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }

  textarea {
    max-width: 90%;
    min-width: 90%;
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    margin-left: 1rem;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);

    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }

  label {
    margin-top: 1rem;
    margin-left: 1rem;
    color:white;
  }

  input[type="submit"] {
    width: 30%;
    margin-top: 2rem;
    margin-left: 8rem;
    margin-bottom: 1rem
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: white;
    border: none;
  }
}
`;
