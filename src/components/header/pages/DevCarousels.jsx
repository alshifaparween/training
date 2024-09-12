import React, { Component } from "react";
import Slider from "react-slick";
import styles from './DevCarousels.module.css'
import './DevCarousels.module.css'
import android from '../../../assets/images/android.png'
import react from '../../../assets/images/atom.png'
import javascript from '../../../assets/images/java-script.png'
import java from '../../../assets/images/java.png'
import node from '../../../assets/images/nodejs (1).png'
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"



const DevCarousels = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
        <Slider {...settings}>
          <div className="mb-5">
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={android} alt="" style={{width:'50px',marginRight:'20px'}}/>
              <h5 className="m-0">Android Developer</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard}>1-2 yrs</span>
                <span  className={styles.spancard}>Full Time</span>
                <span className={styles.spancard} >Onsite</span>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={react} alt="" style={{width:'15%',marginRight:'20px'}}/>
              <h5 className="m-0">React Developer</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard} >1-2 yrs</span>
                <span  className={styles.spancard}>Full Time</span>
                <span className={styles.spancard}>Onsite</span>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={node} alt="" style={{width:'15%',marginRight:'20px'}}/>
              <h5 className="m-0">NodeJS Developer</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard}>1-2 yrs</span>
                <span className={styles.spancard}>Full Time</span>
                <span className={styles.spancard}>Onsite</span>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={javascript} alt="" style={{width:'15%',marginRight:'20px'}}/>
              <h5 className="m-0">Javascript Developer</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard}>1-2 yrs</span>
                <span className={styles.spancard}>Full Time</span>
                <span className={styles.spancard}>Onsite</span>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={java} alt="" style={{width:'15%',marginRight:'20px'}}/>
              <h5 className="m-0">Java Developer</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard}>1-2 yrs</span>
                <span className={styles.spancard}>Full Time</span>
                <span className={styles.spancard}>Onsite</span>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className={styles.slide}>
              <div className={styles.react}>
              <img src={react} alt="" style={{width:'15%',marginRight:'20px'}}/>
              <h5 className="m-0">React Native</h5>
              </div>
              <div className={styles.exp}>
                <span className={styles.spancard}>1-2 yrs</span>
                <span className={styles.spancard}>Full Time</span>
                <span className={styles.spancard}>Onsite</span>
              </div>
              
            </div>
            
          </div>
        </Slider>
      </div>
  )
}

export default DevCarousels