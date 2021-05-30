import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/Login';
import {useLoginReducerMethods} from '../../context/reducers/login';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const {login} = useLoginReducerMethods(authDispatch);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.email && form.password) {
      login(form);
      // console.log('form', form);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
