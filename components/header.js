import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Header(){
  const [menu, setmenu] = useState(true)
  const changemenubehaviour1 = () => {
    setmenu(false)
  }
  const changemenubehaviour2 = () => {
    setmenu(true)
  }

  useEffect(() => {
    AOS.init();
  }, [])
  
    return (
      <div>

      <div className='text-center py-[0.3cm] px-[1cm] bg-[#fff] headerdivforlarge' style={{boxShadow:"-1px 1px 1px 1px #dde", zIndex:"9999"}}>
      <img src="images/logo2.png" width="50" style={{display:"inline-block"}}/>
      <Link href="/"><button className='ml-[1cm] menuitems'>Home</button></Link>
      <Link href="/contact"><button className='ml-[1cm] menuitems'>Contact</button></Link>
      <Link href="/register"><button className='ml-[1cm] menuitems'>Become a contributor</button></Link>
      <Link href="/login"><button className='ml-[1cm] menuitems'>login</button></Link>
      <Link href="/adminlogin"><button className='ml-[1cm] menuitems'>Admin area</button></Link>
      </div>

      <div className='w-[100%] headerdivforsmallandmedium' style={{position:"fixed", zIndex:"9999"}}>
      {menu ? 
      (<div className='px-[0.3cm] py-[0.2cm] bg-[#fff]' style={{display:"block"}}>
      <img src="images/burger-menu.png" width="50" onClick={(e) => changemenubehaviour1(e)} className='cursor-pointer' style={{display:"inline-block"}}/>
      <img src="images/logo2.png" width="50" className='float-right' style={{display:"inline-block"}}/>
      </div>) : 
 
      (<div className='bg-[rgba(0,0,0,0.85)] pb-[100%]'>
      <div data-aos="flip-right" className='bg-[#fff] w-[80%] pb-[20%]'>
      <div className='py-[0.3cm] px-[0.2cm] text-right' style={{boxShadow:"-2px 2px 5px 2px #ccc", display:"block"}}><img src="images/arrow.png" width="40" onClick={(e) => changemenubehaviour2(e)} className='cursor-pointer' style={{display:"inline-block"}} /></div>
      <div className='px-[0.5cm]'>
       <Link href="/" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems' style={{borderBottom:"1px solid #ddd"}}>Home</div></Link>
       <Link href="/contact" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems' style={{borderBottom:"1px solid #ddd"}}>Contact</div></Link>
       <Link href="/register" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems' style={{borderBottom:"1px solid #ddd"}}>Become a contributor</div></Link>
       <Link href="/login" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems' style={{borderBottom:"1px solid #ddd"}}>login</div></Link>
       <Link href="/adminlogin" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems' style={{borderBottom:"1px solid #ddd"}}>Admin area</div></Link>
       <div className='mt-[4cm]' style={{display:"block"}}>
       <Link href="https://linkedin.com" onClick={(e) => changemenubehaviour2(e)}><img src="images/linkedin.png" width="30" style={{display:"inline-block"}}/></Link>
       <Link href="https://twitter.com" onClick={(e) => changemenubehaviour2(e)}><img src="images/twitter.png" width="30" className='ml-[0.5cm]' style={{display:"inline-block"}}/></Link>
       <Link href="https://youtube.com" onClick={(e) => changemenubehaviour2(e)}><img src="images/youtube.png" width="30" className='ml-[0.5cm]' style={{display:"inline-block"}}/></Link>
       <Link href="https://telegram.org" onClick={(e) => changemenubehaviour2(e)}><img src="images/telegram.png" width="30" className='ml-[0.5cm]' style={{display:"inline-block"}}/></Link>
       </div>
      </div>
      </div>
      </div>)
       }
      </div> 

      </div>
    )
}