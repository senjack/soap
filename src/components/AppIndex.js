import React from "react";
import { Link } from "react-router-dom";

const AppIndex=()=>{
  return (
    <div className="widest highest" style={{overflow:"hidden"}}>
      <div className="translucent-cover widest highest">
      <div className= "container-fluid" style={{overflow:"hidden",paddingTop:"50px"}}>
      <div className= "row">
        <div className= "col-xl-3 col-lg-3 col-md-12 col-sm-12"></div>
        <div className= "col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className= "col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
            <div className= "col-xl-10 col-lg-10 col-md-10 col-sm-12">
              <div className="index-options-panel" style={{backgroundColor:"#fff",opacity:1,padding:"5px"}}>
                <div style={{border:"1px solid #542a52"}}>
                  <div className ="index-options-panel-header soap-app-h4">
                    Welcome to Refactory SOAP!
                  </div>
                  <div className ="index-options-panel-body">

                    <div className="index-opttion-wrapper">
                      <div >
                        <b>Is this your first time to apply for a Program at Refactory?</b>
                        <p>First signup or create an account</p>
                        <p>
                          <Link to="/applicant/signup/" >
                            <button id="index-button1" className="btn btn-primary index-button" ><b>Signup</b></button>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <hr/>

                    <div className="index-opttion-wrapper">
                      <div >
                        <b>Do you have an account on this Application portal?</b>
                        <p>Login to your account and fill / complete the Application form.</p>
                        <p>
                          <Link to="/applicant/login/" >
                            <button id="index-button2" className="btn btn-primary index-button" ><b>Login</b></button>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <hr/>

                    <div className="index-opttion-wrapper">
                      <div >
                        <b>You don’t know what to do ?</b>
                        <p>First read our documentation on <b>How to apply</b>.</p>
                        <p>
                          <Link to="/applicant/guide/" >
                             <button id="index-button3" className="btn btn-primary index-button" ><b>How to Apply</b></button>
                          </Link>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className= "col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
          </div>
        </div>
        <div className= "col-xl-3 col-lg-3 col-md-12 col-sm-12"></div>
      </div>
      </div>        
      </div>

      {/* Images start */}
      <div className= "container-fluid"  style={{overflow:"hidden"}}>
        <div className= "row">
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img1"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img2"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img3"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img4"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img5"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img6"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img7"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img8"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img9"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img10"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img11"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img12"></div>
        </div>
        <div className= "row">
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img13"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img14"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img15"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img16"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img17"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img18"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img19"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img20"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img21"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img22"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img23"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img24"></div>
        </div>
        <div className= "row">
        <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img25"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img26"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img27"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img28"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img29"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img30"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img31"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img32"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img33"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img34"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img35"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img36"></div>
        </div>
        <div className= "row">
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img5"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img6"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img7"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img8"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img17"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img18"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img19"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img20"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img29"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img30"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-1 img31"></div>
          <div className= "col-xl-1 col-lg-1 col-md-2 col-sm-4 img-area-2 img32"></div>
        </div>
      </div>
    </div>
  );
}

export default AppIndex;