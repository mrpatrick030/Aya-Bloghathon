import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '@/components/footer';


export default function Contact(){
    const [values, setValues] = useState({
		full_name: '',
        subject:'',
		email: '',
        phone:'',
		message: ''
	})
 
	const [form, setForm] = useState('')
 
	const handleInput = (e) => {
		setValues((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}
 
	const onSubmitForm = async (e) => {
		e.preventDefault();
 
		if (values.full_name && values.email && values.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contactapi`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
				})
 
				const { error } = await res.json()
 
				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}
 
				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setValues({
                    full_name: '',
                    subject:'',
                    email: '',
                    phone:'',
                    message: ''
				  })
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

	useEffect(() => {
		AOS.init();
	  }, [])
 
  return (
    <>
    <Head>
   <title>Informatio - Contact Page</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div style={{backgroundImage:"url(images/laptopchair.jpg)", backgroundPositionX:"50%", backgroundPositionY:"5%"}}>
    <div className='py-[0.3cm] px-[1cm] bg-[#fff]' style={{boxShadow:"-1px 1px 1px 1px #ddd", zIndex:"9999"}}>
     <Link href="/">
      <img src="images/back.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#446]'>Back</span>
     </Link>
    </div>


        <div data-aos="zoom-out" className='lg:mx-[25%] md:mx-[10%] mx-[5%] bg-[#fff] my-[4cm]' style={{border:"3px solid #ccf", transition:"0.5s ease-in-out"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] text-center py-[0.2cm]'>
            <img src="images/logo2.png" width="50" className='m-[auto]' />
        </div>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#002] text-center py-[0.3cm]'>
            <img src="images/mail.png" width="30" style={{display:"inline-block"}}/>
            <span className='ml-[0.2cm]'>Send us a message</span>
        </div>
        <div className='p-[5%] bg-[#112]'>
            <form onSubmit={(e) => onSubmitForm(e)}>
            <input type="text" id="full_name" name="full_name" value={values.full_name} required onChange={handleInput} className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your full name" />
            <input type="text" id="subject" name="subject" value={values.subject} onChange={handleInput} className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Enter subject of your message" />
            <input type="email" id="email" name="email" value={values.email} required onChange={handleInput} className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your email" />
            <input type="text" id="phone" name="phone" value={values.phone} onChange={handleInput} className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your phone number (optional)" />
            <textarea id="message" name="message" value={values.message} required onChange={handleInput} className='px-[0.2cm] py-[0.3cm] h-[5cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type your message here" />
            <button type="submit" className='generalbutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Send message</button>
            {form.state === 'loading' ? (
					<div><span className="text-[#ccc] lg:text-[120%]" style={{animationDuration:"3s"}}>Sending......</span></div>
				) : form.state === 'error' ? (
					<div><span className="text-[#d00] lg:text-[120%]">Check if your network connection is ok!</span><img src="images/cancel.png" width="20" className='ml-[0.3cm]' style={{display:"inline-block"}} /></div>
				) : (
					form.state === 'success' && <div><span className="text-[#0fa] lg:text-[120%] fa-fade" style={{animationDuration:"3s"}}>Thank you for contacting us!</span><img src="images/checked.png" width="20" className='ml-[0.3cm]' style={{display:"inline-block"}}/></div>
			)}
            </form>
        </div>
        </div>

   <Footer />
   </div>
  </>
  );
};

