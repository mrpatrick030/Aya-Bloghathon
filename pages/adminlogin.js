import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '@/components/footer';


export default function AdminLogin(){
 
  return (
    <>
    <Head>
   <title>Informatio - Admin Login Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div style={{backgroundImage:"url(images/maxim.jpg)", backgroundSize:"100%"}}>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddf", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


        <div className='lg:mx-[25%] md:mx-[10%] mx-[5%] my-[4cm]' style={{border:"3px solid #ccf"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] px-[0.2cm] text-center py-[0.4cm]'>
            <img src="images/shield.png" width="40" style={{display:"inline-block"}}/>
            <span className='ml-[0.3cm]'>This page is accessible to only this site's admin!</span>
        </div>
        <div className='p-[5%] bg-[rgba(0,0,0,0.9)]'>
            <input type="email" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input your email" />
            <input type="password" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input your password" />
            <input type="password" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input admin key" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Login to Admin Dashboard</button>
        </div>
        </div>

   <Footer />
   </div>
  </>
  );
};

