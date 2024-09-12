import React from 'react'
import styles from './Enginespage2.module.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import badges from '../../../assets/bdges1.png';
import { FaRegCalendar } from 'react-icons/fa';
import bannerimg from '../../../assets/bg.jpg';
import { FaCheck } from "react-icons/fa";
import image1 from "../../../assets/about-tra-1.png";
import image2 from "../../../assets/hero-bg.jpg";
import image3 from "../../../assets/travel-1.jpg";
import image4 from "../../../assets/travel-2.jpg";
import image5 from "../../../assets/tra-about-1.jpg";

function Enginespage2() {
  return (
    <>
    <div className="banner" style={{ backgroundImage: `url(${bannerimg})`, height: '788px', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.banner_txt} col-7`}>
                        <h1>Booking Engines</h1>
                        <ul className={styles.txt_points}>
                            <li>
                                <FaRegCalendar style={{ color: 'white', marginRight: '15px' }}></FaRegCalendar>
                                Multi-Lingual Support
                            </li>
                            <li>
                                <FaRegCalendar style={{ color: 'white', marginRight: '15px' }}></FaRegCalendar>
                                Multi-Currency Support
                            </li>
                            <li>
                                <FaRegCalendar style={{ color: 'white', marginRight: '15px' }}></FaRegCalendar>
                                Installation
                            </li>
                            <li>
                                <FaRegCalendar style={{ color: 'white', marginRight: '15px' }}></FaRegCalendar>
                                Responsive Design
                            </li>
                            <li>
                                <FaRegCalendar style={{ color: 'white', marginRight: '15px' }}></FaRegCalendar>
                                Multi-Vendor Marketplace
                            </li>
                        </ul>
                        <div className="badge mt-4">
                        <img src={badges} alt="" />
                        </div>
                    </div>
                    <div className="col-5">
                        <form>
                            <h2 className='text-center'>Request for Proposal</h2>
                            <FloatingLabel controlId="floatingPassword" label="Name">
                                <Form.Control className={styles.form_control} type="text" placeholder="Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"

                            >
                                <Form.Control className={styles.form_control} type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Phone Number">
                                <Form.Control className={styles.form_control} type="Phone Number" placeholder="Phone Number" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Country">
                                <Form.Control className={styles.form_control} type="text" placeholder="Country" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control className={styles.form_control}
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '80px' }}
                                />
                            </FloatingLabel>
                            <button className={`${styles.submit_btn} mt-3`}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.about} d-flex mt-5 mx-auto container`}>
        <div style={{ margin: "30px" }} col-lg-6>
          <img src={image1} alt="" width="550px" />
        </div>
        <div className="ms-5 me-5">
          <h2>Who We Are</h2>
          <p>
            Founded by a team of passionate travel enthusiasts and seasoned
            technology experts, We built on a foundation of innovation,
            excellence, and a customer-centric approach. We understand that in
            today's fast-paced world, the travel industry requires more than
            just traditional solutions. That's why we've dedicated ourselves to
            developing bespoke travel portals that are not only functional but
            also future-proof. Travel agencies throughout the world are
            preparing to sell travel-related content globally by looking for
            creative and affordable travel portal solutions. As a result, travel
            portal creation has gained popularity, and all travel agents are
            well aware of this. Travel agencies are adopting the OTA model to
            get online.
          </p>
        </div>
      </div>
      <div className={`${styles.travel} d-flex mt-5 p-5 mx-auto container-fluid`}>
        <div className="ms-5 me-5">
          <h2 class={styles.hr_lines}>Travel Portal Development Company</h2>

          <p>
            A small percentage of businesses design their own travel portals
            using in-house teams, while the majority outsource the work to
            reputable travel portal development firms. In India, the United Arab
            Emirates, Africa, the United States, and the Far East, demand for
            B2B and B2C travel portal software is soaring. Should you be seeking
            business-to-business travel technology solutions.
          </p>
          <br />
          <p>
            Searching for innovative and cost-effective travel portal solutions,
            travel firms worldwide are getting ready to sell travel-related
            material worldwide. As a result, and as many travel agencies are
            aware, creating a travel portal has become more and more popular.
            Travel agencies are going online by implementing the OTA concept. A
            few of companies employ internal teams to create their own travel
            portals, while the bulk contract out the task to reliable travel
            portal development companies. Demand for B2B and B2C travel portal
            software is rising in the Far East, Africa, the United States,
            India, and the United Arab Emirates. Do you need to look at
            business-to-business travel technology?
          </p>
          <br />
          <p>
            Our main objective is to build an advanced travel booking solution
            that will provide value to our customers' businesses. We use our
            online service's connected API to provide our clients with this. We
            make every effort to offer a solution that is both economical and
            appropriate for your company. Travel brands benefit from Etraviax's
            travel booking software. It facilitates the development of consumer
            and commercial websites. It links many software platforms
            together.This is how reservations for travel are managed. Our app
            facilitates the management of travel agencies, operators, and
            companies. Developing a travel portal entails building a website for
            making reservations and overseeing itinerary changes. For this, the
            airline reservation system is essential. Developing a website for
            booking and managing travel arrangements is known as travel portal
            development.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-3">What You Get</h2>
        <div className="row">
          <div className={`${styles.secabt} col-sm`}>
            <h4>White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>B2B White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>B2C White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.secabt} col-sm`}>
            <h4>B2E White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>B2B & B2C White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>B2B2C White Label Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.secabt} col-sm`}>
            <h4>Custom Travel Portal</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>Travel Software</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
          <div className={`${styles.secabt} col-sm`}>
            <h4>Travel Portal Designing</h4>
            <p>
              cdscccgdgigvgdvgv ivfgdeuivgfguvgv fefeb feufeuf fheuifuiehefh
              feifhiehfieh feihfiehfi fefhh feugfue feugfuegf feugfuefb.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.midsec_1} d-flex mt-5 mx-auto`}>
        <div className="ms-5 me-5">
          <h2 className="mb-2">Benefits of Travel Portal Development</h2>
          <p className="mb-3">
            Founded by a team of passionate travel enthusiasts and seasoned
            technology experts, We built on a foundation of innovation,
            excellence, and a customer-centric approach. We understand that in
            today's fast-paced world, the travel industry requires more than
            just traditional solutions.
          </p>
          <ul style={{padding:'0'}}>
            <div className="d-flex">
              <div className={styles.benesec_1}>
                <p>
                  <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck> Searching and Booking
                  Functionality
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>100% Real-time Data
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Full Automation
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Booking Confirmations
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Inventory Management
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Reporting and Analytics
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Cross-Selling
                  Opportunities
                </p>
              </div>
              <div className={`${styles.benesec_1} ms-4`}>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Dynamic Pricing
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Lower Transaction Costs
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Inventory Management
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Reporting and Analytics
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Cross-Selling
                  Opportunities
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Dynamic Pricing
                </p>
                <p>
                <FaCheck style={{marginRight:'5px', color:'#00851d'}}></FaCheck>Lower Transaction Costs
                </p>
              </div>
            </div>
          </ul>
          <button className={styles.btncallbk}>
            <a href="tel:+917548090001">REQUEST A CALLBACK</a>
          </button>
        </div>
        <div className="col-lg-6">
          <img src={image3} style={{marginLeft:'50px'}} alt="" width="540px" />
        </div>
      </div>

      <div className={`d-flex ${styles.midsec_2}`}>
        <div className="col-lg-6 text-center">
          <img src={image4} alt="" height="470px" />
        </div>
        <div className="col-lg-6">
          <h2>Booking Engines</h2>
          <p>
            A booking engine is a piece of software that helps companies handle
            and streamline their online reservation process. It is the
            foundation for flawless booking experiences and is mostly utilized
            by hotels, airlines, car rental companies, and tour operators.
            Customers can use the engine's simplified interface to look up
            availability, pick dates, select services, and make payments.
            Real-time updates on pricing and availability are made possible by
            the booking engine, which is integrated with a company's website or
            mobile app.
          </p>
          <br />
          <p>
            A booking engine helps organizations by decreasing human labor and
            error risk in addition to enhancing the client experience. Features
            like inventory control, dynamic pricing, Customer Relationship
            Management (CRM), and payment gateway connection are frequently
            included.
          </p>

          <button className={styles.btncallbk}>
            <a href="https://www.google.com">CHECKOUT OUR SYSTEM</a>
          </button>
        </div>
      </div>
      </>
  )
}

export default Enginespage2