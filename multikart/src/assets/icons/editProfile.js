import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function EditProfile() {
  return (
    <Svg
      width={windowWidth(15)}
      height={windowHeight(15)}
      viewBox="0 0 13 13"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.10528 0.259322C6.36125 0.259322 6.56899 0.467064 6.56899 0.723031C6.56899 0.978999 6.36125 1.18674 6.10528 1.18674H3.79353C2.1959 1.18674 1.16399 2.2811 1.16399 3.97456V9.11494C1.16399 10.8084 2.1959 11.9028 3.79353 11.9028H9.24923C10.8469 11.9028 11.8794 10.8084 11.8794 9.11494V6.62451C11.8794 6.36854 12.0871 6.1608 12.3431 6.1608C12.5991 6.1608 12.8068 6.36854 12.8068 6.62451V9.11494C12.8068 11.337 11.3767 12.8302 9.24923 12.8302H3.79353C1.66603 12.8302 0.236572 11.337 0.236572 9.11494V3.97456C0.236572 1.75247 1.66603 0.259322 3.79353 0.259322H6.10528ZM11.4903 0.802542L12.2427 1.55499C12.6093 1.92101 12.8109 2.4076 12.8103 2.92571C12.8103 3.44383 12.6087 3.9298 12.2427 4.2952L7.60004 8.93787C7.25936 9.27854 6.80555 9.46649 6.32329 9.46649H4.00721C3.88232 9.46649 3.76237 9.41579 3.6752 9.32614C3.58802 9.23711 3.54041 9.11655 3.5435 8.99104L3.60162 6.65456C3.61337 6.18961 3.80071 5.75249 4.12963 5.42295H4.13025L8.75065 0.802542C9.50619 0.0482411 10.7347 0.0482411 11.4903 0.802542ZM8.37004 2.49416L4.78563 6.07894C4.62549 6.23907 4.53461 6.45176 4.52904 6.67743L4.48267 8.53907H6.32329C6.55823 8.53907 6.77834 8.44819 6.94466 8.28187L10.5507 4.67483L8.37004 2.49416ZM9.40603 1.45854L9.02542 1.83816L11.2061 4.01945L11.5873 3.63921C11.7778 3.44878 11.8829 3.19528 11.8829 2.92571C11.8829 2.65553 11.7778 2.40141 11.5873 2.21098L10.8349 1.45854C10.441 1.06593 9.80049 1.06593 9.40603 1.45854Z"
        fill="#FF4C3B"
      />
    </Svg>
  );
}
