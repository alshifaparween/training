import React from "react";
import "./pagelayout.css"
// import 'font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import ecomimg2 from  "../close-up-hand-holding-card.jpg"

function Pagelayout(){
    return(
        <>
   <div className="d-flex mt-5 mx-auto midsec-1">
      <div className="ms-5 me-5">
        <h2 className="mb-2">Features Of E-Commerce Portal Developmentc Company</h2>
        <p className="mb-3">
        An e-commerce development company provides a wide range of features designed
         to help businesses establish and grow their online presence. These features
          typically span across different aspects of e-commerce, from website design 
          to backend development, security, and ongoing support.
         Below are the key features that such companies usually offer:
        </p>
        <ul>
          <div className="d-flex ms-0 ">
            <div className="benesec-1 text-left">
              <p>
                <i className="fa-solid fa-check"></i>Sustain High Volume Orders

              </p>
              <p><i className="fa-solid fa-check"></i> Price Negotiations for Bulk
              <p >Orders</p> 
              </p>
              <p><i className="fa-solid fa-check"></i> Multiple Payment Options
              </p>
              <p><i className="fa-solid fa-check"></i> Search-Based Catalog Personalization
              </p>
              <p><i className="fa-solid fa-check"></i> Detailed Analytics</p>
              
              
            </div>
            <div className="benesec-1 ms-5">
            <p><i className="fa-solid fa-check"></i> Responsive Web Design
            </p>
            <p><i className="fa-solid fa-check"></i> Reduced Operational Costs
            </p>
              <p><i className="fa-solid fa-check"></i> Search Engine Friendly
              </p>
              <p><i className="fa-solid fa-check"></i> eCommerce Digitalization Consulting
              </p>
              <p><i className="fa-solid fa-check"></i> eCommerce Store Customization
              </p>
            </div>
          </div>
        </ul>
        <button className="btncallbk">
          REQUEST A CALLBACK
        </button>
      </div>
      <div className="col-lg-6  mt-1 ms-5" 
      // style={{ margin: '50px' ,}}
      >
      <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" />
      </div>
    </div>
 













        </>
    )
}

export default  Pagelayout;