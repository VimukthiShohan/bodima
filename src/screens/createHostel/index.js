import React, {useState, useReducer} from 'react';
import {
  useHostelCreateReducerMethods,
  initialState,
  hostelCreateReducer,
} from '../../context/reducers/hostelCreate';
import HostelComponent from '../../components/HostelComponents';

const CreateHostel = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useReducer(hostelCreateReducer, initialState);
  const {createHostel} = useHostelCreateReducerMethods(dispatch);

  // console.log('state', state);
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
    if (!form.code) {
      setErrors(prev => {
        return {...prev, code: 'Please add the hotel name'};
      });
    }
    if (!form.hostelName) {
      setErrors(prev => {
        return {...prev, hostelName: 'Please add the hotel name'};
      });
    }
    if (!form.contactNumber) {
      setErrors(prev => {
        return {...prev, contactNumber: 'Please add a contact number'};
      });
    }
    if (!form.location) {
      setErrors(prev => {
        return {...prev, location: 'Please add the location'};
      });
    }
    if (!form.address) {
      setErrors(prev => {
        return {...prev, address: 'Please add the address'};
      });
    }
    if (!form.distanceToMainRoad) {
      setErrors(prev => {
        return {
          ...prev,
          distanceToMainRoad: 'Please add the distanceToMainRoad',
        };
      });
    }
    if (!form.owner) {
      setErrors(prev => {
        return {...prev, owner: 'Please add the email'};
      });
    }

    if (
      Object.values(form).length === 7 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      createHostel(form);
    }
  };

  return (
    <HostelComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      error={''}
      loading={false}
    />
  );
};

export default CreateHostel;
