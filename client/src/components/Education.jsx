import React, { Component } from 'react';

export default class Education extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='card animated fadeIn'>
        <div className='card-body'>
          <h3 className='card-title'>Education Info</h3>
          <hr />
        </div>
        <form onSubmit={this.continue}>
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-4 text-left'>
              <input
                type='text'
                name='college'
                placeholder='College/University*'
                className='form-control p-2'
                defaultValue={values.status === 1 ? '' : values.college}
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
                defaultValue={values.status === 1 ? '' : values.collegeYear}
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
                defaultValue={
                  values.status === 1 ? '' : values.collegeQualification
                }
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
                defaultValue={
                  values.status === 1 ? '' : values.collegeDescription
                }
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
                defaultValue={values.status === 1 ? '' : values.school}
                onChange={handleChange}
              />
            </div>
            <div className='col-lg-4 text-left'>
              <input
                type='text'
                name='schoolYear'
                placeholder='Year'
                className='form-control p-2'
                defaultValue={values.status === 1 ? '' : values.schoolYear}
                onChange={handleChange}
              />
            </div>
            <div className='col-lg-4 text-left'>
              <input
                type='text'
                name='schoolQualification'
                placeholder='Qualification'
                className='form-control p-2'
                defaultValue={
                  values.status === 1 ? '' : values.schoolQualification
                }
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
                defaultValue={
                  values.status === 1 ? '' : values.schoolDescription
                }
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className='container text-center'>
            <button
              type='button'
              className='btn btn-light m-2 mt-0 mb-0'
              onClick={this.back}
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
  }
}
