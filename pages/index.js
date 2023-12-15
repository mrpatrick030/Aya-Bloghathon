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

export default function Home(){
 
  return (
    <>
    <Head>
   <title>Informatio - A web 3 blog sharing insights into the blockchain</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div>
   <Header />

   <div className='lg:mx-[5%] px-[5%] lg:pt-[1cm] md:pt-[2.5cm] pt-[2.5cm]'>
   <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8'>
    <div className='grid-cols-1 lg:col-span-3 md:col-span-2 lg:ml-[5%]'>
    <Mainbar />
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

