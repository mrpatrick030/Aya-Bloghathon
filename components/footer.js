export default function Footer () {
    return (
        <div className='footer p-[1cm] mt-[2cm]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8'>
         <div className='grid-cols-1 m-[auto]'>
          <img src="images/logo2.png" width="100" />
         </div>
         <div className='grid-cols-1 text-center text-[#fff] m-[auto]'>
         Informatio - A web 3 blog sharing insights into the blockchain. We give insights about DAOs, NFTs and many other blockchain related topics.
         </div>
         <div className='grid-cols-1 text-center text-[#fff] m-[auto]'>
          <div>Follow us on social media</div>
          <div className='mt-[0.2cm]'>
            <img src="images/linkedin.png" width="40" className='m-[0.2cm]' style={{display:"inline-block"}} />
            <img src="images/twitter.png" width="40" className='m-[0.2cm]' style={{display:"inline-block"}} />
            <img src="images/youtube.png" width="40" className='m-[0.2cm]' style={{display:"inline-block"}} />
            </div>
         </div>
        </div>
        <div className='text-center mt-[0.2cm] text-[#fff] text-[120%] font-[500] m-[auto]'>&copy; copyright {new Date().getFullYear()}</div>
       </div>
    )
}