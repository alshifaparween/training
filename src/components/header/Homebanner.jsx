import React from 'react';
import bannerimg from '../../assets/bg.jpg';
import styles from './Homebanner.module.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import badges from '../../assets/bdges1.png';
import { FaRegCalendar } from 'react-icons/fa';



export default function Homebanner() {
    return (
        <div className="banner" style={{ backgroundImage: `url(${bannerimg})`, height: '788px', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.banner_txt} col-7`}>
                        <h1>E-commerce Website Development That Matches Your Needs</h1>
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
    )
}
