import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Extras = ({ values, handleChange, nextStep, prevStep, submitted }) => {
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const formSubmit = (e) => {
    e.preventDefault();
    submitted();
    nextStep();
    const data = values;
    axios
      .post('http://localhost:5000/create-pdf', data)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'Resume.pdf');
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  return (
    <div className='card animated fadeIn'>
      <div className='card-body'>
        <h3 className='card-title'>Miscellaneous</h3>
        <hr />
      </div>
      <form onSubmit={formSubmit}>
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-6 md-form'>
            <input
              type='text'
              name='extras1'
              placeholder='Languages*'
              className='form-control p-2'
              defaultValue={values.extras1}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-6 md-form'>
            <input
              type='text'
              name='extras2'
              placeholder='Hobbies*'
              className='form-control p-2'
              defaultValue={values.extras2}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-6 md-form'>
            <input
              type='text'
              name='extras3'
              placeholder='Activity/Achievement*'
              className='form-control p-2'
              defaultValue={values.extras3}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-lg-6 md-form'>
            <input
              type='text'
              name='extras4'
              placeholder='Activity/Achievement*'
              className='form-control p-2'
              defaultValue={values.extras4}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className='row col-lg-10 mx-auto'>
          <div className='col-lg-12 md-form'>
            <input
              type='text'
              name='extras5'
              className='form-control p-2'
              placeholder='Activity/Achievement*'
              defaultValue={values.extras5}
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
            Download PDF <i className='fas fa-download ml-1'></i>
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Extras;
