import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from './header';

export default function Mainbar () {
  // show all approved posts
  const [approvedPosts, setapprovedPosts] = useState([]);
  const getapprovedPostsData = async () => {
    try {
      const response = await axios.get('/api/showapprovedposts'); 
      setapprovedPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getapprovedPostsData();
  }, []); 

  // if there is an admin logged in, show post id
  const [adminAvailability, setAdminAvailability] = useState(false)
  axios.defaults.withCredentials = true;
  const getAdminData = async () => {
    await axios.get('/api/adminconfirmcookies')
      .then((res) => {
        console.log('Check Auth Response:', res);
        if (res.status === 200) {
          setAdminAvailability(true)
        } else {
          setAdminAvailability(false)
        }
      })
      .catch((err) => {
        setAdminAvailability(false)
        console.log("Not admin!")
      });
    }
    useEffect(() => {
      getAdminData();
    }, [])

    // send id to API to display post on single post page   
  
  const [loading, setLoading] = useState(false); // Add a loading state  
  const router = useRouter();
  const handleSubmitforSendingSinglePostid = async (postID) => {
    setLoading(true);
      await axios.post("/api/singlepostapi", {id:postID})
      .then (res => {
          if (res.status === 200){
          router.push('/singleposts');
          }
          else {
              console.log ("no data!")
          }
      })
      .catch (err => console.log("no Data!"))
      .finally(() => {
        setLoading(false); //(whether successful or not), stop loading
      });
    }

   // search functionality
   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
   const [searchResults, setSearchResults] = useState([]); // State to hold the search results
        
    const handleSearch = async () => {
    setLoading(true);
    try {
    const response = await axios.get(`/api/searchpostsapi?query=${searchQuery}`);
     console.log('Search Results:', response.data); 
     setSearchResults(response.data);
    } catch (error) {
    console.error('Error fetching search results:', error);
    }
    finally {
     setLoading(false); //(whether successful or not), stop loading
     };
    };
    useEffect(() => {
     AOS.init();
      handleSearch();
      }, []);


    return (
        <div>
          <div className='pb-[0.5cm]' style={{position:"sticky"}}>
          <span className='bg-[#fff] px-[0.5cm] py-[0.2cm] rounded-full'>
        <form style={{display:"inline-block"}}>
        <input type="text" placeholder="Search blog...." onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#fff] w-[4cm] placeholder-[#300] text-[90%] outline-none' /><img src="images/search.png" width="20" onClick={(e) => {e.preventDefault(); handleSearch(searchQuery)}} className='ml-[0.2cm] cursor-pointer' style={{display:"inline-block"}}/>
        </form>
        </span>
          </div>
      {searchResults.length > 0 ? searchResults.map((posts) => (
      <div data-aos="slide-up" key={posts.id} className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ddd", transition:"0.5s ease-in-out"}}>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='grid-cols-1'>
        <img src={posts.image_link} className='rounded-md max-h-[7cm] w-[100%]' />
        </div>
        <div className='grid-cols-1 lg:col-span-2'>
        <div className='text-[150%] font-[600] text-[#446]'>
        {posts.title.length > 100 ? 
        (<span>{posts.title.substring(0, 100)}....</span>) : (<span>{posts.title}</span>)
        }
        </div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>{posts.date}</div>
        <div className='text-[90%] mt-[0.3cm] text-[#223] font-[500]'>Posted by <span>{posts.contributor}</span></div>
        {adminAvailability ? (<div className='mt-[0.2cm] text-[90%] text-[#226] font-[500]'>Post ID: {posts.id}</div>): (<div></div>)}
        </div>
        </div>
      </div>
      <div className='text-[#445] mt-[0.5cm]'>
        {posts.description.length > 300 ? 
        (<span>{posts.description.substring(0, 300)}....</span>) : (<span>{posts.description}</span>)
        }
      </div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445] cursor-default' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>{posts.category}</button>
      </div>
      <div className='mt-[1cm]' style={{position:"absolute"}}>
      <button onClick={() => handleSubmitforSendingSinglePostid(posts.id)} className='px-[0.5cm] py-[0.2cm] bg-[#225] text-[#fff] text-[80%] text-[#445] rounded-tr-full'>Continue Reading</button>
      </div>
    </div>
    ))
       :   
      approvedPosts.map((posts) => (
      <div data-aos="slide-up" key={posts.id} className='bg-[#fff] p-[0.5cm] pb-[1.5cm] rounded-md mb-[1.5cm]' style={{boxShadow:"1px 1px 2px 2px #ddd", transition:"0.5s ease-in-out"}}>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='grid-cols-1'>
        <img src={posts.image_link} className='rounded-md max-h-[7cm] w-[100%]' />
        </div>
        <div className='grid-cols-1 lg:col-span-2'>
        <div className='text-[150%] font-[600] text-[#446]'>
        {posts.title.length > 100 ? 
        (<span>{posts.title.substring(0, 100)}....</span>) : (<span>{posts.title}</span>)
        }
        </div>
        <div style={{display:"block"}}>
        <img src="images/calendar.png" width="20" style={{display:"inline-block"}}/>
        <div className='text-[85%] text-[#445] ml-[0.2cm]' style={{display:"inline-block"}}>{posts.date}</div>
        <div className='text-[90%] mt-[0.3cm] text-[#223] font-[500]'>Posted by <span>{posts.contributor}</span></div>
        {adminAvailability ? (<div className='mt-[0.2cm] text-[90%] text-[#226] font-[500]'>Post ID: {posts.id}</div>): (<div></div>)}
        </div>
        </div>
      </div>
      <div className='text-[#445] mt-[0.5cm]'>
        {posts.description.length > 300 ? 
        (<span>{posts.description.substring(0, 300)}....</span>) : (<span>{posts.description}</span>)
        }
      </div>
      <div className='mt-[0.5cm]'>
        <button className='px-[0.3cm] py-[0.1cm] bg-[#fff] text-[80%] rounded-md text-[#445] cursor-default' style={{boxShadow:"1px 1px 2px 2px #ccc"}}>{posts.category}</button>
      </div>
      <div className='mt-[1cm]' style={{position:"absolute"}}>
      <button onClick={() => handleSubmitforSendingSinglePostid(posts.id)} className='px-[0.5cm] py-[0.2cm] bg-[#225] text-[#fff] text-[80%] text-[#445] rounded-tr-full'>Continue Reading</button>
      </div>
    </div>
    ))}


      {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}

        </div>
    )
}
