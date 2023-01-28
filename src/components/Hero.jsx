import styles from "../style"
import {discount, heroimg} from "../assets"
import BookCall from "./BookCall"

const Hero = () =>  (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount for {" "}
            <span className="text-white">1 Month </span>
            Test Run
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px] leading-[75px] mt-10">
            Grow Your <br className="sm:block hidden"/>
            Platform With <br className="sm:block hidden"/>
            <span className="text-gradient">Short Content</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[550px] mt-6`}>
        Enver studio is a digital studio that offers several content creation services such as creating TikTok videos, YouTube shorts, Instagram reels as well as account management.
        </p>

      <div className="mt-10">
        <BookCall/>
      </div>
        
      </div>
    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={heroimg} alt="billing" className="w-[100%] h-[100%]relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
)

export default Hero