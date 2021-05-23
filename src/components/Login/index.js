import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text, Image, View} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = () => {
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
        <Text style={styles.sTitle}>Please login from here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter username"
            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter password"
          />
          <View style={styles.form}>
            <CustomButton primary title="Submit" />
            <View style={styles.registerSection}>
              <Text>Need to have a account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}>
                <Text style={styles.registerLink}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
