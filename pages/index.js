import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Header from '@/components/header';


export default function Home(){
 
  return (
    <>
    <Head>
   <title>Informatio - A web 3 blog sharing insights into the blockchain</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='maindiv pb-[100%]' style={{background:"url(images/settings.jpg)"}}>
   <Header />
   
   
    
    
     </div>
  </>
  );
};

