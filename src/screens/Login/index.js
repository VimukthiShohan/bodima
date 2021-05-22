import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text} from 'react-native';

const Login = () => {
  const [text, onChangeText] = useState('');

  return (
    <Container>
      <Input
        label="Username :"
        onChangeText={onChangeText}
        value={text}
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input
        label="Password :"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
