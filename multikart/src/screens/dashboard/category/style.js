import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default categoryStyles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight(70),
  },
  category: {
    marginHorizontal: windowWidth(20),
    paddingHorizontal: windowWidth(24),
    borderRadius: windowWidth(7),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryName: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
  },
  categoryImage: {
    width: windowWidth(66),
    height: windowHeight(46),
    resizeMode: 'contain',
  },
  categorySub: {
    fontSize: fontSizes.FONT19,
    color: appColors.grey,
    fontFamily: appFonts.LatoMedium,
  },
  categoryImg: {
    width: windowWidth(140),
    height: windowHeight(100),
    resizeMode: 'cover',
  },
});
