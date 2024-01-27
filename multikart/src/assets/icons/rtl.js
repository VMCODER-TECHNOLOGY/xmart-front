import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

export function Rtl(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12 1H5.5C4.57174 1 3.6815 1.36875 3.02513 2.02513C2.36875 2.6815 2 3.57174 2 4.5C2 5.42826 2.36875 6.3185 3.02513 6.97487C3.6815 7.63125 4.57174 8 5.5 8H6M10 12V1M6 12V1M1 16H15M1 16L3 18M1 16L3 14"
        stroke={colors.text}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
