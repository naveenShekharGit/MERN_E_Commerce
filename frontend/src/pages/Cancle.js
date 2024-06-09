import React from 'react'
import CANCLEIMAGE from "../assest/cancle.gif";
import { Link } from 'react-router-dom';

const Cancle = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2
    rounded'>
      <img src={CANCLEIMAGE}
        width={300}
        height={300}
      />
      <p className='text-red-600 font-bold text-xl'>Payment cancle</p>
      <Link to={"/cart"} className='p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold hover:bg-red-600 hover:text-white'>Go To Cart</Link>
    </div>
  )
}

export default Cancle
