import {NativeSyntheticEvent, TargetedEvent} from 'react-native';

export interface StepperProps {
  onIncQty?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onDecQty?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  value?: number;
}
