import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
const MedicineImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={63}
    height={70}
    fill="none"
    {...props}>
    <Rect width={62.344} height={70} x={0.328} fill="url(#a)" rx={6} />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.0011 0 0 .00098 -.061 0)" />
      </Pattern>
      <Image
        id="b"
        width={1024}
        height={1024}
      />
    </Defs>
  </Svg>
);
export default MedicineImage;