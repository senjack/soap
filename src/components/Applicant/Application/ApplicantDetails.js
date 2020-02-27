import React from 'react';
import ResponsiveAppDrawer from '../../AppDrawers/ResponsiveAppDrawer'

//---------------->
import ProfileSection from '../../AppSections/AppDrawerSections/ProfileSection';
import ApplicantMenuButtonsSection from '../../AppSections/AppDrawerSections/ApplicantMenuButtonsSection';
import AppFillupWidthSection from '../../AppSections/AppBodySections/AppFillupWidthSection';
import PersonalDetailsForm from '../../AppForms/ApplicationForms/CatalystApplicationForm/PersonalDetailsForm';
import AppStepper1 from '../../AppNavigatonComponents/AppStepper1';
//---------------->

import {
  Redirect,
} from "react-router-dom";

export default function ApplicantDetails(props) {

  if(false){
    return(<Redirect to="/login" />);
  }
  return (
    <div>
      <ResponsiveAppDrawer profileSlot={<ProfileSection profilePicture={"/static/senjack.png"} userName={"John Doe"} userEmail={"samplemail@domain.tld"} userId = {"APL/20/CH0005A/CT0005A"}/>} menuButtonsSlot={<ApplicantMenuButtonsSection/>}>
        <AppFillupWidthSection slot1={<PersonalDetailsForm/>} slot2={<div><AppStepper1 activeStep={0} /></div>}/>
      </ResponsiveAppDrawer>
    </div>
  );
}