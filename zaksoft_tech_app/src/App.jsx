import styles from "./style";
import { Service, Business,  Contact, Footer, Navbar, Stats,  Hero,} from "./Components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
      <Navbar /> 
      
  </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
      <Hero /> 
  </div>
  </div>
  
  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
    {/* Body section */}
      <Stats /> 
      <Business />
      <Service />
      <Contact />  
      <Footer /> 
  </div>
  </div>
  </div>
  
);

export default App