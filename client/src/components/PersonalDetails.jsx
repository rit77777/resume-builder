import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='card animated fadeIn'>
        <div className='card-body'>
          <h3 className='card-title'>Personal Info</h3>
          <hr />
        </div>
        <form onSubmit={this.continue}>
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-4 text-left'>
              <input
                type='text'
                name='name'
                placeholder='Name*'
                className='form-control p-2'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.name}
                required
              />
            </div>
            <div className='col-lg-4 text-left'>
              <input
                type='email'
                name='email'
                placeholder='Email*'
                className='form-control p-2'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.email}
                required
              />
            </div>
            <div className='col-lg-4 text-left'>
              <input
                type='text'
                name='phone'
                placeholder='Mobile*'
                className='form-control p-2'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.phone}
                required
              />
            </div>
          </div>
          <br />
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-6 text-left'>
              <input
                type='text'
                name='github'
                placeholder='Github'
                className='form-control p-2'
                defaultValue={values.status === 1 ? '' : values.github}
                onChange={handleChange}
              />
            </div>
            <div className='col-lg-6 text-left'>
              <input
                type='text'
                name='linkedin'
                placeholder='Linkedin'
                className='form-control p-2'
                defaultValue={values.status === 1 ? '' : values.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-12 text-left'>
              <input
                type='text'
                name='skills'
                placeholder='Skills* (Separate each skill with a space and a comma)'
                className='form-control p-2'
                defaultValue={values.status === 1 ? '' : values.skills}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className='container text-center'>
            <button type='submit' className='btn btn-dark'>
              Next
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}
