import React, { Component } from 'react';

import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';

export default class ResumeForm extends Component {
  state = {
    step: 1,
    status: 0,
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    skills: '',
    // education
    college: '',
    collegeQualification: '',
    collegeYear: '',
    collegeDescription: '',
    school: '',
    schoolQualification: '',
    schoolYear: '',
    schoolDescription: '',
    // experience (*optional? maybe)
    experienceOrganization1: '',
    experiencePosition1: '',
    experienceDescription1: '',
    experienceDuration1: '',
    experienceOrganization2: '',
    experiencePosition2: '',
    experienceDescription2: '',
    experienceDuration2: '',
    // Projects
    projectTitle1: '',
    projectLink1: '',
    projectDescription1: '',
    projectTitle2: '',
    projectLink2: '',
    projectDescription2: '',
    projectTitle3: '',
    projectLink3: '',
    projectDescription3: '',
    // Extras
    extras1: '',
    extras2: '',
    extras3: '',
    extras4: '',
    extras5: '',
    extras6: '',
    extras7: '',
    extras8: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  submitted = () => {
    const { status } = this.state;
    this.setState({ status: status + 1 });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div className='pt-4 mt-5'>
            <div className='container col-lg-8 mx-auto text-center'>
              <PersonalDetails
                values={this.state}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
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
                values={this.state}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
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
                values={this.state}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
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
                values={this.state}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );

      case 5:
        return <div>Extra activities page</div>;

      case 6:
        return <div>download page</div>;
    }
  }
}

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
