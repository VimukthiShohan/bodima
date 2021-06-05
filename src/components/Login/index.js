import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text, Image, View} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = ({onSubmit, onChange, loading, error, errors}) => {
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
        <View style={styles.form}>
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <View style={styles.form}>
            <CustomButton
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
              primary
              title="Submit"
            />
            <View style={styles.registerSection}>
              <Text>Need to create an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}>
                <Text style={styles.linkBTN}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
