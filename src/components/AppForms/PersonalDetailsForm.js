import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../appStyles/App.css";
import { connect } from 'react-redux';
import BadgeAlignment from '../AppBadges/BadgeAlignment';

class PersonalDetailsForm extends React.Component {
    state = { title: undefined };

    render() {
        return (
            <div className="App2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12  col-lg-3 col-xl-3"></div>
                        <div className="col-sm-12 col-md-12  col-lg-6 col-xl-8">
                            <div className="row">
                                <div className="col-sm-12 col-md-12  col-lg-12 col-xl-1"></div>
                                <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                    <div>
                                        <div className="vertical-spacing1"></div>

                                        <form className="personalDetails" name="personalDetails">

                                            <div className="personalDetails-form-wrapper">
                                                <div className="personalDetails-form-Header">
                                                    <h3>
                                                        <span><BadgeAlignment badgeContent="1"/></span><strong>Personal Details</strong>
                                                    </h3>
                                                </div>
                                                <div className="general-error">
                                                    Failed : All fields are required!
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-sm-8 col-md-8  col-lg-8 col-xl-8">
                                                    <div className="form-group">
                                                        <label htmlFor="personalDetailsFormSname">
                                                            <h5><strong>Sur name<span className="mySpan">*</span></strong></h5>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="personalDetails-form-input1"
                                                            id="personalDetailsFormSname"
                                                            name="personalDetailsFormSname"
                                                            aria-describedby="surnameHelp"
                                                            placeholder="Enter your Sur Name here"
                                                        />
                                                        <div className="surName-error">
                                                            This field is required!
                                                                    </div>
                                                    </div>


                                                    <div className="form-group">
                                                        <label htmlFor="personalDetailsFormGname">
                                                            <h5><strong>Given name<span className="mySpan">*</span></strong></h5>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="personalDetails-form-input1"
                                                            id="personalDetailsFormGname"
                                                            name="personalDetailsFormGname"
                                                            aria-describedby="givenNameHelp"
                                                            placeholder="Enter your Given Name here"
                                                        />
                                                        <div className="givenName-error">
                                                            This field is required!
                                                                    </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="title">
                                                            <h5><strong>Title</strong></h5>
                                                        </label>
                                                        <select id="title" name="title" className="personalDetails-form-select1">
                                                            <option value="0">........Select Title........</option>
                                                            <option value="mr">MR</option>
                                                            <option value="mrs">MRS</option>
                                                            <option value="mrs">MISS</option>
                                                            <option value="mrs">MS</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-md-4  col-lg-4 col-xl-4">

                                                    <div className="form-group">

                                                        <input
                                                            type="textarea"
                                                            className="personalDetails-form-textarea"
                                                            id="personalDetailsTextarea"
                                                            name="personalDetailsTextarea"
                                                            aria-describedby="textareaHelp"
                                                        />
                                                        <div className="photo-error">
                                                            You must upload your photo!
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="personalDetails-form-image"
                                                            id="personalDetailsTxtarea"
                                                            name="personalDetailsTxtarea"
                                                            value="Upload Photo"
                                                            aria-describedby="imageHelp"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="vertical-spacing1"></div>

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form-group-gender">
                                                                    <h5><strong>Gender<span className="mySpan">*</span></strong></h5>
                                                                </label>
                                                                <div className="personalDetails-form-gender">
                                                                    <input type="radio" id="male" name="gender" checked />Male &nbsp; &nbsp; &nbsp;
                                                                    <input type="radio" id="female" name="gender" />Female
                                                                    </div>
                                                                <div className="gender-error">
                                                                    You must select your gender first!
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="vertical-spacing1"></div>

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">

                                                            <div className="form-group">
                                                                <label htmlFor="personalDetailsDoB">
                                                                    <h5><strong>Date of Birth<span className="mySpan">*</span></strong></h5>
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

                                                        <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">

                                                            <div className="form-group">
                                                                <label htmlFor="country">
                                                                    <h5><strong>Country<span className="mySpan">*</span></strong></h5>
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
                                                </div>


                                                <div className="vertical-spacing1"></div>

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">

                                                            <div className="form-group">
                                                                <label htmlFor="personalDetailsFormInput3">
                                                                    <h5><strong>Place of Residence<span className="mySpan">*</span></strong></h5>
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
                                                </div>


                                                <div className="vertical-spacing1"></div>

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">

                                                            <div className="form-group">
                                                                <label htmlFor="personalDetailsNationality">
                                                                    <h5><strong>Nationality<span className="mySpan">*</span></strong></h5>
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
                                                </div>
                                                {/* <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                                        <hr />
                                                    </div>
                                                </div>
                                                </div> */}

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-md-7  col-lg-7 col-xl-7"></div>
                                                        <div className="col-sm-5 col-md-5  col-lg-5 col-xl-5">
                                                            <div className="row">
                                                                <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">

                                                                    <div className="form-group">
                                                                        <button
                                                                            type="button"
                                                                            className="personalDetails-form-save"
                                                                            id="personalDetailsBtnSave"
                                                                            name="personalDetailsBtnSave"
                                                                            value="Save"
                                                                            aria-describedby="saveHelp"
                                                                        ><strong>Save</strong></button>

                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">

                                                                    <div className="form-group">
                                                                        <button
                                                                            type="button"
                                                                            className="personalDetails-form-next"
                                                                            id="personalDetailsBtnNext"
                                                                            name="personalDetailsBtnNext"
                                                                            value="Next"
                                                                            aria-describedby="nextHelp"
                                                                        ><strong>Next</strong></button>
                                                                        {/* <ArrowRight/> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-md-col-sm-12 col-md-12  col-lg-12 col-xl-1"></div>
                            </div>
                        </div>
                        <div id="col3" className="col-sm-12 col-md-12  col-lg-3 col-xl-3"></div>
                    </div >
                </div >
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
