import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text, Image, View} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={150}
        width={150}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.sTitle}>Create account from here</Text>
        <View style={styles.form}>
          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Mobile number"
            iconPosition="right"
            placeholder="Enter Mobile number"
            onChangeText={value => {
              onChange({name: 'mobileNumber', value});
            }}
            error={errors.mobileNumber}
          />
          <Input
            label="Password"
            iconPosition="right"
            placeholder="Enter password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <View style={styles.form}>
            <CustomButton onPress={onSubmit} primary title="Submit" />
            <View style={styles.loginSection}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}>
                <Text style={styles.linkBTN}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
