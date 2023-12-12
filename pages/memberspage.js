import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


export default function ContributorsDashboard(){

    useEffect(() => {
        AOS.init();
      }, [])
 
  return (
    <>
    <Head>
   <title>Informatio - Contributors' Dashboard</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='p-[5%] pb-[40%]' style={{backgroundImage:"url(images/hand.jpg)", backgroundPositionX:"50%", backgroundPositionY:"30%"}}>
    <div className='py-[0.3cm]'>
     <Link href="/">
      <img src="images/switch.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#fff]'>Logout</span>
     </Link>
    </div>

        <div className='text-center mt-[1cm]' style={{display:"block"}}>
            <img src="images/maleuser.png" width="60" style={{display:"inline-block"}} />
            <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500] ml-[0.5cm] text-[#fff]'>Welcome Mark Zuckerberg!</span>
        </div>
        
        <div className='mt-[2cm] lg:mx-[20%] md:mx-[10%]' style={{border:"3px solid #aaf"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] px-[0.2cm] text-center py-[0.4cm]'>
            <img src="images/logo2.png" width="50" className='m-[auto]' />
        </div>
        <div className='py-[0.4cm] text-center text-[#fff] font-[500] text-[110%] px-[5%] bg-[rgba(0,0,0,0.6)]'>
            <span>Your posts will appear on the blog after approval by admin</span>
            <img src="images/check.png" width="40" className='ml-[0.4cm]' style={{display:"inline-block"}}/>
        </div>
        <div className='p-[5%] bg-[#222]'>
            <form data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the link to a related image" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Or type the link to a related video" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the title of your post" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Give your post a description" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Choose a category for your post" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Add blog post</button>
            </form>     
        </div>
        </div>


   </div>
  </>
  );
};

