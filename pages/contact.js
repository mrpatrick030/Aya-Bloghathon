import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '@/components/footer';


export default function Contact(){
 
  return (
    <>
    <Head>
   <title>Informatio - Contact Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div style={{backgroundImage:"url(images/laptopchair.jpg)", backgroundPositionX:"50%", backgroundPositionY:"5%"}}>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddf", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


        <div className='lg:mx-[25%] md:mx-[10%] mx-[5%] bg-[#fff] my-[4cm]' style={{border:"3px solid #ccf"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] text-center py-[0.2cm]'>
            <img src="images/logo2.png" width="50" className='m-[auto]' />
        </div>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#002] text-center py-[0.3cm]'>
            <img src="images/mail.png" width="30" style={{display:"inline-block"}}/>
            <span className='ml-[0.2cm]'>Send us a message</span>
        </div>
        <div className='p-[5%] bg-[#112]'>
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your full name" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Enter subject of your message" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your email" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your phone number (optional)" />
            <textarea className='px-[0.2cm] py-[0.3cm] h-[5cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your message here" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Send message</button>
        </div>
        </div>

   <Footer />
   </div>
  </>
  );
};

