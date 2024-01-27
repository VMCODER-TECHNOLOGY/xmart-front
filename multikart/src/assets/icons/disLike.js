import React from 'react';
import Svg, {Path, ClipPath, G, Defs, Rect} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

export function DisLike(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width="15"
      height="20"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_381_300)">
        <Path
          d="M10.6647 1.16671H12.2222C12.5524 1.16088 12.8732 1.27646 13.1237 1.49153C13.3743 1.70659 13.5371 2.00617 13.5814 2.33338V6.41672C13.5371 6.74393 13.3743 7.04351 13.1237 7.25857C12.8732 7.47364 12.5524 7.58922 12.2222 7.58338H10.6647M6.5814 8.75005V11.0834C6.5814 11.5475 6.76577 11.9926 7.09396 12.3208C7.42215 12.649 7.86727 12.8334 8.3314 12.8334L10.6647 7.58338V1.16671H4.08473C3.80337 1.16353 3.53034 1.26214 3.31595 1.44438C3.10156 1.62661 2.96025 1.88019 2.91806 2.15838L2.11306 7.40838C2.08769 7.57559 2.09896 7.74632 2.14612 7.90874C2.19327 8.07115 2.27517 8.22138 2.38615 8.349C2.49712 8.47662 2.63452 8.57859 2.78881 8.64784C2.94311 8.71709 3.11062 8.75196 3.27973 8.75005H6.5814Z"
          stroke={props.color ? props.color : colors.subText}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_381_300">
          <Rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.748047)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}