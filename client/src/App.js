import React from 'react';
import ResumeForm from './components/ResumeForm';

export default function App() {
  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-xl p-2'>
          <span className='navbar-brand mb-0 h1'>Resumake</span>
        </div>
      </nav>
      <div className='col-lg-8 mx-auto text-center mt-5'>
        <ResumeForm />
      </div>
    </>
  );
}
