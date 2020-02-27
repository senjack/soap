import React from "react";
import { connect } from 'react-redux';
import SaveButton from "../../../AppButtons/ApplicationFormButtons/SaveButton";
import NextButton from "../../../AppButtons/ApplicationFormButtons/NextButton";
import TwoRightButtonsSection from "../../../AppSections/AppBodySections/ButtonSections/TwoRightButtonsSection";
import CatalystApplicationFormHeader from "../../../AppSections/AppHeaders/ApplicationFormHeaders/CatalystApplicationFormHeader"
import AppTextInput from "../../../AppInputs/AppTextInput";
import AppSelectInput from "../../../AppInputs/AppSelectInput";
import AppTwoRadioInputsGroup1 from "../../../AppInputs/AppTwoRadioInputsGroup1";
import AppImageInputGroup1 from "../../../AppInputs/AppImageInputGroup1";
import AppDatePicker from "../../../AppInputs/AppDatePicker";

class PersonalDetailsForm extends React.Component {
    state = { title: undefined };


    handleMoveToNext = (event) =>{
        console.log(event.target);
    }    

    nextButton = () =>{
        return(
        <div>
            <NextButton action={e=>{e.preventDefault();this.handleMoveToNext(e);alert("Moving to next........")}}/>
        </div>
        );
    }

    handleSubmit = (event) =>{
        console.log(event.target);
    }    

    render() {
        return (
            <div className="App2">
                <form method="POST" onSubmit={e=>{e.preventDefault();this.handleSubmit(e);alert("Saving........")}} className="personalDetails" name="personalDetails">
                    <CatalystApplicationFormHeader badgeNumber="1" heading="Personal Details"/>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                            <AppTextInput name="applicantSurname" id="applicant-surname" errorId="applicant-surname-error" labelCaption="Surname" placeHolder="Enter your Surname here" isRequired/>
                            <AppTextInput name="applicantGivenName" id="applicant-givenname"  errorId="applicant-givenname-error" labelCaption="Given name" placeHolder="Enter your Given name here" isRequired style={{marginTop:"15px"}}/>
                            <AppSelectInput id="applicant-title" errorId="applicant-title-error" name="applicantTitle" labelCaption="Title" style={{marginTop:"15px"}}>
                                <option value="">........Select Title........</option>
                                <option value="mr">Mr.</option>
                                <option value="mrs">Mrs.</option>
                                <option value="miss">Miss</option>
                                <option value="sir">Sir</option>
                                <option value="dr">Dr.</option>
                                <option value="prof">Prof.</option>
                            </AppSelectInput>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <AppImageInputGroup1 id="profilePhoto" caption="Profile Photo" src={"/static/senjack.png"} errorId="profile-photo-error" />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"5px"}}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <AppTwoRadioInputsGroup1 caption="Gender" caption1="Male" caption2="Female" id1="male" id2="female" errorId="applicant-gender-error" name="gender" isRequired/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <AppDatePicker id="applicant-dob" name="applicantDOB" caption="Date of Birth" errorId="applicant-dob-error" isRequired />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <AppSelectInput id="applicant-country" errorId="applicant-country-error" name="applicantCountry" labelCaption="Country" isRequired>
                                <option value="">........Select Country........</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Kenya">Kenya</option>
                            </AppSelectInput>

                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                            <AppTextInput name="applicantPOR" id="applicant-por" errorId="applicant-por-error" labelCaption="Place Of Residence" placeHolder="Enter your Current place of residence" isRequired/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                        <AppTextInput name="applicantNationality" id="applicant-nationality" errorId="applicant-nationality-error" labelCaption="Nationality" placeHolder="Enter your Nationality" isRequired/>
                        </div>
                    </div>
                    <div className="horizontalLine">
                        <hr />
                    </div>
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
