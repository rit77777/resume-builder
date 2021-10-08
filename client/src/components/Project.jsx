import React from 'react';

const Project = ({ values, handleChange, nextStep, prevStep }) => {
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
        <h3 className='card-title'>Projects</h3>
        <hr />
      </div>
      <form onSubmit={next}>
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-6 text-left'>
            <input
              type='text'
              name='projectTitle1'
              placeholder='Title*'
              className='form-control p-2'
              defaultValue={values.projectTitle1}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-6 text-left'>
            <input
              type='text'
              name='projectLink1'
              placeholder='Link'
              className='form-control p-2'
              defaultValue={values.projectLink1}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-12 text-left'>
            <input
              type='text'
              name='projectDescription1'
              placeholder='Description*'
              className='form-control p-2'
              defaultValue={values.projectDescription1}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-6 text-left'>
            <input
              type='text'
              name='projectTitle2'
              placeholder='Title*'
              className='form-control p-2'
              defaultValue={values.projectTitle2}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-6 text-left'>
            <input
              type='text'
              name='projectLink2'
              placeholder='Link'
              className='form-control p-2'
              defaultValue={values.projectLink2}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-12 text-left'>
            <input
              type='text'
              name='projectDescription2'
              placeholder='Description*'
              className='form-control p-2'
              defaultValue={values.projectDescription2}
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

export default Project;
