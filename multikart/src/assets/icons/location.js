import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function Location(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.038 2.61658C14.8288 2.61658 17.913 5.72408 17.913 9.54408C17.913 14.2399 12.533 18.8666 11.038 18.8666C9.54296 18.8666 4.16296 14.2399 4.16296 9.54408C4.16296 5.72408 7.24713 2.61658 11.038 2.61658ZM11.038 3.86658C7.9363 3.86658 5.41296 6.41408 5.41296 9.54408C5.41296 13.5266 10.0996 17.4066 11.038 17.6132C11.9763 17.4057 16.663 13.5257 16.663 9.54408C16.663 6.41408 14.1396 3.86658 11.038 3.86658ZM11.0388 6.78324C12.5321 6.78324 13.7471 7.99824 13.7471 9.49241C13.7471 10.9857 12.5321 12.1999 11.0388 12.1999C9.54546 12.1999 8.33046 10.9857 8.33046 9.49241C8.33046 7.99824 9.54546 6.78324 11.0388 6.78324ZM11.0388 8.03324C10.2346 8.03324 9.58046 8.68741 9.58046 9.49241C9.58046 10.2966 10.2346 10.9499 11.0388 10.9499C11.843 10.9499 12.4971 10.2966 12.4971 9.49241C12.4971 8.68741 11.843 8.03324 11.0388 8.03324Z"
        fill={colors.text}
      />
    </Svg>
  );
}