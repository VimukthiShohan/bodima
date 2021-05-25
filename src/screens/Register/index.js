import React, {useState} from 'react';
import RegisterComponent from '../../components/Register';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    //validations
    console.log('form :>>', form);

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add the first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add the last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add the email'};
      });
    }
    if (!form.mobileNumber) {
      setErrors(prev => {
        return {...prev, mobileNumber: 'Please add a mobile number'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
