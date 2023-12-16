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
  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href)
  }
  const shareToLinkedIn = () => {
    const urlToShare = encodeURIComponent(window.location.href);
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`;
    window.open(linkedInShareUrl, '_blank');
  };
  const shareToTwitter = () => {
    const urlToShare = encodeURIComponent(window.location.href);
    const twitterShareUrl = `https://www.twitter.com/sharing/share-offsite/?url=${urlToShare}`;
    window.open(twitterShareUrl, '_blank');
  };
  const shareToTelegram = () => {
    const urlToShare = encodeURIComponent(window.location.href);
    const telegramShareUrl = `https://www.telegram.org/sharing/share-offsite/?url=${urlToShare}`;
    window.open(telegramShareUrl, '_blank');
  };
  const shareToYouTube = () => {
    const urlToShare = encodeURIComponent(window.location.href);
    const youtubeShareUrl = `https://www.youtube.com/sharing/share-offsite/?url=${urlToShare}`;
    window.open(youtubeShareUrl, '_blank');
  };

         // confirm cookies to show single post
         const [auth, setAuth] = useState(false);
         const [image_link, setimage_link] = useState('');
         const [video_link, setvideo_link] = useState('');
         const [title, settitle] = useState('');
         const [date, setdate] = useState('');
         const [contributor, setcontributor] = useState('');
         const [description, setdescription] = useState('');
         const [category, setcategory] = useState('');
     
         axios.defaults.withCredentials = true;
         const getBlogPostData = async () => {
           await axios.get('/api/singlepostcookieconfirm')
             .then((res) => {
               console.log('Check Auth Response:', res); 
               if (res.status === 200) {
                 setAuth(true);
                 setimage_link(res.data.singlepost.image_link);
                 setvideo_link(res.data.singlepost.video_link);
                 settitle(res.data.singlepost.title);
                 setdate(res.data.singlepost.date);
                 setcontributor(res.data.singlepost.contributor);
                 setdescription(res.data.singlepost.description);
                 setcategory(res.data.singlepost.category);
               } else {
                 setAuth(false);
               }
             })
             .catch((err) => {
               console.log('Check Auth Error:', err); 
               setAuth(false);
             });
           }
           useEffect(() => {
            getBlogPostData();
           }, [])

           useEffect(() => {
            AOS.init();
            }, [])
         
 
    if (auth) {       
  return (
    <>
    <Head>
   <title>Informatio - Single Posts Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddd", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


   <div data-aos="zoom-out" style={{transition:"0.5s ease-in-out"}} className='lg:mx-[5%] px-[5%] pt-[1cm]'>
   <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8'>

    <div className='grid-cols-1 lg:col-span-3 md:col-span-2 lg:ml-[5%] lg:pt-[1.2cm] md:pt-[1.2cm]'>
        <div className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ddd"}}>
        <div className='text-[150%] font-[600] text-[#446]'>{title}</div>
        <div className='mt-[0.5cm]' style={{display:"block"}}>
        <div style={{display:"inline-block"}} ><img src="images/user.png" width="40" /></div>
        <div className='ml-[0.3cm]' style={{display:"inline-block"}}>
        <div className='text-[90%] text-[#223] font-[500]'><span>{contributor}</span></div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>{date}</div>
        </div>
        </div>
        </div>
        {image_link ? (<img src={image_link} className='mt-[0.5cm] w-[100%]' />) : 
        (<video src={video_link} control="controls" className='mt-[0.5cm] w-[100%]' />)
        }
      <div className='text-[#445] mt-[1cm]'>{description}</div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#225] text-[80%] rounded-md text-[#fff] m-[0.2cm]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>Tags:</button>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445] m-[0.2cm]' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>{category}</button>
      </div>
      <div className='mt-[0.5cm]' style={{display:"block"}}>
        <img src="images/share.png" width="30" className='m-[0.2cm] cursor-pointer' onClick={(e) => copyURL()} style={{display:"inline-block"}} />
        <img src="images/linkedin.png" width="30" className='m-[0.2cm] cursor-pointer' onClick={(e) => shareToLinkedIn(e)} style={{display:"inline-block"}} />
        <img src="images/twitter.png" width="30" className='m-[0.2cm] cursor-pointer' onClick={(e) => shareToTwitter(e)}  style={{display:"inline-block"}} />
        <img src="images/telegram.png" width="30" className='m-[0.2cm] cursor-pointer' onClick={(e) => shareToTelegram(e)}  style={{display:"inline-block"}} />
        <img src="images/youtube.png" width="30" className='m-[0.2cm] cursor-pointer' onClick={(e) => shareToYouTube(e)}  style={{display:"inline-block"}} />
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
  );} else {
    <div></div>
  }
};

