import React from 'react'
import styles from '../style';
import { project1, project2, project3 } from '../assets';

const PreviousProjects = () => (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

    <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        Our Previous Work
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} mt-5 text-center`}>
        As a content creation agency, We help content creators from Podcasters to Youtubers grow their online presence and following by creating them short form content.        
      </p>
    </div>


    <section className={`${styles.flexCenter} flex-wrap sm:mb-20`}>
        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] bg-black-gradient-2 rounded-[20px] box-shadow'>
            <img src={project2} alt="project image" className={`${styles.flexCenter} w-[370px] h-[210px] cursor-pointer`} onClick={() => to}/>
        </div>

        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] bg-black-gradient-2 rounded-[20px] box-shadow'>
            <img src={project1} alt="project image" className={`${styles.flexCenter} w-[370px] h-[210px] cursor-pointer`}/>
        </div>

        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] bg-black-gradient-2 rounded-[20px] box-shadow'>
            <img src={project3} alt="project image" className={`${styles.flexCenter} w-[370px] h-[210px] cursor-pointer`}/>
        </div>

        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] bg-black-gradient-2 rounded-[20px] box-shadow'>
            <img src={project3} alt="project image" className={`${styles.flexCenter} w-[370px] h-[210px] cursor-pointer`}/>
        </div>
    </section>

</section>
);

export default PreviousProjects