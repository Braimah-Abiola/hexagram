import React from 'react'
import { abstract01, abstract02 } from '../assets';
import  styles, { layout } from '../style';

const Services = () =>  (
<section className={layout.section}>

    <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full blue__gradient bottom-40" />

    <img id="loading" className={`w-[40px] h-[40px]`} src={abstract01}/>

    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        The Services We Provide <br/> To Businesses
      </h2>
    </div>

    <img id="loading" className={`w-[20px] h-[20px]`} src={abstract02}/>

</section>
);

export default Services