import React from 'react'
import { tiktok, shorts, podcast } from '../assets';
import styles from '../style';

const ServicesItems = () =>  (
    <section className={`${styles.flexCenter} flex-wrap mb-10`}>
        <div className={`${styles.padding2} justify-center items-center flex flex-col m-3 w-[400px] h-[500px] feedback-card rounded-[20px] box-shadow`}>
          <img src={tiktok} className={`flex w-[90px] h-[90px] flex  items-center justify-center`}/>
          <h4 className={`${styles.heading4} text-center mt-10`}>Tiktok Video Production</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>Stand out on TikTok with our professional video production services. Engaging, high-quality videos that captivate your target audience.</p>
        </div>

        <div className={`${styles.padding2} justify-center items-center flex flex-col m-3 w-[400px] h-[500px] feedback-card rounded-[20px] box-shadow`}>
          <img src={shorts} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} text-center mt-10`}>Youtube Shorts Production</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>Maximize your brand's potential on YouTube Shorts with our video production services. We create compelling and visually appealing short-form videos that capture the attention of your target audience.</p>
        </div>

       <div className={`${styles.padding2} justify-center items-center flex flex-col m-3 w-[400px] h-[500px] feedback-card rounded-[20px] box-shadow`}>
          <img src={podcast} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} text-center mt-10`}>Podcast Clips</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>Elevate your social media content with our podcast clipping service! We turn long podcasts into short, shareable clips for TikTok, YouTube & Instagram.</p>
        </div>

    </section>);

export default ServicesItems