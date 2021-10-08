import React from 'react';

const Education = ({ values, handleChange, nextStep, prevStep }) => {
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className='card animated fadeIn'>
      <div className='card-body'>
        <h3 className='card-title'>Education</h3>
        <hr />
      </div>
      <form onSubmit={next}>
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='college'
              placeholder='College/University*'
              className='form-control p-2'
              defaultValue={values.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='collegeYear'
              placeholder='Year*'
              className='form-control p-2'
              defaultValue={values.collegeYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='collegeQualification'
              placeholder='Qualification*'
              className='form-control p-2'
              defaultValue={values.collegeQualification}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-12 text-left'>
            <input
              type='text'
              name='collegeDescription'
              placeholder='Description*'
              className='form-control p-2'
              defaultValue={values.collegeDescription}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <br />

        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='school'
              placeholder='School'
              className='form-control p-2'
              defaultValue={values.school}
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='schoolYear'
              placeholder='Year'
              className='form-control p-2'
              defaultValue={values.schoolYear}
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='schoolQualification'
              placeholder='Qualification'
              className='form-control p-2'
              defaultValue={values.schoolQualification}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-12 text-left'>
            <input
              type='text'
              name='schoolDescription'
              placeholder='Description'
              className='form-control p-2'
              defaultValue={values.schoolDescription}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className='container text-center'>
          <button
            type='button'
            className='btn btn-light m-2 mt-0 mb-0'
            onClick={back}
          >
            Back
          </button>
          <button type='submit' className='btn btn-dark m-2 mt-0 mb-0'>
            Next
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Education;
