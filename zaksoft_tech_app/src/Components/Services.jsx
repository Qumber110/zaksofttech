import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="#service"><div className={`${styles.flexCenter} w-[100px] h-[50px] squared-full bg-blue-gradient p-[1px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] squared-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Our</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[20px] h-[20px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[20.4px]">
        <span className="text-gradient">Services</span>
      </p>
    </div>
  </div></a>
  
);

export default GetStarted;