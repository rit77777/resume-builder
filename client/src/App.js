import React from 'react';
import ResumeForm from './components/ResumeForm';

export default function App() {
  return (
    <div>
      <div className='col-lg-8 mx-auto text-center mt-5'>
        <h1>
          <b>Let's Create Your Resume!</b>
        </h1>
        <p className='lead'>
          Please provide accurate and clear description wherever necessary.
        </p>
        <ResumeForm />
      </div>
    </div>
  );
}
