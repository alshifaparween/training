
import React from "react";
import LoginPage from "./LoginPage";
import DetailsTravel from "./DetailsTravel";


import { Button, Card, Flex, Typography } from 'antd';
import ButtonDes from "./ButtonDes";
import "./button.css";
 import TravelLogo from "./TravelLogo";
import PageDes from "./PageDes";
import CardDes from "./CardDes";
import Pagelayout from "./Pagelayout";






function HeroSection() {
  return (
    <>
    <div
      className="row pt-4"
      id="banner-paragraph"
      style={{
        width: '100%', // Full width of the parent container
        height: '100vh', // Full viewport height
        backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/47/366/desktop-wallpaper-dark-blue-high-definition-m23-blue-banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 5%', // Padding around the content
        boxSizing: 'border-box',
      }}
    >





            
          
        

      


     
  <div className="container-fluid ">
  <div className="row d-flex justify-content-evenly">
  <div className="col-md-6 pt-3 pb-3 mt-5">
  <div className="mt-5 text-white  text-center">
<h1>Travel POrtal</h1>

</div>
</div>

<div className="col-md-4  pb-3 mt-2">
  <div className="mb-0">

  {/* <LoginPage></LoginPage> */}
    </div>
  </div>
</div>
</div>
      
    </div>
   

<TravelLogo></TravelLogo>
 <DetailsTravel ></DetailsTravel> 
 <PageDes></PageDes>
 <CardDes></CardDes>
 <Pagelayout></Pagelayout>


      
    

    </>
  );
}

// Define styles







  
  
  
  
    

export  default   HeroSection;
    