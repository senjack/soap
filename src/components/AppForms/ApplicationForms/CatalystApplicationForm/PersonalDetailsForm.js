import React from "react";
import { connect } from 'react-redux';
import BadgeAlignment from '../../../AppBadges/BadgeAlignment';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FileUploadButton1 from "../../../AppButtons/ApplicationFormButtons/FileUploadButton1";
import SaveButton from "../../../AppButtons/ApplicationFormButtons/SaveButton";
import NextButton from "../../../AppButtons/ApplicationFormButtons/NextButton";
import TwoRightButtonsSection from "../../../AppSections/AppBodySections/ButtonSections/TwoRightButtonsSection";
class PersonalDetailsForm extends React.Component {
    state = { title: undefined };

    nextButton = () =>{
        return(
        <div>
            <NextButton action={e=>{e.preventDefault();alert("Moving to next........")}}/>
        </div>
        );
    }

    render() {
        return (
            <div className="App2">
                <form method="POST" onSubmit={e=>{e.preventDefault();alert("Saving........")}} className="personalDetails" name="personalDetails">
                    <div className="personalDetails-form-wrapper">
                        <div className="personalDetails-form-Header">
                            <h4>
                                <span><BadgeAlignment badgeContent="1"/></span>Personal Details
                            </h4>
                        </div>
                        <div className="general-error">
                            Failed : All fields are required!
                        </div>
                    </div>

                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">

                           <div className="form-group">
                                <label htmlFor="personalDetailsFormSname">
                                    <h5>Surname<span className="mySpan">*</span></h5>
                                </label>
                                <input
                                    type="text"
                                    className="personalDetails-form-input1"
                                    id="personalDetailsFormSname"
                                    name="personalDetailsFormSname"
                                    aria-describedby="surnameHelp"
                                    placeholder="Enter your Surname here"
                                />
                                <div className="surName-error">
                                    This field is required!
                                </div>
                            </div>
                           <div className="form-group" style={{marginTop:"15px"}}>
                                <label htmlFor="personalDetailsFormGname">
                                    <h5>Given name<span className="mySpan">*</span></h5>
                                </label>
                                <input
                                    type="text"
                                    className="personalDetails-form-input1"
                                    id="personalDetailsFormGname"
                                    name="personalDetailsFormGname"
                                    aria-describedby="givenNameHelp"
                                    placeholder="Enter your Given name here"
                                />
                                <div className="givenName-error">
                                    This field is required!
                                </div>
                            </div>
                           <div className="form-group"  style={{marginTop:"15px"}}>
                                <label htmlFor="title">
                                    <h5>Title</h5>
                                </label>
                                <select id="title" name="title" className="personalDetails-form-select1">
                                    <option value="0">........Select Title........</option>
                                    <option value="mr">Mr.</option>
                                    <option value="mrs">Mrs.</option>
                                    <option value="mrs">Miss</option>
                                    <option value="mrs">Sir</option>
                                    <option value="mrs">Dr.</option>
                                    <option value="mrs">Prof.</option>
                                </select>
                           </div> 
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <div style={{width:"100%"}}>
                            <div className="form-group">
                                <center>
                                <label htmlFor="profilePhoto">
                                    <h5>Profile Photo</h5>
                                </label></center>
                                <div style={{textAlign:"center",width:"100%",marginTop:"-8px"}}
                                >
                                    <div style={{textAlign:"center",width:"100%"}}
                                        className="personalDetails-form-textarea"
                                        id="personalDetailsTextarea"
                                    >
                                        <img src={"/static/senjack.png"} 
                                        style={{backgroundColor:"#ddd",border:"1px solid #aaa",height:"155px",width:"150px",marginLeft:"-12px"}}/>
                                    </div>
                                    <div className="photo-error">
                                        Upload your photo!
                                    </div>

                                    <div style={{textAlign:"center",width:"100%"}}
                                    >
                                    <FileUploadButton1 customStyle={{width:"150px",height:"30px",marginLeft:"-12px",marginTop:"6px",padding:"0px",borderRadius:"0px",textTransform:"capitalize"}}/>
                                    </div>

                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"5px"}}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="form-group-gender">
                                    <h5>Gender<span className="mySpan">*</span></h5>
                                </label>
                                <div className="personalDetails-form-gender" style={{height:"auto"}}>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                            <input type="radio" id="male" name="gender" /> Male
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                                            <input type="radio" id="female" name="gender" /> Female
                                        </div>
                                    </div>
                                </div>
                                <div className="gender-error">
                                    You must select your gender first!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                            <div className="form-group">
                                <label htmlFor="personalDetailsDoB">
                                    <h5>Date of Birth<span className="mySpan">*</span></h5>
                                </label>
                                <input
                                    type="date"
                                    className="personalDetails-form-input2"
                                    id="personalDetailsDoB"
                                    name="personalDetailsDoB"
                                    aria-describedby="DoBHelp"
                                    placeholder="01/01/2019"

                                />
                                <div className="dob-error">
                                    You must select your date of birth first!
                                    </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                            <div className="form-group">
                                <label htmlFor="country">
                                    <h5>Country<span className="mySpan">*</span></h5>
                                </label><br />
                                <select id="country" name="country" className="personalDetails-form-select2">
                                    <option value="0">........Select Country........</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Kenya">Kenya</option>
                                </select>
                                <div className="country-error">
                                    Select your country of residence
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">

                            <div className="form-group">
                                <label htmlFor="personalDetailsFormInput3">
                                    <h5>Place of Residence<span className="mySpan">*</span></h5>
                                </label>
                                <input
                                    type="text"
                                    className="personalDetails-form-input3"
                                    id="personalDetailsFormInput3"
                                    name="personalDetailsFormInput3"
                                    aria-describedby="residenceHelp"
                                    placeholder="Enter your Current place of residence"
                                />
                                <div className="residence-error">
                                    Enter your place of residence
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                            <div className="form-group">
                                <label htmlFor="personalDetailsNationality">
                                    <h5>Nationality<span className="mySpan">*</span></h5>
                                </label>
                                <input
                                    type="text"
                                    className="personalDetails-form-input3"
                                    id="personalDetailsNationality"
                                    name="personalDetailsNationality"
                                    aria-describedby="nationalityHelp"
                                    placeholder="Enter your Nationality"
                                />
                                <div className="nationality-error">
                                    Enter your Nationality
                                </div>

                                <div className="horizontalLine">
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12"></div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{marginBottom:"15px"}}>
                            <div style={{backgroundColor:"#ddd",width:"100%"}}><SaveButton/></div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div style={{backgroundColor:"#ddd",width:"100%"}}>
                                <NextButton action={e=>{e.preventDefault();alert("Moving to next........")}}/>
                            </div>
                        </div>                        
                    </div> */}
                    <TwoRightButtonsSection slot1={<SaveButton/>} slot2={this.nextButton()}></TwoRightButtonsSection>
                </form>
            </div >
        );
    }
}

const mapStateToProps = (appState) => {
    // console.log(appState.AuthOneReducer.user.registration);
    return { appState: appState };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signup,
//     login,
//   }
// }

//   Connect redux with react
export default connect(mapStateToProps)(PersonalDetailsForm);
