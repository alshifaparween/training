import React from "react";
import "./pagelayout.css"
// import 'font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import ecomimg2 from  "../close-up-hand-holding-card.jpg"


function Pagelayout(){
  return(
      <>
 <div className="d-flex mt-5 max-auto midsec-1 pb-4">
    <div className=" mt-4 ms-5 ">
      <h2 className="mb-2 mt-5"> Benefits of Real Estate Portal Development</h2>
      <p className="mb-3">
      Benefit refers to the advantageous outcomes or positive effects derived from a
       particular action, service, or feature. In the context of real estate portal development
       , benefits encompass the various ways in which such platforms enhance the efficiency, accessibility,
       and effectiveness of property transactions for users and real estate professionals

       Below are the benefits that such companies usually offer:
      </p>
      <ul  className="uli " style={{paddingLeft:'0px'}}>
        <div className="d-flex ms-0  ">
          <div className="benesec-1 text-left " style={{ marginRight: "20%"}}>
            <p>
              <i className="fa-solid fa-check"></i>Customized Real-Estate Site Development & Designing


            </p>
            <p><i className="fa-solid fa-check"></i> Easy To Manage & Organize Properties

             
            </p>
            <p><i className="fa-solid fa-check"></i> Search Quickly for Recent Property Deals

            </p>
            <p><i className="fa-solid fa-check"></i> Integration of Property Map Locator

            </p>
            <p><i className="fa-solid fa-check"></i> Admin Control to Display Recent Properties</p>
            
            <p><i className="fa-solid fa-check"></i> Easy to Display Property Details

          </p>
          <p><i className="fa-solid fa-check"></i>  Creation of Quick Broacher

          </p>
            <p><i className="fa-solid fa-check"></i>  Register & Login Features for Agents

            </p>
            <p><i className="fa-solid fa-check"></i>  Details Agent Report & Secure Interface

            </p>
            <p><i className="fa-solid fa-check"></i>  Social media integration for event updates
</p>

          </div>
          <div className="benesec-1 ms-0  me-4 " style={{marginRight:'30%'}}>
          <p><i className="fa-solid fa-check"></i> Enhanced user experience
</p>

          
            <p><i className="fa-solid fa-check"></i>  Features of Property Buying & Selling Online

            </p>
            <p>

            </p><i className="fa-solid fa-check"></i>  Complete Billing & Payment Module
<p>
</p>
<p><i className="fa-solid fa-check"></i> Ticket Management & Customer Care

</p>
<p>
<i className="fa-solid fa-check"></i>Social Media Integration
</p>
<p><i className="fa-solid fa-check"></i> Complete CRM Solution
</p>
<p><i className="fa-solid fa-check">
</i> Integrate Content Management System (CMS)
</p>
<p><i className="fa-solid fa-check"></i>  Smooth property listing process
</p>
<p><i className="fa-solid fa-check"></i>  Advanced search for available options
</p>

          </div>
        </div>
      </ul>
      <button className="btncallbk">
        REQUEST A CALLBACK
      </button>
    </div>
    <div className="col-lg-6  mt-0 ms-0" 
    // style={{ margin: '50px' ,}}
    >
       <div className="ms-0 ">
    <img src="https://img.freepik.com/free-photo/woman-holding-set-keys-with-wooden-house_23-2148252134.jpg?ga=GA1.1.1616992279.1724652783&semt=ais_hybrid" />
    </div>
    </div>
  </div>














      </>
  )
}

export default  Pagelayout;