import React from 'react';
import {Image, View} from 'react-native';
import {Colors} from '../../../theme';
import {scale} from '../../../theme/scale';
import {Button, Stepper, Text} from '../../atoms';
import {CardViewProps} from './card.interface';
import Styles from './card.style';
const CardView: React.FC<CardViewProps> = ({
  itemPrice,
  itemName,
  itemImage,
  onCart,
  isCartScreen = false,
  onIncQty,
  onDecQty,
  value,
  onDeleteItem,
}) => {
  return (
    <View style={Styles.content}>
      <Image
        resizeMode="contain"
        source={{uri: itemImage}}
        style={Styles.cardImg}
      />
      <View style={Styles.subContent}>
        <Text style={Styles.cardTxt} variant="body2" numberOfLines={2}>
          {itemName}
        </Text>
        <Text style={Styles.cardPrice} variant="body2" numberOfLines={1}>
          {itemPrice}
        </Text>
        {!isCartScreen ? (
          <Button
            btnLabel={'Add to Cart'}
            onPress={onCart}
            buttonWidth={scale(100)}
            buttonTextColor={Colors.COLOR_WHITE}
            buttonVariant="body3"
            buttonColor={Colors.COLOR_LIGHT_GRAY}
            buttonStyle={Styles.cardBtn}
          />
        ) : (
          <Stepper onIncQty={onIncQty} onDecQty={onDecQty} value={value} />
        )}
        {isCartScreen && (
          <Text
            testID="delete-button"
            style={[Styles.cardPrice, {width: scale(60)}]}
            variant="body2"
            color={Colors.COLOR_RED}
            onPress={onDeleteItem}>
            {'Remove'}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CardView;
