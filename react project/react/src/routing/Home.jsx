import React from "react";
import hero from "./web-design.jpg"


function Home() {
  return (
    <>
      <div className="desing">
        <div className="section">
          <div className="row">
            <div className="col-md-7">
              <h1 className="heading" style={{ color: "white " }}>Better Solutions For Your Business</h1>
              <p className="para" style={{ color: "white " }}>We are team of talented designers making websites with Bootstrap</p>
            </div>
            <div className="pic col-md-5">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>

      </div>





    </>
  )
}

export default Home;