import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';
import Mainbar from '@/components/mainbar';


export default function Single(){
 
  return (
    <>
    <Head>
   <title>Informatio - Single Posts Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddf", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


   <div className='lg:mx-[5%] px-[5%] pt-[1cm]'>
   <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8'>

    <div className='grid-cols-1 lg:col-span-3 md:col-span-2 lg:ml-[5%]'>
        <div className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ccd"}}>
        <div className='text-[150%] font-[600] text-[#446]'>The best way to build backlinks to your site with Page to Page</div>
        <div className='mt-[0.5cm]' style={{display:"block"}}>
        <div style={{display:"inline-block"}} ><img src="images/user.png" width="40" /></div>
        <div className='ml-[0.3cm]' style={{display:"inline-block"}}>
        <div className='text-[90%] text-[#223] font-[500]'><span>Admin</span></div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>December 7, 2023</div>
        </div>
        </div>
        </div>
        <img src="images/woman.jpg" className='w-[100%] mt-[0.5cm]' />
      <div className='text-[#445] mt-[1cm]'>
      When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
       When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
       When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
       When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
      </div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#225] text-[80%] rounded-md text-[#fff] m-[0.2cm]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>Tags:</button>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445] m-[0.2cm]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>blockchain</button>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445] m-[0.2cm]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>ethereum</button>
      </div>
      <div className='mt-[0.5cm]' style={{display:"block"}}>
        <img src="images/share.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/linkedin.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/twitter.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/telegram.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/whatsapp.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/facebook.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/instagram.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
        <img src="images/youtube.png" width="30" className='m-[0.2cm]' style={{display:"inline-block"}} />
      </div>
    </div>
    </div>

    <div className='grid-cols-1'>
    <Sidebar />
    </div>

   </div>
   </div>

   <Footer />
   </div>
  </>
  );
};

