import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
export default function Mainbar () {
    return (
        <div>
                <div className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ccd"}}>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='grid-cols-1'>
        <img src="images/laptopchair.jpg" className='rounded-md max-h-[7cm] w-[100%]' />
        </div>
        <div className='grid-cols-1 lg:col-span-2'>
        <div className='text-[150%] font-[600] text-[#446]'>Google core web vitals which benefit in ranking faster.</div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>December 8, 2023</div>
        <div className='text-[90%] mt-[0.3cm] text-[#223] font-[500]'>Posted by <span>Admin</span></div>
        </div>
        </div>
      </div>
      <div className='text-[#445] mt-[0.5cm]'>
      When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
      </div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>blockchain</button>
      </div>
      <div className='mt-[1cm]' style={{position:"absolute"}}>
      <Link href="/singleposts"><button className='px-[0.5cm] py-[0.2cm] bg-[#225] text-[#fff] text-[80%] text-[#445] rounded-tr-full'>Continue Reading</button></Link>
      </div>
    </div>

    <div className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ccd"}}>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='grid-cols-1'>
        <img src="images/woman.jpg" className='rounded-md max-h-[7cm] w-[100%]' />
        </div>
        <div className='grid-cols-1 lg:col-span-2'>
        <div className='text-[150%] font-[600] text-[#446]'>The best way to build backlinks to your site with Page to Page</div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>December 7, 2023</div>
        <div className='text-[90%] mt-[0.3cm] text-[#223] font-[500]'>Posted by <span>Admin</span></div>
        </div>
        </div>
      </div>
      <div className='text-[#445] mt-[0.5cm]'>
      When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances 
      because these are very exciting times. We at Kerridge Commercial Systems (KCS) are passionate about utilising this modern technology to give
       our customers the digital tools they need to grow their business profitably and deliver the excellent service they expect.
      </div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>blockchain</button>
      </div>
      <div className='mt-[1cm]' style={{position:"absolute"}}>
      <Link href="/singleposts"><button className='px-[0.5cm] py-[0.2cm] bg-[#225] text-[#fff] text-[80%] text-[#445] rounded-tr-full'>Continue Reading</button></Link>
      </div>
    </div>
        </div>
    )
}