import {NativeSyntheticEvent, TargetedEvent} from 'react-native';

export interface CardViewProps {
  itemPrice: string;
  itemName: string;
  onCart: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  itemImage: string;
  isCartScreen?: boolean;
  onIncQty?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onDecQty?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  value?: number;
  onDeleteItem?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
}
