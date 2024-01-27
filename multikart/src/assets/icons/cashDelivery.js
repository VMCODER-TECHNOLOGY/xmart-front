

import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import Appcolor from '@theme/appColors';

export function CahDelivery(props) {
  const {colors} = useTheme();
  return (
    <Svg width="20" height="18" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M16.668 1.09598H14.6938C14.5105 1.09598 14.3618 1.24077 14.3618 1.41938V1.69859H13.436C13.2526 1.69859 13.104 1.84337 13.104 2.02198V2.11505C12.5643 2.06917 12.3868 1.9695 11.8912 1.69112C11.51 1.47704 10.9339 1.15348 9.89638 0.699152C9.89157 0.697017 9.88672 0.695045 9.88177 0.693169C9.54406 0.563748 8.65896 0.30911 7.71364 0.726381L6.37754 1.19232L5.25133 0.0954456C5.12167 -0.0308386 4.91142 -0.0308386 4.78177 0.0954456L1.08433 3.69663C0.964732 3.81315 0.941788 4.01517 1.08433 4.154L7.40246 10.3077C7.50356 10.4062 7.7403 10.436 7.87205 10.3077L11.2476 7.01999C11.3354 7.02736 11.4265 7.03134 11.5209 7.03134C12.3883 7.03134 13.1557 6.45176 13.5946 5.82005H16.668C16.8514 5.82005 17 5.67527 17 5.49666V1.41938C17 1.24077 16.8514 1.09598 16.668 1.09598ZM5.01651 0.781455L5.77328 1.51853C5.54833 1.65403 5.28825 1.72653 5.01651 1.72653C4.74475 1.72653 4.4847 1.65406 4.25975 1.51853L5.01651 0.781455ZM2.54547 4.66241L1.7887 3.9253L2.54547 3.18823C2.68459 3.40733 2.75903 3.66064 2.75903 3.9253C2.75903 4.18996 2.68462 4.44328 2.54547 4.66241ZM7.63727 9.62167L6.88064 8.88473C7.34259 8.60706 7.93188 8.60706 8.39387 8.88473L7.63727 9.62167ZM8.87226 8.41885C8.13854 7.90045 7.136 7.90045 6.40228 8.41885L3.02383 5.12828C3.28311 4.78096 3.42309 4.36375 3.42309 3.9253C3.42309 3.48681 3.28314 3.06964 3.02383 2.72232L3.78142 1.98447C4.13802 2.23701 4.56634 2.37335 5.01655 2.37335C5.46675 2.37335 5.89507 2.23701 6.25167 1.98447L6.96982 2.68393C6.81486 2.70621 6.66375 2.75595 6.52284 2.83243C6.28484 2.9616 6.09811 3.15502 5.98183 3.38902C5.6073 3.45658 5.26056 3.63318 4.98856 3.89807C4.25062 4.61684 4.25062 5.78632 4.98859 6.50509C5.35754 6.86444 5.84221 7.04415 6.32691 7.04415C6.81157 7.04415 7.29627 6.86447 7.66526 6.50509C7.90532 6.27128 8.07349 5.98391 8.15773 5.67074L9.2788 6.04131C9.1526 6.61074 9.28186 7.20979 9.63052 7.68032L8.87226 8.41885ZM6.85358 5.2395C6.8565 5.24053 6.85942 5.24157 6.86238 5.24254L7.52631 5.46202C7.47617 5.68241 7.36271 5.88505 7.1957 6.04775C6.71665 6.51427 5.93717 6.51434 5.45818 6.04775C4.97913 5.58119 4.97913 4.82203 5.45818 4.35544C5.57373 4.24284 5.71009 4.15484 5.85868 4.09518C5.91997 4.59197 6.28723 5.03479 6.85358 5.2395ZM10.1089 7.21432C9.98078 7.0109 9.90827 6.77874 9.89681 6.54179C10.0559 6.65378 10.2502 6.76351 10.4824 6.8506L10.1089 7.21432ZM13.1039 5.36772C12.7892 5.87021 12.1789 6.38449 11.5209 6.38449C11.3978 6.38449 11.2824 6.37596 11.1745 6.36076C11.1741 6.36069 11.1736 6.36063 11.1732 6.36056C10.4562 6.25912 10.0704 5.86219 9.9433 5.70502C9.93652 5.69532 9.90767 5.65855 9.90339 5.65243C9.8647 5.5851 9.80129 5.53097 9.7204 5.50422L7.08049 4.63155C6.6592 4.47755 6.43651 4.12619 6.53858 3.77576C6.53864 3.77554 6.53871 3.77531 6.53878 3.77509C6.53888 3.77483 6.53894 3.77454 6.53901 3.77428C6.58646 3.6129 6.69543 3.47905 6.84604 3.39733C6.99565 3.31613 7.16861 3.29598 7.33356 3.34051L10.3083 4.25865C10.4832 4.31269 10.6698 4.21833 10.7252 4.04806C10.7805 3.87779 10.6838 3.69605 10.5089 3.64207L8.14305 2.91186L8.1224 2.89174C8.1222 2.89155 8.122 2.89132 8.12177 2.89113L6.89691 1.69814L7.94971 1.33096C7.95326 1.3297 7.95765 1.32811 7.96117 1.32672C7.96206 1.32637 7.96379 1.32572 7.96465 1.32537C7.96917 1.32359 7.97362 1.32171 7.97803 1.31974C8.68978 1.00113 9.36633 1.19184 9.63152 1.29228C10.6337 1.73148 11.1686 2.03188 11.5594 2.25136C12.1027 2.55655 12.3645 2.70359 13.1039 2.76307V5.36772ZM14.3618 5.1732H13.768V2.34537H14.3618V5.1732ZM16.336 5.1732H15.0259V1.74277H16.336V5.1732Z" fill="#777777"/>
    </Svg>
  );
}
