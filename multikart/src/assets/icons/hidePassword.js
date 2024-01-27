import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function HidePassword() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(24)}
      height={windowHeight(22)}
      viewBox="0 0 20 18"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4174 0.21975C18.7104 0.51275 18.7104 0.98775 18.4174 1.28075L2.6434 17.0537C2.4974 17.2007 2.3054 17.2738 2.1134 17.2738C1.9214 17.2738 1.7294 17.2007 1.5834 17.0537C1.2904 16.7607 1.2904 16.2867 1.5834 15.9937L3.55535 14.023C2.14153 12.7298 0.942217 10.9866 0.0615 8.93395C-0.0205 8.74395 -0.0205 8.52995 0.0615 8.34095C1.0825 5.97695 2.5205 4.01995 4.2205 2.68295C7.51333 0.0769989 11.8423 -0.0613256 15.2687 2.30828L17.3574 0.21975C17.6504 -0.07325 18.1244 -0.07325 18.4174 0.21975ZM18.0472 5.04075C18.7712 6.00175 19.4072 7.11275 19.9382 8.33875C20.0212 8.52875 20.0212 8.74475 19.9382 8.93375C17.8422 13.7908 14.1272 16.6898 10.0002 16.6898C9.0632 16.6898 8.1312 16.5378 7.2312 16.2388C6.8382 16.1077 6.6252 15.6827 6.7562 15.2898C6.8872 14.8958 7.3102 14.6867 7.7052 14.8147C8.4522 15.0637 9.2242 15.1897 10.0002 15.1897C13.4282 15.1897 16.5612 12.7478 18.4302 8.63675C17.9742 7.63775 17.4432 6.73275 16.8492 5.94275C16.6002 5.61175 16.6662 5.14075 16.9972 4.89175C17.3272 4.64275 17.7982 4.71075 18.0472 5.04075ZM5.1495 3.86095C3.7135 4.99095 2.4805 6.63695 1.5705 8.63895C2.36394 10.3914 3.40632 11.8693 4.61705 12.9607L6.75486 10.8231C6.31993 10.1832 6.0859 9.4287 6.0859 8.63855C6.0859 6.47855 7.8419 4.72155 9.9999 4.72155C10.7829 4.72155 11.5488 4.95996 12.1865 5.39085L14.188 3.38945C11.3352 1.54522 7.86299 1.71346 5.1495 3.86095ZM13.2375 8.46155C13.6455 8.53455 13.9165 8.92455 13.8435 9.33255C13.5565 10.9256 12.2945 12.1896 10.7025 12.4796C10.6575 12.4876 10.6115 12.4916 10.5675 12.4916C10.2125 12.4916 9.8965 12.2376 9.8305 11.8756C9.7565 11.4686 10.0265 11.0775 10.4345 11.0035C11.4145 10.8255 12.1905 10.0476 12.3665 9.06655C12.4405 8.65955 12.8305 8.39155 13.2375 8.46155ZM9.9999 6.22155C8.6689 6.22155 7.5859 7.30555 7.5859 8.63855C7.5859 9.02393 7.67663 9.39594 7.84765 9.73002L11.0933 6.48399C10.7591 6.31371 10.3833 6.22155 9.9999 6.22155Z"
        fill={colors.subText}
      />
    </Svg>
  );
}
