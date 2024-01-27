import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default withPrice = props => {
  const {viewRTLStyle, textRTLStyle, currSymbol, currValue} = useValues();
  return (
    <View>
      <Text style={[styles.brand, {textAlign: textRTLStyle}]}>
        {props.brandName}
      </Text>
      <View style={[styles.priceView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.discountPrice,
            {color: props.colors.text, textAlign: textRTLStyle},
          ]}>
          {currSymbol}
          {(props.discountPrice * currValue).toFixed(2)}
        </Text>
        <Text style={[styles.price, {textAlign: textRTLStyle}]}>
          {currSymbol}
          {(props.price * currValue).toFixed(2)}
        </Text>
        <Text style={[styles.discount, {textAlign: textRTLStyle}]}>
          {props.discount}
        </Text>
      </View>
    </View>
  );
};
