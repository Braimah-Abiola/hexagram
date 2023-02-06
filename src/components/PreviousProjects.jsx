import React from 'react'
import styles from '../style';
import { vid1, vid2, vid3 } from '../assets';
import TikTokVideo from './TikTokVideo';
import SeeMoreButton from './SeeMoreButton';

const PreviousProjects = () => (
<section id="work" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

    <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        Our Previous Work
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} text-center`}>
        As a content creation agency, We help content creators grow their online presence by creating them short form content.        
      </p>
    </div>


    <section className={`${styles.flexCenter} flex-wrap `}>
        <div className='justify-center items-center flex flex-row w-[330px] h-[580px] m-3'>
            <TikTokVideo videoSrc={vid1} />
        </div>
        <div className='justify-center items-center flex flex-row w-[330px] h-[580px] m-3'>
            <TikTokVideo videoSrc={vid2} />
        </div>
        <div className='justify-center items-center flex flex-row w-[330px] h-[580px] m-3'>
            <TikTokVideo videoSrc={vid3} />
        </div>
    </section>

    <div className='mt-10'>
      <SeeMoreButton/>  
    </div>

</section>
);

export default PreviousProjects