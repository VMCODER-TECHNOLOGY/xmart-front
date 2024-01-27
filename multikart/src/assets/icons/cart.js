import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Cart(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width ? props.width : windowWidth(26)}
      height={props.height ? props.height : windowHeight(30)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.15377 16.952C5.86777 16.952 6.44877 17.532 6.44877 18.246C6.44877 18.96 5.86777 19.541 5.15377 19.541C4.43976 19.541 3.85976 18.96 3.85976 18.246C3.85976 17.532 4.43976 16.952 5.15377 16.952ZM16.4341 16.952C17.1491 16.952 17.7301 17.532 17.7301 18.246C17.7301 18.96 17.1491 19.541 16.4341 19.541C15.7201 19.541 15.1401 18.96 15.1401 18.246C15.1401 17.532 15.7201 16.952 16.4341 16.952ZM0.877948 0.00948708L2.95796 0.369489C3.29296 0.428489 3.54796 0.70649 3.57696 1.04649L3.81196 3.8475L4.68581 3.84788C4.82841 3.84794 4.9695 3.848 5.10909 3.84807L6.7134 3.84883C6.84128 3.8489 6.96773 3.84896 7.09276 3.84902L8.86416 3.85C8.97545 3.85006 9.0854 3.85013 9.19403 3.85019L10.4354 3.85098C10.5337 3.85105 10.6308 3.85112 10.7266 3.85118L11.8185 3.85199C11.9047 3.85205 11.9897 3.85212 12.0736 3.85219L13.0255 3.85301C13.1004 3.85308 13.1742 3.85315 13.2469 3.85321L13.8726 3.85384C13.9389 3.85391 14.0043 3.85397 14.0686 3.85404L14.7932 3.85489C14.8497 3.85496 14.9053 3.85503 14.9599 3.8551L15.5717 3.85595C15.6191 3.85602 15.6657 3.8561 15.7114 3.85617L16.1002 3.85682C16.1409 3.85689 16.1809 3.85696 16.22 3.85703L16.6531 3.85791C16.6862 3.85799 16.7186 3.85806 16.7503 3.85813L17.0169 3.8588C17.0445 3.85887 17.0714 3.85895 17.0977 3.85902L17.3835 3.85992C17.4049 3.86 17.4257 3.86008 17.446 3.86015L17.6138 3.86084C17.6308 3.86091 17.6474 3.86099 17.6634 3.86107L17.8332 3.86199C17.8455 3.86207 17.8574 3.86215 17.8689 3.86222L17.9614 3.86292C17.9705 3.863 17.9793 3.86308 17.9877 3.86316L18.0543 3.86387C18.0607 3.86395 18.0668 3.86403 18.0727 3.86411L18.118 3.86483C18.1223 3.86491 18.1263 3.86499 18.1301 3.86507L18.1588 3.86579C18.1614 3.86587 18.1638 3.86595 18.1661 3.86604L18.1869 3.86701C18.1881 3.8671 18.1893 3.86718 18.1904 3.86726C18.2002 3.86817 18.2016 3.86834 18.203 3.8685C18.76 3.9495 19.25 4.2405 19.584 4.68851C19.918 5.13551 20.058 5.68651 19.978 6.23851L19.029 12.7965C18.85 14.0445 17.766 14.9855 16.506 14.9855H5.58497C4.26796 14.9855 3.15296 13.9575 3.04596 12.6425L2.12995 1.74849L0.622947 1.48849C0.213946 1.41649 -0.0590552 1.02949 0.0109451 0.62049C0.0829454 0.211488 0.477947 -0.0545132 0.877948 0.00948708ZM4.4852 5.34785L3.93796 5.34751L4.54096 12.5195C4.58496 13.0715 5.03596 13.4855 5.58697 13.4855H16.504C17.025 13.4855 17.47 13.0975 17.544 12.5825L18.494 6.02351C18.516 5.86751 18.477 5.71151 18.382 5.58551C18.288 5.45851 18.15 5.37651 17.994 5.35451C17.9868 5.35478 17.9695 5.35504 17.9427 5.35527L17.8339 5.35589C17.8112 5.35598 17.7862 5.35607 17.7589 5.35615L17.1924 5.35701C17.1446 5.35705 17.0949 5.35708 17.0434 5.3571L15.7114 5.35705C15.6371 5.35702 15.5614 5.35699 15.4843 5.35695L13.9642 5.35603C13.8731 5.35596 13.781 5.35589 13.688 5.35582L12.8279 5.35513C12.7299 5.35505 12.6312 5.35497 12.5318 5.35488L11.6207 5.35408C11.5178 5.35399 11.4145 5.3539 11.3106 5.3538L10.683 5.35322C10.5777 5.35313 10.4721 5.35303 10.3663 5.35293L9.40858 5.35204C9.30179 5.35194 9.19494 5.35184 9.08809 5.35174L8.44744 5.35114C8.34083 5.35104 8.23433 5.35094 8.12802 5.35085L7.49281 5.35027C7.38747 5.35018 7.28243 5.35008 7.17776 5.34999L6.24725 5.34919C6.14532 5.3491 6.04395 5.34902 5.94318 5.34894L4.76725 5.34804C4.67236 5.34798 4.57832 5.34791 4.4852 5.34785ZM14.8979 7.54382C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979Z"
        fill={props.color ? props.color : colors.text}
      />
    </Svg>
  );
}
