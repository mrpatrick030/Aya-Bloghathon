import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function AdminDashboard(){
    // Front end layout section
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


    // confirm cookies to enter admin page and logout section
    const [auth, setAuth] = useState(false);
    const [full_name, setfull_name] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setgender] = useState('');

    axios.defaults.withCredentials = true;
    const getAdminData = async () => {
      await axios.get('/api/adminconfirmcookies')
        .then((res) => {
          console.log('Check Auth Response:', res); // line for debugging
          if (res.status === 200) {
            setAuth(true);
            setfull_name(res.data.admin.full_name);
            setEmail(res.data.admin.email);
            setgender(res.data.admin.gender);
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
        getAdminData();
      }, [])

      const router = useRouter();
      const AdminLogout = async(e) => {
        e.preventDefault();
        await axios.get('/api/adminlogoutbyclearingcookiesapi')
        .then ((res) => {
            router.push('/adminlogin')
        })
        .catch ((err) => {
          console.log(err)
        })
      }



   // Admin tasks section
    const [values, setValues] = useState({
        id:"",
        contributor:"admin",
        image_link:"",
        video_link:"",
        title:"",
        date:"",
        description:"",
        category:"",
        status:"approved"
    })
    
    const handleInput = (event) => {
        const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
        setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue }));
      };
    

    const [loading, setLoading] = useState(false); // Add a loading state  
    const handleSubmitforAddingBlogPost = async (e) => {
      setLoading(true);
      e.preventDefault();
        await axios.post("/api/addblogpostdatabyadmin", values)
        .then (res => {
            if (res.status === 200){
            alert("You have successfully added a blog post!")
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

      const handleSubmitforUpdatingBlogPost = async (e) => {
        setLoading(true);
        e.preventDefault();
          await axios.post("/api/updateblogpostdatabyadmin", values)
          .then (res => {
              if (res.status === 200){
              alert("You have successfully updated a blog post!")
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

        const handleSubmitforDeletingBlogPost = async (e) => {
            setLoading(true);
            e.preventDefault();
              await axios.post("/api/deleteblogpostdatabyadmin", values)
              .then (res => {
                  if (res.status === 200){
                  alert("You have successfully deleted a blog post!")
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

            const [unapprovedPosts, setUnapprovedPosts] = useState([]);
            const getUnapprovedPostsData = async () => {
              try {
                const response = await axios.get('/api/showmembersunapprovedposts'); // Correct API endpoint URL
                setUnapprovedPosts(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
           
            useEffect(() => {
            getUnapprovedPostsData();
          }, []); 

          const handleSubmitforApprovingBlogPost = async (e) => {
            setLoading(true);
            e.preventDefault();
              await axios.post("/api/approvecontributorsblogpost", values)
              .then (res => {
                  if (res.status === 200){
                  alert("You have successfully approved a contributor's post!")
                  }
                  else {
                      alert ("Check your network and try again!")
                  }
              })
              .catch (err => alert("Check your network and try again!"))
              .finally(() => {
                setLoading(false);
              });
            }
 
 if (auth) {
  return (
    <>
    <Head>
   <title>Informatio - Admin Dashboard</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='p-[5%] pb-[40%]' style={{backgroundImage:"url(images/blocks.jpg)", backgroundPositionX:"50%", backgroundPositionY:"20%"}}>
    <div className='py-[0.3cm]'>
     <span className='cursor-pointer' onClick={(e) => AdminLogout(e)}>
      <img src="images/power.png" width="50" style={{display:"inline-block"}}/>
      <span className='ml-[0.5cm] lg:text-[180%] md:text-[180%] text-[150%] font-[500] text-[#fff]'>Logout</span>
     </span>
    </div>

        <div data-aos="fade-out" className='text-center mt-[1cm]' style={{display:"block", transition:"0.5s ease-in-out"}}>
            {gender === "male" && (<img src="images/admin.png" width="60" style={{display:"inline-block"}} />)}
            {gender === "female" && (<img src="images/womanadmin.png" width="60" style={{display:"inline-block"}} />)}
            <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500] ml-[0.5cm] text-[#fff]'>Welcome {full_name}!</span>
        </div>

        { gender === "male" && 
        (<div className='text-center mt-[0.5cm] lg:text-[150%] text-[120%] font-[500] text-[#228]'>
        {new Date().getUTCHours() >= 0 && new Date().getUTCHours() < 11 && (<div><span>Good morning sir!</span><img className='ml-[0.3cm]' src="images/dawn.png" width="30" style={{display:"inline-block"}}/></div>)}
        {new Date().getUTCHours() >= 11 && new Date().getUTCHours() < 15 && (<div><span>Good afternoon sir!</span><img className='ml-[0.3cm]' src="images/sun.png" width="30" style={{display:"inline-block"}}/></div>)}
        {new Date().getUTCHours() >= 15 && new Date().getUTCHours() < 23 && (<div><span>Good evening sir!</span><img className='ml-[0.3cm]' src="images/night.png" width="30" style={{display:"inline-block"}}/></div>)}
        </div>)
        }

       { gender === "female" && 
        (<div className='text-center mt-[0.5cm] lg:text-[150%] text-[120%] font-[500] text-[#228]'>
        {new Date().getUTCHours() >= 0 && new Date().getUTCHours() < 11 && (<div><span>Good morning ma'am!</span><img className='ml-[0.3cm]' src="images/dawn.png" width="30" style={{display:"inline-block"}}/></div>)}
        {new Date().getUTCHours() >= 11 && new Date().getUTCHours() < 15 && (<div><span>Good afternoon ma'am!</span><img className='ml-[0.3cm]' src="images/sun.png" width="30" style={{display:"inline-block"}}/></div>)}
        {new Date().getUTCHours() >= 15 && new Date().getUTCHours() < 23 && (<div><span>Good evening ma'am!</span><img className='ml-[0.3cm]' src="images/night.png" width="30" style={{display:"inline-block"}}/></div>)}
        </div>)
        }
        
        <div data-aos="zoom-in" className='mt-[1cm] lg:mx-[10%] md:mx-[5%]' style={{border:"3px solid #ccf", transition:"0.5s ease-in-out"}}>
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
            <form onSubmit={(e) => handleSubmitforAddingBlogPost(e)} data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="image_link" name="image_link" value={values.image_link} onChange={handleInput} placeholder="Type the link to a related image" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="video_link" name="video_link" value={values.video_link} onChange={handleInput} placeholder="Or type the link to a related video" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="title" name="title" value={values.title} onChange={handleInput} placeholder="Type the title of your post" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="date" name="date" value={values.date} onChange={handleInput} placeholder="Type the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="category" name="category" value={values.category} onChange={handleInput} placeholder="Choose a category for your post" />
            <textarea className='px-[0.2cm] py-[0.3cm] h-[5cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="description" name="description" value={values.description} onChange={handleInput} placeholder="Give your post a description" />
            <button type="submit" className='generalbutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Add blog post</button>
            </form>
           }

           {displayComponent === "updatePostDisplayComponent" &&
            <form onSubmit={(e) => handleSubmitforUpdatingBlogPost(e)} data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="id" name="id" value={values.id} onChange={handleInput} placeholder="Input id of post to update" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="image_link" name="image_link" value={values.image_link} onChange={handleInput} placeholder="Update image link" />
            <input type="url" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="video_link" name="video_link" value={values.video_link} onChange={handleInput} placeholder="Update video link" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="title" name="title" value={values.title} onChange={handleInput} placeholder="Update post title" />
            <input type="date" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="date" name="date" value={values.date} onChange={handleInput} placeholder="Update the date of your post" />
            <input type="text" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="category" name="category" value={values.category} onChange={handleInput} placeholder="Update post category" />
            <textarea className='px-[0.2cm] py-[0.3cm] h-[5cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} id="description" name="description" value={values.description} onChange={handleInput} placeholder="Update post description" />
            <button type="submit" className='generalbutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#225] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Update blog post</button>
            </form>
           }

           {displayComponent === "deletePostDisplayComponent" &&
            <form onSubmit={(e) => handleSubmitforDeletingBlogPost(e)} data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' style={{border:"2px solid #ccf"}} required id="id" name="id" value={values.id} onChange={handleInput} placeholder="Input id of post to delete" />
            <button type="submit" className='deletebutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#500] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Delete blog post</button>
            </form>
           }

           {displayComponent === "viewContributorsPostDisplayComponent" &&
           <div data-aos="fade-in" className='p-[0.5cm] bg-[rgba(0,0,0,0.7)] max-h-[20cm]' style={{overflow:"auto", transition:"0.5s ease-in-out"}}>
            {unapprovedPosts.length > 0 ? 
            (<table border="1">
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
                {unapprovedPosts.map((post) => (
                <tr key={post.id} className='text-[#fff]'>
                    <td className='p-[0.2cm]'>{post.contributor}</td>
                    <td className='p-[0.2cm]'>{post.id}</td>
                    <td className='p-[0.2cm]'>{post.image_link}</td>
                    <td className='p-[0.2cm]'>{post.video_link}</td>
                    <td className='p-[0.2cm]'>{post.title}</td>
                    <td className='p-[0.2cm]'>{post.date}</td>
                    <td className='p-[0.2cm]'>{post.description}</td>
                    <td className='p-[0.2cm]'>{post.category}</td>
                    <td className='p-[0.2cm]'>{post.status}</td>
                    <td className='p-[0.2cm]'><img src="images/writing.png" width="40" className='cursor-pointer' onClick={(e) => changeApproveContributorsPost(e) & changeDisplayComponent("approveContributorsPostDisplayComponent")}/></td>
                    </tr>
                     ))}
                </tbody>
            </table>) : 
            (<div className='text-center text-[#fff] font-[500] fa-fade' style={{animationDuration:"3s"}}>New unapproved posts will appear here! <img src="images/caution.png" width="20" className='ml-[0.3cm]' style={{display:"inline-block"}} /></div>)
            }
            </div>
           }

           {displayComponent === "approveContributorsPostDisplayComponent" &&
            <form onSubmit={(e) => handleSubmitforApprovingBlogPost(e)} data-aos="fade-in" style={{transition:"0.5s ease-in-out"}}>
            <input type="number" className='px-[0.2cm] py-[0.3cm] bg-[#fff] outline-[#224] w-[100%] placeholder-[#555] mb-[0.5cm]' required id="id" name="id" value={values.id} onChange={handleInput} style={{border:"2px solid #ccf"}} placeholder="Input id of post to approve" />
            <button type="submit" className='approvebutton px-[0.2cm] py-[0.3cm] rounded-md bg-[#030] w-[100%] text-[110%] font-[500] text-[#fff] mb-[0.5cm] text-center'>Approve Contributor's post</button>
            </form>
           }
        </div>
        </div>

        {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}
   </div>
  </>
  );}
  else {
    <div></div>
  }
};

