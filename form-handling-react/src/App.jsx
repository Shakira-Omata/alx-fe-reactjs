import React from 'react';
import FormikForm from './components/FormikForm';
import RegistrationForm from './components/RegistrationForm';



const App = () => {
  return (
    <div>
      <h1>Controlled Form</h1>
      <RegistrationForm />
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
};


export default App;