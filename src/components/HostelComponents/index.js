import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {View} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HostelComponent = ({onSubmit, onChange, loading, error, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View>
        <View style={styles.form}>
          {/*{error.error && <Text>{error.error}</Text>}*/}
          <Input
            label="Hostel Code"
            iconPosition="right"
            placeholder="A code to uniquly identify your hostel"
            onChangeText={value => {
              onChange({name: 'code', value});
            }}
            error={errors.code || error?.code?.[0]}
          />
          <Input
            label="Hostel name"
            iconPosition="right"
            placeholder="Enter Hostel name"
            onChangeText={value => {
              onChange({name: 'hostelName', value});
            }}
            error={errors.hostelName || error?.hostelName?.[0]}
          />
          <Input
            label="Contact number"
            iconPosition="right"
            placeholder="Enter Contact number"
            onChangeText={value => {
              onChange({name: 'contactNumber', value});
            }}
            error={errors.contactNumber || error?.contactNumber?.[0]}
          />
          <Input
            label="Location"
            iconPosition="right"
            placeholder="Enter Location"
            onChangeText={value => {
              onChange({name: 'location', value});
            }}
            error={errors.location || error?.location?.[0]}
          />
          <Input
            label="Address"
            iconPosition="right"
            placeholder="Enter Address"
            onChangeText={value => {
              onChange({name: 'address', value});
            }}
            error={errors.address || error?.address?.[0]}
          />
          <Input
            label="Distance to main road"
            iconPosition="right"
            placeholder="Enter Distance to main road"
            onChangeText={value => {
              onChange({name: 'distanceToMainRoad', value});
            }}
            error={errors.distanceToMainRoad || error?.distanceToMainRoad?.[0]}
          />
          <Input
            label="Owners Email"
            iconPosition="right"
            placeholder="Enter owners Email"
            onChangeText={value => {
              onChange({name: 'owner', value});
            }}
            error={errors.owner || error?.owner?.[0]}
          />
          <View style={styles.form}>
            <CustomButton
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
              primary
              title="Submit"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default HostelComponent;
