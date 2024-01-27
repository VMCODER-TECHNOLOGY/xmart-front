import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Coupon() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(27)}
      height={windowHeight(27)}
      viewBox="0 0 21 21"
      fill="none">
      <Path
        d="M2.79489 5.05601C2.79489 3.80701 3.80689 2.79501 5.05589 2.79401H6.08489C6.68189 2.79401 7.25389 2.55701 7.67789 2.13701L8.39689 1.41701C9.27789 0.531012 10.7099 0.527012 11.5959 1.40801L11.5969 1.40901L11.6059 1.41701L12.3259 2.13701C12.7499 2.55801 13.3219 2.79401 13.9189 2.79401H14.9469C16.1959 2.79401 17.2089 3.80601 17.2089 5.05601V6.08301C17.2089 6.68001 17.4449 7.25301 17.8659 7.67701L18.5859 8.39701C19.4719 9.27801 19.4769 10.71 18.5959 11.596L18.5949 11.597L18.5859 11.606L17.8659 12.326C17.4449 12.749 17.2089 13.321 17.2089 13.918V14.947C17.2089 16.196 16.1969 17.208 14.9479 17.208H14.9469H13.9169C13.3199 17.208 12.7469 17.445 12.3239 17.866L11.6039 18.585C10.7239 19.471 9.29289 19.476 8.40689 18.597C8.40589 18.596 8.40489 18.595 8.40389 18.594L8.39489 18.585L7.67589 17.866C7.25289 17.445 6.67989 17.209 6.08289 17.208H5.05589C3.80689 17.208 2.79489 16.196 2.79489 14.947V13.916C2.79489 13.319 2.55789 12.747 2.13689 12.324L1.41789 11.604C0.531886 10.724 0.526886 9.29301 1.40689 8.40701C1.40689 8.40601 1.40789 8.40501 1.40889 8.40401L1.41789 8.39501L2.13689 7.67501C2.55789 7.25101 2.79489 6.67901 2.79489 6.08101V5.05601"
        stroke={colors.icon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.43164 12.5717L12.5716 7.4317"
        stroke={colors.icon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.4955 12.5H12.5045"
        stroke={colors.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.4955 7.5H7.5045"
        stroke={colors.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}