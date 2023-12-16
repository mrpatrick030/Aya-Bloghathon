import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';


export default function AdminLogin(){
  useEffect(() => {
    AOS.init();
  }, [])

  const [values, setValues] = useState({
    email:"",
    password:"",
    secretkey:""
 })

const handleInput = (event) => {
    const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
    setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue }));
  };

const [loading, setLoading] = useState(false); // Add a loading state  
const router = useRouter();
const handleSubmitforAdminLogin = async (e) => {
  setLoading(true);
  e.preventDefault();
    await axios.post("/api/adminloginapi", values)
    .then (res => {
        if (res.status === 200){
        router.push('/adminpage');
        }
        else {
            alert ("Wrong data!")
        }
    })
    .catch (err => alert("Wrong Data!"))
    .finally(() => {
      setLoading(false); //(whether successful or not), stop loading
    });
  }
 
  return (
    <>
    <Head>
   <title>Informatio - Admin Login Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='adminlogin' style={{backgroundImage:"url(images/maxim.jpg)"}}>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #dde", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


        <div data-aos="zoom-out" className='lg:mx-[25%] md:mx-[10%] mx-[5%] my-[4cm]' style={{border:"3px solid #ccf", transition:"0.5s ease-in-out"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] px-[0.2cm] text-center py-[0.4cm]'>
            <img src="images/shield.png" width="40" style={{display:"inline-block"}}/>
            <span className='ml-[0.3cm]'>This page is accessible to only this site's admin!</span>
        </div>
        <div className='p-[5%] bg-[rgba(0,0,0,0.9)]'>
           <form onSubmit={(e) => handleSubmitforAdminLogin(e)}>
            <input type="email" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' id="email" name="email" value={values.email} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input your email" />
            <input type="password" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' id="password" name="password" value={values.password} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input your password" />
            <input type="password" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' id="secretkey" name="secretkey" value={values.secretkey} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input admin key" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Login to Admin Dashboard</button>
          </form>
        </div>
        </div>

        {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}
   <Footer />
   </div>
  </>
  );
};

