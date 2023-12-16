import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function ContributorsDashboard(){
    useEffect(() => {
        AOS.init();
      }, [])

       // confirm cookies to enter member page and logout section
    const [auth, setAuth] = useState(false);
    const [full_name, setfull_name] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setgender] = useState('');

    axios.defaults.withCredentials = true;
    const getMemberData = async () => {
      await axios.get('/api/memberconfirmcookies')
        .then((res) => {
          console.log('Check Auth Response:', res); // line for debugging
          if (res.status === 200) {
            setAuth(true);
            setfull_name(res.data.member.full_name);
            setEmail(res.data.member.email);
            setgender(res.data.member.gender);
          } else {
            setAuth(false);
          }
        })
        .catch((err) => {
          console.log('Check Auth Error:', err); // line for debugging
          setAuth(false);
        });
      }
      useEffect(() => {
        getMemberData();
      }, [])

      const router = useRouter();
      const MemberLogout = async(e) => {
        e.preventDefault();
        await axios.get('/api/memberlogoutbyclearingcookiesapi')
        .then ((res) => {
            router.push('/login')
        })
        .catch ((err) => {
          console.log(err)
        })
      }


      // member page tasks
      const [values, setValues] = useState({
        id:"",
        contributor:full_name,
        image_link:"",
        video_link:"",
        title:"",
        date:"",
        description:"",
        category:"",
        status:""
    })
    
    const handleInput = (event) => {
        const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
        setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue,  contributor:full_name }));
      };
    

    const [loading, setLoading] = useState(false); // Add a loading state  
    const handleSubmitforAddingBlogPostByMember = async (e) => {
      setLoading(true);
      e.preventDefault();
        await axios.post("/api/addblogpostdatabymember", values)
        .then (res => {
            if (res.status === 200){
            alert("You have successfully added a blog post! Wait for admin's approval for it to appear on the blog.")
            }
            else {
                alert ("Check your network and try again!")
            }
        })
        .catch (err => alert("Check your network and try again!"))
        .finally(() => {
          setLoading(false); //(whether successful or not), stop loading
        });
      }
 
  if (auth){
  return (
    <>
    <Head>
   <title>Informatio - Contributors' Dashboard</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='p-[5%] pb-[40%]' style={{backgroundImage:"url(images/hand.jpg)", backgroundPositionX:"50%", backgroundPositionY:"30%"}}>
   <div className='py-[0.3cm]'>
     <span className='cursor-pointer' onClick={(e) => MemberLogout(e)}>
      <img src="images/switch.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#fff]'>Logout</span>
     </span>
    </div>

    <div data-aos="fade-in" className='text-center mt-[1cm]' style={{display:"block", transition:"0.5s ease-in-out"}}>
            {gender === "male" && (<img src="images/maleuser.png" width="60" style={{display:"inline-block"}} />)}
            {gender === "female" && (<img src="images/woman.png" width="60" style={{display:"inline-block"}} />)}
            <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500] ml-[0.5cm] text-[#fff]'>Welcome {full_name}!</span>
        </div>
        
        <div data-aos="zoom-in" className='mt-[2cm] lg:mx-[20%] md:mx-[10%]' style={{border:"3px solid #aaf", transition:"0.5s ease-in-out"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] px-[0.2cm] text-center py-[0.4cm]'>
            <img src="images/logo2.png" width="50" className='m-[auto]' />
        </div>
        <div className='py-[0.4cm] text-center text-[#fff] font-[500] text-[110%] px-[5%] bg-[rgba(0,0,0,0.6)]'>
            <span>Your posts will appear on the blog after approval by admin</span>
            <img src="images/check.png" width="40" className='ml-[0.4cm]' style={{display:"inline-block"}}/>
        </div>
        <div className='p-[5%] bg-[#222]'>
            <form onSubmit={(e) => handleSubmitforAddingBlogPostByMember(e)} data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="image_link" name="image_link" value={values.image_link} onChange={handleInput} placeholder="Type the link to a related image" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="video_link" name="video_link" value={values.video_link} onChange={handleInput} placeholder="Or type the link to a related video" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="title" name="title" value={values.title} onChange={handleInput} placeholder="Type the title of your post" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="date" name="date" value={values.date} onChange={handleInput} placeholder="Type the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="category" name="category" value={values.category} onChange={handleInput} placeholder="Choose a category for your post" />
            <textarea className='px-[0.2cm] py-[0.3cm] h-[5cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="description" name="description" value={values.description} onChange={handleInput} placeholder="Give your post a description" />
            <button type="submit" className='generalbutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Add blog post</button>
            </form>     
        </div>
        </div>

        {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}
   </div>
  </>
  );} else {
    (<div></div>)
    }
};

