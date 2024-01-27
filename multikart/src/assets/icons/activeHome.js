
import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function ActiveHome(props) {
  const {colors} = useTheme();
  return (
  <Svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M6.98398 19.7614V16.5428C6.98398 15.7211 7.65492 15.0551 8.48256 15.0551H11.508C11.9055 15.0551 12.2866 15.2118 12.5677 15.4908C12.8487 15.7698 13.0066 16.1482 13.0066 16.5428V19.7614C13.0041 20.103 13.139 20.4314 13.3814 20.6739C13.6239 20.9163 13.9537 21.0526 14.2978 21.0526H16.3619C17.3259 21.0551 18.2513 20.6767 18.9339 20.0008C19.6164 19.325 20 18.4073 20 17.4503V8.2809C20 7.50785 19.6548 6.77457 19.0575 6.2786L12.0358 0.711441C10.8144 -0.264672 9.06433 -0.233156 7.87936 0.786294L1.01791 6.2786C0.392359 6.75995 0.0184761 7.49541 0 8.2809V17.441C0 19.4356 1.62882 21.0526 3.63808 21.0526H5.65504C6.36971 21.0526 6.95052 20.4802 6.9557 19.7708L6.98398 19.7614Z" fill="#FF4C3B"/>
</Svg>

  );
}