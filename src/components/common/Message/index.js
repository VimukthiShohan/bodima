import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Message = ({
  message,
  primary,
  danger,
  info,
  error,
  retry,
  onDismiss,
  retryFn,
  success,
  ...props
}) => {
  const [userDismissed, setUserDissmissed] = useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && typeof onDismiss !== 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDissmissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
