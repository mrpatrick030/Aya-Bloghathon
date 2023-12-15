import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';


export default function Login(){
  useEffect(() => {
    AOS.init();
  }, [])

  const [values, setValues] = useState({
    email:"",
    password:""
 })

const handleInput = (event) => {
    const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
    setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue }));
  };

const [loading, setLoading] = useState(false); // Add a loading state  
const router = useRouter();
const handleSubmitforMemberLogin = async (e) => {
  setLoading(true);
  e.preventDefault();
    await axios.post("/api/memberloginapi", values)
    .then (res => {
        if (res.status === 200){
        router.push('/memberspage');
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
   <title>Informatio - Members Login Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='memberslogin' style={{backgroundImage:"url(images/earth.jpg)"}}>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddf", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


        <div data-aos="slide-left" className='lg:mx-[25%] md:mx-[10%] mx-[5%] bg-[#fff] my-[4cm]' style={{border:"3px solid #aaf", transition:"0.5s ease-in-out"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] text-center py-[0.4cm]'>
            <img src="images/unlock.png" width="30" style={{display:"inline-block"}}/>
            <span className='ml-[0.3cm]'>Login as a Contributor</span>
        </div>
        <div className='p-[5%] bg-[#111]'>
            <form onSubmit={(e) => handleSubmitforMemberLogin(e)}>
            <input type="email" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm] rounded-tr-full' id="email" name="email" value={values.email} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input your email" />
            <input type="password" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm] rounded-tr-full' id="password" name="password" value={values.password} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input your password" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center rounded-bl-full'>Login to Informatio</button>
            </form>
            <div className='text-[110%] text-[#fff]'><span>Not yet a contributor?</span> <span className='text-[#d7b644] ml-[0.3cm] font-[500]'><Link href="/register">Register</Link></span></div>
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

