import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Input = ({
  style,
  onChangeText,
  value,
  iconPosition,
  icon,
  label,
  error,
  ...props
}) => {
  const [focused, setfocused] = useState(false);

  const getFlexPosition = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? 'center' : 'baseline',
            borderColor: getBorderColor(),
            flexDirection: getFlexPosition(),
          },
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setfocused(true);
          }}
          onBlur={() => {
            setfocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
