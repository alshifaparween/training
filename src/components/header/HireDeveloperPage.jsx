





import React, { useEffect } from "react";

import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import    DevCarousels from "./pages/DevCarousels.jsx"
import styles from "./hiredeveloperpage.module.css";
import hiring2 from "../../assets/images/hiring (3).png";
import carilogo from "../../assets/cari-logo.png"
import { useDispatch } from "react-redux";
import { globalModal } from "./pages/Redux/actions/globalModal.js";
// import DevCarousels from './pages/DevCarousels.jsx';



import Slider from "react-slick";
import HeadingTag from "./pages/HeadingTag.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import android1 from "../../assets/images/node1.png"
import react1 from  "../../assets/images/react1.png"
import javascript1 from  "../../assets/images/java-script.png";
import java1 from "../../assets/images/java1.png";
import node1 from "../../assets/images/node1.png";
import scroll from "../../assets/images/briefcase1.png";
import { Button, Form } from "react-bootstrap";
import clinetsss from "../../assets/images/clinetss.png";
import bigcompa from "../../assets/images/bbig-com.png";
import hireimg11 from "../../assets/images/hire-img-2.jpg";
import hireimg12 from "../../assets/images/hire-img-1.jpg";
// import Clientele from "./pages/Clientele.jsx";
import bsnimg from "../../assets/images/business-img2.jpg";
import devimg from "../../assets/images/developer-img2.jpg"
import { Link } from "react-router-dom";
// import Clientele from '../../common/landingPage/components/Carousel/DevCarousel/Clientele.jsx'

import HiringMethod from "./pages/HiringMethod.jsx";
import TechStackSearch from "./pages/TechStackSearch.jsx";
import LoginPage from "./LoginPage.jsx";

const HireDeveloperPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.landingPage_inner}>
      <div className="row d-flex justify-content-between">
        
        

       

        <div className="col-md-7 mt-3 ">
            
            <h1 className={styles.sechead}>Tired of traditional recruiting to</h1>
        <h2 className={styles.frsthead}>Hire Developers</h2>
        <h5 className={styles.parabtm}> 
          Hire pre-vetted remote developers with high 
          technical
          <h5 className={styles.parabtm}>  and
          communication skills at affordable prices,</h5>
          <h5 className={styles.parabtm}>ready to work in your
          timezone.</h5>
        </h5>
        <a href="https://cal.com/talnfinium">
          <button className={styles.banner_btn}>Schedule a Call</button>
        </a> 
           
        </div>

        <div className="col-md-5 ms-0 me-0 ">
       
       
       
      



        <LoginPage></LoginPage>
 
        </div>
    </div>
   

       
      </div>




      

      <div
        className={styles.business}
        style={{ backgroundColor: "rgb(245 245 245)" }}
      >
        <div className="row">
          <div className="col-6">
            <img
              src={bsnimg}
              alt=""
              style={{ width: "95%", padding: "60px", borderRadius: "100px" }}
            />
          </div>
          <div className={`col-6 p-5 ${styles.about_details}`}>
            <h5>High Quality Cost Ratio</h5>
            <h2>
              Hire pre-vetted developers at half the costs from Talnfinium
            </h2>
            <p>
              Quickly and efficiently build your engineering team with our
              deeply vetted talent. We have more than 150+ tech stacks
              developers with us like React, Node, Python, Angular, Swift, React
              Native, Android, Java, Rails, Golang, DevOps, ML, Data Engineers,
              and more.
            </p>

            <button
              className={styles.hire_buttons}
              onClick={() =>
                dispatch(
                  globalModal({
                    component: "ContactForm",
                    closeButton: true,
                    size: "lg",
                  })
                )
              }
            >
              Hire Talents
            </button>
          </div>
        </div>
      </div>
      <div className={styles.business}>
        <div className="row">
          <div className={`col-6 p-5 ${styles.about_details}`}>
            <h5>Effective Collaboration</h5>
            <h2>Easy to Manage Administrative Reports </h2>
            <p>
              Talnfinium's Workspace gives you even more visibility into your
              remote developer’s work with automatic time tracking & virtual
              daily stand-ups. High visibility makes our developers easy to
              engage and ensures their work aligns with what’s valuable to you.
            </p>
            {/* <button className={styles.hire_buttons}>Apply for Jobs</button> */}
            <Link className={styles.hire_buttons} to="/apply-job">
              Find Jobs
            </Link>
          </div>
          <div className="col-6">
            <img
              src={devimg}
              alt=""
              style={{ width: "95%", padding: "60px", borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>

      <HiringMethod />

     

      <div className={styles.tech_stacks}>
        <TechStackSearch />
      </div>

      <div className={styles.tech_stacks2}>
        <h6>Based On Roles</h6>
      </div>
      <div
        className={styles.TechStackSearchResult}
        style={{ margin: "2% 10%" }}
      >
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Full Stack Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Software Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Mobile App Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>UI/UX Design...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Front-end Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Back-end Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Wordpress Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Cloud Engin...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>IOS Dev...</h5>
        </div>
        <div className={styles.techstacks}>
          <img src={scroll} style={{ width: "15%" }} alt="" />
          <h5>Database Man...</h5>
        </div>

        {/* <div className={styles.tech_stacks3}>
          <h6 className={styles.cool_link}>See All Roles</h6>
          </div> */}
      </div>
      <div className="hire_btn2 text-center">
        <button
          className={styles.hire_btn2}
          onClick={() => {
            dispatch(
              globalModal({
                component: "ContactForm",
                closeButton: false,
                size: "lg",
              })
            );
          }}
        >
          Hire Now
        </button>
        
      </div>
      <div className="choose_us">
        <div className="feat bg-gray pt-3 pb-4">
          <div className={styles.container}>
            <div className="row">
              <div className={styles.tech_stacks}>
                <h1>Let's Grow - Together</h1>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>Boost your revenue</h6>
                  <p>
                    We use the latest technology for the latest world because we
                    know the demand of people around the world.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>Talent Bench</h6>
                  <p>
                    You can streamline and improve your hiring process with the
                    help of our Talent Bench.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>Expand your network</h6>
                  <p>
                    Don't struggle to discover the ideal developer for your team
                    with the help of Talnfinium.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>Win more clients</h6>
                  <p>
                    Get business referrals, co-marketing, sales enablement,
                    exclusive events, and more.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>Scale your agency</h6>
                  <p>
                    We are always Access agency-specific tools, certification
                    for employees, and dedicated support.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className={styles.item}>
                  <h6>700+</h6>
                  <p>
                    If our customer has any problem and we have Active
                    agency-managed brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bgbnnr}>
        <div>
          <h3>Top Companies Hiring Now</h3>
          <h4>
            Join top companies and fast-scaling startups who have trusted
            Talnfinium
          </h4>
          <img src={bigcompa} alt="" />
        </div>
        <div className="hire_btn3 text-center mt-4 mb-1">
          <a href="/apply-job">
            <button className={styles.hire_btn3}>Find Dream Jobs</button>
          </a>
        </div>
      </div>

      <div className={styles.container2}>
        <h1
          className="text-center mb-4"
          style={{ color: "#000", fontSize: "35px" }}
        >
          Comparative Analysis
        </h1>
        <div className={styles.anal_table}>
          <div className={styles.table1}>
            <div className={styles.compare1}>
              <div
                style={{
                  backgroundColor: "#18042B",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h5>bhjwcbwdwdhjdw</h5>
              </div>
              <h3>Time To Get Right Developer</h3>
              <h3>Time To Scale Size Of The Team</h3>
              <h3>Cost Of Project</h3>
              <h3>Recurring Cost Of Training & Benefits</h3>
              <h3>Dedicated Resources</h3>
              <h3>Quality Guarantee</h3>
              <h3>Project Failure Risk</h3>
              <h3>Payment Cycle</h3>
              <h3>Project Time</h3>
              <h3>Support</h3>
            </div>
            <div className={styles.compare2}>
              <div
                style={{
                  backgroundColor: "#18042B",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h5>Talnfinium Method</h5>
              </div>
              <h3>24 Hours</h3>
              <h3>24 Hours</h3>
              <h3>Starting From $1200</h3>
              <h3>0</h3>
              <h3>Yes</h3>
              <h3>High</h3>
              <h3>Extremely Low We have 99% success ratio</h3>
              <h3>After 30 Days</h3>
              <h3>Guaranteed Lowest Time</h3>
              <h3>24*7</h3>
            </div>
            <div className={styles.compare3}>
              <div
                style={{
                  backgroundColor: "#18042B",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h5>Traditional Method</h5>
              </div>
              <h3>Min 30 Days</h3>
              <h3>30-60 Days</h3>
              <h3>Starting From $2000</h3>
              <h3>Some Cost Involved</h3>
              <h3>Yes</h3>
              <h3>Medium</h3>
              <h3>Low</h3>
              <h3>Month</h3>
              <h3>Depends on Company</h3>
              <h3>24*7</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hire_btn2 text-center mt-3 mb-3">
        <button
          className={styles.hire_btn2}
          onClick={() => {
            dispatch(
              globalModal({
                component: "ContactForm",
                closeButton: false,
                size: "lg",
              })
            );
          }}
        >
          Hire Talent Now
        </button>
      </div>

     

    </div>
  );
};

export default HireDeveloperPage;