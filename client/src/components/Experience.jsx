import React from 'react';

const Experience = ({ values, handleChange, nextStep, prevStep }) => {
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
        <h3 className='card-title'>Experience</h3>
        <hr />
      </div>
      <form onSubmit={next}>
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='experienceOrganization1'
              placeholder='Organisation*'
              className='form-control p-2'
              defaultValue={values.experienceOrganization1}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='experiencePosition1'
              placeholder='Position*'
              className='form-control p-2'
              defaultValue={values.experiencePosition1}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='experienceDuration1'
              placeholder='Duration*'
              className='form-control p-2'
              defaultValue={values.experienceDuration1}
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
              name='experienceDescription1'
              placeholder='Description*'
              className='form-control p-2'
              defaultValue={values.experienceDescription1}
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
              name='experienceOrganization2'
              placeholder='Organisation*'
              className='form-control p-2'
              defaultValue={values.experienceOrganization2}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='experiencePosition2'
              placeholder='Position*'
              className='form-control p-2'
              defaultValue={values.experiencePosition2}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-4 text-left'>
            <input
              type='text'
              name='experienceDuration2'
              placeholder='Duration*'
              className='form-control p-2'
              defaultValue={values.experienceDuration2}
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
              name='experienceDescription2'
              placeholder='Description*'
              className='form-control p-2'
              defaultValue={values.experienceDescription2}
              onChange={handleChange}
              required
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

export default Experience;
