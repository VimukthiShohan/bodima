import React, {useState, useContext} from 'react';
import RegisterComponent from '../../components/Register';
import {useAuthReducerMethods} from '../../context/reducers/auth';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {register} = useAuthReducerMethods(authDispatch);

  // console.log('authState :>>', authState);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Password length required to be minimum 7 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    //validations
    // console.log('form :>>', form);

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
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
