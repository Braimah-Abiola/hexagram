import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const SeeMoreButton = () => (
    <>
    <button onClick={() => window.open('https://www.tiktok.com/@sig.males', '_blank')} type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>
          Watch More
          <img src={arrowUp} className=" w-[13px] h-[13px] object-contain inline-flex ml-5"/>    
    </button>
    </>
);


export default SeeMoreButton