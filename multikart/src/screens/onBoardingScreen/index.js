import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Carousel from './carousel';
import StartShopping from './startShopping';
import {UnAuthHeader} from '@commonComponents';
import images from '@utils/images/images';
import { useValues } from '@App';
import { useTheme } from '@react-navigation/native';

export default function onBoarding(props) {
  const t = props.route.params.t;
  const {isDark} = useValues()
  const {colors} = useTheme()
  return (
    <SafeAreaView>
      <UnAuthHeader
        style={styles.header}
        text={'authComman.skip'}
        image={isDark ? images.darkLogo : images.logo}
        t={t}
        onPress={() => props.navigation.navigate('LoginScreen')}
        colors={colors}
      />
      <Carousel t={t} colors={colors}/>
      <StartShopping navigation={props.navigation} t={t} colors={colors} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '94%',
    alignSelf: 'center',
    height: '8%',
    paddingTop: 10,
    alignItems: 'flex-start',
  },
});
