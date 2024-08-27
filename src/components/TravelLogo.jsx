import "./travellogo.css"
import ecomimg1 from '../add-cart-buy-now-online-commerce-graphic-concept.jpg'

function TravelLogo(){
    return(
        <>



<div className="container-fluid ">
    <div className="row d-flex justify-content-between">
        
        

       

        <div className="col-md-3 pt-5 pb-3 mt-5">
            <div className="mt-5 ">
                <img src={ecomimg1} alt="" width={480  } style={{marginLeft:"27%"}} />
            </div>
        </div>

        <div className="col-md-6 pt-3 pb-3 mt-5 align-left">
        <div className="mt-5 " style={{marginRight:"10%"}}>
       
       
<h1>Who We Are</h1>
<p> we are your strategic partners in digital growth. Our team consists of experienced 
    designers, developers, and digital marketers who collaborate closely with you to understand 
    your business goals and challenges. By leveraging the latest technologies and industry best
     practices, we build e-commerce portals that offer seamless shopping experiences for your 
     customers. From intuitive user interfaces and mobile-friendly designs to efficient backend 
     systems and secure payment integrations, we ensure that every aspect of your online store 
     is optimized for success. We also prioritize security and scalability,
     ensuring that your e-commerce platform can grow and adapt to changing market demands.
    </p>   
 </div>
        </div>
    </div>
</div>










        </>
    )
}
export default TravelLogo;