import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../theme';
import {Text} from '../../atoms';
import {StepperProps} from './stepper.interface';
import Styles from './stepper.style';

const Stepper: React.FC<StepperProps> = ({onIncQty, onDecQty, value = 0}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        testID="decrease-button"
        onPress={onDecQty}
        style={Styles.touchSign}>
        <Text color={Colors.COLOR_WHITE}>{'-'}</Text>
      </TouchableOpacity>
      <Text color={Colors.COLOR_WHITE}>{`${value}`}</Text>
      <TouchableOpacity
        testID="increase-button"
        onPress={onIncQty}
        style={Styles.touchSign}>
        <Text color={Colors.COLOR_WHITE}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stepper;
