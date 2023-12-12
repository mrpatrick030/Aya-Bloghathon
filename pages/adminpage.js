import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


export default function AdminDashboard(){
    useEffect(() => {
        AOS.init();
      }, [])
    
    const [addPostColor, setaddPostColor] = useState("#fff")
    const [addPostBg, setaddPostBg] = useState("#225")
    const [updatePostColor, setupdatePostColor] = useState("#000")
    const [updatePostBg, setupdatePostBg] = useState("#fff")
    const [deletePostColor, setdeletePostColor] = useState("#000")
    const [deletePostBg, setdeletePostBg] = useState("#fff")
    const [viewcontributorsPostColor, setviewcontributorsPostColor] = useState("#000")
    const [viewcontributorsPostBg, setviewcontributorsPostBg] = useState("#fff")
    const [approvecontributorsPostColor, setapprovecontributorsPostColor] = useState("#000")
    const [approvecontributorsPostBg, setapprovecontributorsPostBg] = useState("#fff")

    const changeAddPost = () => {
        setaddPostColor("#fff")
        setaddPostBg("#225")
        setupdatePostColor("#000")
        setupdatePostBg("#fff")
        setdeletePostColor("#000")
        setdeletePostBg("#fff")
        setviewcontributorsPostColor("#000")
        setviewcontributorsPostBg("#fff")
        setapprovecontributorsPostColor("#000")
        setapprovecontributorsPostBg("#fff")
    }

    const changeUpdatePost = () => {
        setaddPostColor("#000")
        setaddPostBg("#fff")
        setupdatePostColor("#fff")
        setupdatePostBg("#225")
        setdeletePostColor("#000")
        setdeletePostBg("#fff")
        setviewcontributorsPostColor("#000")
        setviewcontributorsPostBg("#fff")
        setapprovecontributorsPostColor("#000")
        setapprovecontributorsPostBg("#fff")
    }

    const changeDeletePost = () => {
        setaddPostColor("#000")
        setaddPostBg("#fff")
        setupdatePostColor("#000")
        setupdatePostBg("#fff")
        setdeletePostColor("#fff")
        setdeletePostBg("#225")
        setviewcontributorsPostColor("#000")
        setviewcontributorsPostBg("#fff")
        setapprovecontributorsPostColor("#000")
        setapprovecontributorsPostBg("#fff")
    }

    const changeViewContributorsPost = () => {
        setaddPostColor("#000")
        setaddPostBg("#fff")
        setupdatePostColor("#000")
        setupdatePostBg("#fff")
        setdeletePostColor("#000")
        setdeletePostBg("#fff")
        setviewcontributorsPostColor("#fff")
        setviewcontributorsPostBg("#225")
        setapprovecontributorsPostColor("#000")
        setapprovecontributorsPostBg("#fff")
    }

    const changeApproveContributorsPost = () => {
        setaddPostColor("#000")
        setaddPostBg("#fff")
        setupdatePostColor("#000")
        setupdatePostBg("#fff")
        setdeletePostColor("#000")
        setdeletePostBg("#fff")
        setviewcontributorsPostColor("#000")
        setviewcontributorsPostBg("#fff")
        setapprovecontributorsPostColor("#fff")
        setapprovecontributorsPostBg("#225")
    }

    const [displayComponent, setDisplayComponent] = useState("addPostDisplayComponent")
    const changeDisplayComponent = (initial) => {
        setDisplayComponent(initial)
    }
 
  return (
    <>
    <Head>
   <title>Informatio - Admin Dashboard</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='p-[5%] pb-[40%]' style={{backgroundImage:"url(images/blocks.jpg)", backgroundPositionX:"50%", backgroundPositionY:"20%"}}>
    <div className='py-[0.3cm]'>
     <Link href="/">
      <img src="images/power.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#fff]'>Logout</span>
     </Link>
    </div>

        <div className='text-center mt-[1cm]' style={{display:"block"}}>
            <img src="images/admin.png" width="60" style={{display:"inline-block"}} />
            <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500] ml-[0.5cm] text-[#fff]'>Welcome Patrick Ominisan!</span>
        </div>
        
        <div className='mt-[2cm] lg:mx-[10%] md:mx-[5%]' style={{border:"3px solid #ccf"}}>
        <div className='text-[150%] font-[500] text-[#fff] bg-[#000] px-[0.2cm] text-center py-[0.4cm]'>
            <img src="images/logo2.png" width="50" className='m-[auto]' />
        </div>
        <div className='py-[0.3cm] text-center text-[#fff] font-[500] lg:text-[150%] md:text-[130%] text-[120%] bg-[#002] px-[5%]'>
            <img src="images/panel.png" width="40" style={{display:"inline-block"}}/>
            <span className='ml-[0.4cm]'>Admin Control Panel</span>
        </div>
        <div className='py-[0.3cm] bg-[#001] text-center px-[0.2cm]'>
            <button className='px-[0.4cm] py-[0.2cm] rounded-md font-[500] m-[0.2cm]' onClick={(e) => changeAddPost(e) & changeDisplayComponent("addPostDisplayComponent")} style={{background:addPostBg, color:addPostColor}}>Add Post</button>
            <button className='px-[0.4cm] py-[0.2cm] rounded-md font-[500] m-[0.2cm]' onClick={(e) => changeUpdatePost(e) & changeDisplayComponent("updatePostDisplayComponent")} style={{background:updatePostBg, color:updatePostColor}}>Update Post</button>
            <button className='px-[0.4cm] py-[0.2cm] rounded-md font-[500] m-[0.2cm]' onClick={(e) => changeDeletePost(e) & changeDisplayComponent("deletePostDisplayComponent")} style={{background:deletePostBg, color:deletePostColor}}>Delete Post</button>
            <button className='px-[0.4cm] py-[0.2cm] rounded-md font-[500] m-[0.2cm]' onClick={(e) => changeViewContributorsPost(e) & changeDisplayComponent("viewContributorsPostDisplayComponent")} style={{background:viewcontributorsPostBg, color:viewcontributorsPostColor}}>View Contributors' Posts</button>
            <button className='px-[0.4cm] py-[0.2cm] rounded-md font-[500] m-[0.2cm]' onClick={(e) => changeApproveContributorsPost(e) & changeDisplayComponent("approveContributorsPostDisplayComponent")} style={{background:approvecontributorsPostBg, color:approvecontributorsPostColor}}>Approve Contributors' Posts</button>
        </div>
        <div className='p-[5%] bg-[rgba(0,0,0,0.7)]'>
            {displayComponent === "addPostDisplayComponent" &&
            <form data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the link to a related image" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Or type the link to a related video" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the title of your post" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Type the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Give your post a description" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Choose a category for your post" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Add blog post</button>
            </form>
           }

           {displayComponent === "updatePostDisplayComponent" &&
            <form data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input id of post to update" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update image link" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update video link" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update post title" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update post description" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Update post category" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Update blog post</button>
            </form>
           }

           {displayComponent === "deletePostDisplayComponent" &&
            <form data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input id of post to delete" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#500] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Delete blog post</button>
            </form>
           }

           {displayComponent === "viewContributorsPostDisplayComponent" &&
           <div data-aos="fade-in" className='p-[0.5cm] bg-[rgba(0,0,0,0.7)] max-h-[15cm]' style={{overflow:"auto", transition:"0.5s ease-in-out"}}>
            <table border="1">
                <thead>
                <tr className='font-[600] text-[#fff] text-[120%]'>
                    <th className='p-[0.2cm]'>Contributor</th>
                    <th className='p-[0.2cm]'>Post ID</th>
                    <th className='p-[0.2cm]'>Image Link</th>
                    <th className='p-[0.2cm]'>Video Link</th>
                    <th className='p-[0.2cm]'>Title</th>
                    <th className='p-[0.2cm]'>Date</th>
                    <th className='p-[0.2cm]'>Description</th>
                    <th className='p-[0.2cm]'>Category</th>
                    <th className='p-[0.2cm]'>Status</th>
                    <th className='p-[0.2cm]'>Approve</th>
                </tr>
                </thead>
                <tbody>
                <tr className='text-[#fff]'>
                    <td className='p-[0.2cm]'>Jane</td>
                    <td className='p-[0.2cm]'>5</td>
                    <td className='p-[0.2cm]'>https://app.pinata.cloud</td>
                    <td className='p-[0.2cm]'>https://app.pinata.cloud</td>
                    <td className='p-[0.2cm]'>Google core web vitals which benefit in ranking faster.</td>
                    <td className='p-[0.2cm]'>12/12/2023</td>
                    <td className='p-[0.2cm]'>When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances
                     because these are very exciting times.
                    </td>
                    <td className='p-[0.2cm]'>blockchain</td>
                    <td className='p-[0.2cm]'></td>
                    <td className='p-[0.2cm]'><img src="images/writing.png" width="40" className='cursor-pointer' onClick={(e) => changeApproveContributorsPost(e) & changeDisplayComponent("approveContributorsPostDisplayComponent")}/></td>
                </tr>
                <tr className='text-[#fff]'>
                    <td className='p-[0.2cm]'>Jane</td>
                    <td className='p-[0.2cm]'>5</td>
                    <td className='p-[0.2cm]'>https://app.pinata.cloud</td>
                    <td className='p-[0.2cm]'>https://app.pinata.cloud</td>
                    <td className='p-[0.2cm]'>Google core web vitals which benefit in ranking faster.</td>
                    <td className='p-[0.2cm]'>12/12/2023</td>
                    <td className='p-[0.2cm]'>When you feel inspired and on top, you're motivated to do a great job. And it's hard not to be inspired by the rapid technological advances
                     because these are very exciting times.
                    </td>
                    <td className='p-[0.2cm]'>blockchain</td>
                    <td className='p-[0.2cm]'></td>
                    <td className='p-[0.2cm]'><img src="images/writing.png" width="40" className='cursor-pointer' onClick={(e) => changeApproveContributorsPost(e) & changeDisplayComponent("approveContributorsPostDisplayComponent")}/></td>
                </tr>
                </tbody>
            </table>
            </div>
           }

           {displayComponent === "approveContributorsPostDisplayComponent" &&
            <form data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} placeholder="Input id of post to approve" />
            <button type="submit" className='px-[0.2cm] py-[0.3cm] rounded-md bg-[#030] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Approve Contributor's post</button>
            </form>
           }
        </div>
        </div>


   </div>
  </>
  );
};

