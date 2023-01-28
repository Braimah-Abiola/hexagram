import React from "react"
import styles from "../style"
import { arrowUp } from "../assets"

const BookCall = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>
        Book Call
        <img src={arrowUp} className=" w-[13px] h-[13px] object-contain inline-flex ml-5"/>    
    </button>
  )
}

export default BookCall