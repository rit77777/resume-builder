import React, { useState } from 'react';

import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Extras from './Extras';
import Success from './Success';

const ResumeForm = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(0);
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    skills: '',
    college: '',
    collegeQualification: '',
    collegeYear: '',
    collegeDescription: '',
    school: '',
    schoolQualification: '',
    schoolYear: '',
    schoolDescription: '',
    experienceOrganization1: '',
    experiencePosition1: '',
    experienceDescription1: '',
    experienceDuration1: '',
    experienceOrganization2: '',
    experiencePosition2: '',
    experienceDescription2: '',
    experienceDuration2: '',
    projectTitle1: '',
    projectLink1: '',
    projectDescription1: '',
    projectTitle2: '',
    projectLink2: '',
    projectDescription2: '',
    extras1: '',
    extras2: '',
    extras3: '',
    extras4: '',
    extras5: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitted = () => {
    setStatus(status + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  switch (step) {
    case 1:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <PersonalDetails
              values={values}
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );

    case 2:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <Education
              values={values}
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );

    case 3:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <Experience
              values={values}
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );

    case 4:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <Project
              values={values}
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );

    case 5:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <Extras
              values={values}
              prevStep={prevStep}
              nextStep={nextStep}
              submitted={submitted}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );

    case 6:
      return (
        <div className='pt-4 mt-5'>
          <div className='container col-lg-8 mx-auto text-center'>
            <Success />
          </div>
          <br />
        </div>
      );

    default:
      return <div>Error</div>;
  }
};

export default ResumeForm;
/*

PersonalDetails: name, email, phone, github, linkedin.

Education: 1) college, collegeQualification, collegeStartDate, collegeEndDate
           2) school, schoolQualification, schoolStartDate, schoolEndDate

Experience: 1) experienceOrganization1, experiencePosition1, experienceDescription1, experienceDuration1
            2) experienceOrganization2, experiencePosition2, experienceDescription2, experienceDuration2
            3) experienceOrganization3, experiencePosition3, experienceDescription3, experienceDuration3

Project: 1) projectTitle1, projectLink1, projectDescription1
         2) projectTitle2, projectLink2, projectDescription2
         3) projectTitle3, projectLink3, projectDescription3

Skills: skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8

*/
