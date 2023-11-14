import { features } from "../constants";
import styles, { layout } from "../style";
// import Button from "./Button";
import {ecommerce, seo, smartphone, webdevelopment} from "../assets";
import ScrollCarousel from 'scroll-carousel-react';


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
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

const Business = () => (
  <section id="about" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">About Us</h1>
    <h2 className={styles.heading3}>
    We Team of <span className="text-gradient">ZAK SOFT 
    <br className="sm:block hidden" /> TECH PVT LTD</span>
     &nbsp;IT <br className="sm:block hidden" />Specialities
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    As a software and digital marketing company,
    we specialize in creating innovative solutions
    that meet the needs of businesses of all sizes.
    Zak Soft Tech is dedicated to unlocking the
    potential of digital technology and helping 
    our clients achieve their goals through 
    cutting-edge software and marketing tools.
    </p>

    {/* <Button styles={`mt-10`} /> */}
    
    <ScrollCarousel 
        autoplay={true}
        autoplaySpeed={0}
        speed={0}
        onReady={() => console.log('I am not ready')}
      >
        {[<img src={webdevelopment} alt="webdevelopment" className="w-[50px] h-[50px] relative z-[5] rounded-2xl"/>,
	 <img src={ecommerce} alt="ecommerce" className="w-[50px] h-[50px] relative z-[5] rounded-2xl"/>,
         <img src={smartphone} alt="smartphone" className="w-[50px] h-[50px] relative z-[5] rounded-2xl"/>,
         <img src={seo} alt="seo" className="w-[50px] h-[50px] relative z-[5] rounded-2xl"/>].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-30 w-30'>
            {item}
          </div>
        ))}
      </ScrollCarousel>
    
        
    </div>
  

  <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature, index) => (
      <FeatureCard key={feature.id} {...feature} index={index} />
    ))}
  </div>
</section>
  );


export default Business