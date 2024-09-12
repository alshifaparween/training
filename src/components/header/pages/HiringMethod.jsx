import React from 'react'
import styles from "./LandingPage.module.css"


const HiringMethod = () => {
  return (
    <React.Fragment>
      <div className={` p-5 ${styles.process}`}>
        <div className="d-flex mb-3">
          <h5>Talnfinium Method</h5>
          <div style={{ width: '500px', height: '1px', backgroundColor: 'rgb(205 205 205)', margin: '15px 0px 0px 6px' }}></div>
        </div>
        <div className={`${styles.carivaprocess} d-flex mx-auto justify-content-center`}>
          <div className={` ${styles.methods}`}>
            <div className={styles.day1}>Day 1</div>
            <div className={styles.methodsday}>
              <h6 style={{ whiteSpace: 'nowrap' }}>Share Your Requirements</h6>
              <p>Our expert will connect with you to know your requirements and deliver the best matches for you.</p>
            </div>
          </div>
          <div className={` ${styles.methods}`}>
            <div className={styles.day1}>Day 1</div>
            <div className={styles.methodsday}>
              <h6>Create a Job Listing</h6>
              <p>After the taking job requirements, you need to write a job description, responsibilities, and benefits.</p>
            </div>
          </div>
          <div className={` ${styles.methods}`}>
            <div className={styles.day1}>Day 2</div>
            <div className={styles.methodsday}>
              <h6>Developer Onboarding</h6>
              <p>We will manage all the legal documentation and contracts terms with the developer.</p>
            </div>
          </div>
          <div className={` ${styles.methods}`}>
            <div className={styles.day1}>Day 3</div>
            <div className={styles.methodsday}>
              <h6>Offer Negotiation</h6>
              <p>Negotiate salaries and benefits, provide training to the new hire, and set expectations for their role.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HiringMethod
