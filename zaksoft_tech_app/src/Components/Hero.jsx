import styles from "../style";
import { discount, robot, robot1, robot2} from "../assets";
import About from "./About";
import Services from "./Services";
import { Carousel } from 'react-carousel-minimal';


const data = [
  {
    image: robot,
    // caption: "San Francisco"
  },
  {
    image: robot1,
    // caption: "Scotland"
  },
  {
    image: robot2,
    // caption: "Darjeeling"
  }
];

// const captionStyle = {
//   fontSize: '2em',
//   fontWeight: 'bold',
// }
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
             We{" "}
            <span className="text-white">are</span> Creative
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            One Stop <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital</span>{" "}
          </h1>
          
                   
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Make your digital footprint ineffaceable.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-5 px-6">
       <About /> &nbsp;&nbsp; <Services/>
      </div>
      </div>
      

      <div className={`flex-1 flex ${styles.flexCenter} ${styles.boxWidth} md:my-0 my-10 relative`}>
      
      <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <About />
      </div>
    </section>
  );
};

export default Hero;