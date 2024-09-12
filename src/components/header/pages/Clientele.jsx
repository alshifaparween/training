import React from "react";
// import React { Component } from "react";
import Slider from "react-slick";
import styles from "./Clientele.module.css";
import client1 from "../../assets/images/client-list/cl-1.png";
import client2 from "../../assets/images/client-list/cl-2.png";
import client3 from "../../assets/images/client-list/cl-3.png";
import client4 from "../../assets/images/client-list/cl-4.png";
import client5 from "../../assets/images/client-list/cl-5.png";
import client6 from "../../assets/images/client-list/cl-6.png";
import client7 from "../../assets/images/client-list/cl-7.png";
import client8 from "../../assets/images/client-list/cl-8.png";
import client9 from "../../assets/images/client-list/cl-9.png";
import client10 from "../../assets/images/client-list/cl-10.png";
import client11 from "../../assets/images/client-list/cl-11.png";
import client12 from "../../assets/images/client-list/cl-12.png";
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"

const Clientele = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client1} width={120} height={60} alt="" />
          </div>
        </div>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client2} width={120} height={60} alt="" />
          </div>
        </div>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client3} width={120} height={60} alt="" />
          </div>
        </div>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client4} width={120} height={60} alt="" />
          </div>
        </div>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client5} width={120} height={60} alt="" />
          </div>
        </div>
        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client6} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client7} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client8} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client9} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client10} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client11} width={120} height={60} alt="" />
          </div>
        </div>

        <div className={styles.client_sec}>
          <div className={styles.slideclient}>
            <img src={client12} width={120} height={60} alt="" />
          </div>
        </div>






      </Slider>
    </div>
  );
};

export default Clientele;
