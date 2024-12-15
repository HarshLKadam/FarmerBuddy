import React from 'react'
import HomeBanner from '../Home/HomeBanner/HomeBanner.jsx'
import Ad1 from '../../assets/ad1.jpg'
import Ad2 from '../../assets/ad2.jpg'
import '../Home/HomeCss.css'

const Home = () => {
  return (
   <>
   <HomeBanner/>
<div className="line"></div>
   <div className="homeProducts">
     <div className="left ad-section">
        <img src={Ad1} alt="" />
        <img src={Ad2} alt="" />
     </div>

     <div className="right">

     </div>
   </div>
   </>
  )
}

export default Home
