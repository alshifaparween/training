// import React, { useEffect } from "react";
// import styles from "./LandingPage.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { globalModal } from "../pages/Redux/actions/globalModal";
// import { Link } from "react-router-dom";
// import { getAllresourceAction } from  "./Redux/actions/landingPage/getAllresourceAction"  

// import { BServer } from "./backend";

// const CarivaTechnologiesMethod = () => {
//   const dispatch = useDispatch();
//   const profiles = useSelector((state) => state?.getAllresourceReducer)
//   useEffect(() => {
//     dispatch(getAllresourceAction())
//   }, [])
//   return (
//     <React.Fragment>
//       <div className={styles.Resources}>
//         <h1>Our Top 1% Resources</h1>
//         <div
//           className={`${styles.LandingPageTopDevelopers}  mx-auto col-12`}
//         >

//           {/* below is the dynamic card */}

//           {profiles.loading ?
//             <h5>Loading</h5>
//             :

//             profiles?.documents?.length > 0 && profiles?.documents?.map((profile, index) => {
//               if (index <= 11) {

//                 return (
//                   <div className={`${styles.DeveloperCardLandingPage} col-2`} key={profile._id}>
//                     <div className={styles.cards}>
//                       <div className={styles.cardsUpper}>
//                         <img
                          

//                           src={`${BServer}/uploads/${profile?.personalInformation?.profilePicture}`}
//                           rounded
//                           width={40}
//                           height={10}
//                           style={{ borderRadius: "100px", marginRight: "10px" }}
//                           className={styles.imgcarss}
//                           alt=""
//                         />
//                         <div className={`${styles.card_details} d-flex`}>
//                           <div className={"styles.dev_details"}>
//                             <h5>
//                               {profile?.personalInformation?.fullName}
//                               <br></br>
//                               <span className={styles.des_clss}>
//                                 {profile?.professionalExperience?.professionalExperience_currentDesignation}
//                               </span>
//                             </h5>
//                             <p
//                               style={{
//                                 fontSize: "11px",
//                                 fontWeight: "300",
//                                 padding: "0",
//                               }}
//                             >
//                               Experience:{" "}
//                               <strong style={{ color: "#000", fontWeight: "500", fontSize: "11px" }}>
//                                 {profile?.professionalExperience?.professionalExperience_totalExperienceInYear} years
//                               </strong>
//                             </p>

//                           </div>

//                         </div>
//                       </div>

//                       <div className={styles.hire_details}>
//                         <div className={styles.dev_exp2}>
//                           <p>

//                             Expert in
//                           </p>
//                           <div className={styles.experience}>
//                             {profile?.professionalExperience?.professionalExperience_skills.length > 0 &&
//                               profile?.professionalExperience?.professionalExperience_skills?.map((skill, index) => {
//                                 if (index <= 2) {
//                                   return (

//                                     <span className={styles.techs}>{skill?.name}</span>
//                                   )
//                                 }
//                               })
//                             }

                           
//                           </div>
//                         </div>

//                       </div>
//                     </div>
//                   </div>

//                 )
//               }
//             })
//           }






//           {/*static card -> comment the below cards  */}






//           {/* <div className={`${styles.DeveloperCardLandingPage} col-2`}>
//             <div className={styles.cards}>
//               <div className={styles.cardsUpper}>
//                 <img
//                   src="https://wallpapers.com/images/hd/pretty-profile-pictures-i1rumnm6oi0lry1s.jpg"
//                   rounded
//                   width={40}
//                   height={10}
//                   style={{ borderRadius: "100px", marginRight: "10px" }}
//                   className={styles.imgcarss}
//                   alt=""
//                 />

//                 <div className={`${styles.card_details} d-flex`}>
//                   <div className={"styles.dev_details"}>
//                     <h5>
//                       Rohit Birla<br></br>
//                       <span className={styles.des_clss}>DevOps Engineer</span>
//                     </h5>
//                     <p
//                       style={{
//                         fontSize: "13px",
//                         fontWeight: "300",
//                         padding: "0",
//                       }}
//                     >
//                       Experience:{" "}
//                       <strong style={{ color: "#000", fontWeight: "500" }}>
//                         6 years
//                       </strong>
//                     </p>
                   
//                   </div>
                 
//                 </div>
//               </div>
             
//               <div className={styles.hire_details}>
//                 <div className={styles.dev_exp2}>
//                   <p>
                    
//                     Expert in
//                   </p>
//                   <div className={styles.experience}>
//                     <span className={styles.techs}>Java</span>
//                     <span className={styles.techs}>Python</span>
//                     <span className={styles.techs}>Ruby</span>
//                   </div>
//                 </div>
                
//               </div>
//             </div>
//           </div> */}


//         </div>

//         <div className="hire_btn2 text-center mt-3">
//           <Link className={styles.hire_btn2} to="/bench">
//             See More Talents
//           </Link>
//           {/* <button>See More Talents</button> */}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default CarivaTechnologiesMethod;
