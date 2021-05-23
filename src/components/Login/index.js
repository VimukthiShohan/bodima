import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';

const LoginComponent = () => {
  return (
    <Container>
      <Input
        label="Username"
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input label="Password" icon={<Text>HIDE</Text>} iconPosition="right" />

      <CustomButton primary title="Submit now" />
    </Container>
  );
};

export default LoginComponent;
