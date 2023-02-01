import {Svg, Defs, Rect, Mask} from 'react-native-svg';
import { View } from 'react-native';

const Frame = () => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Rect x="12%" y="18%" height="200" width="300"   />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba( 0, 0, 0, 0.8)"
        mask="url(#mask)"
      />
      {/* <Rect 
       x="12%"
       y="18%"
       height="200"
       width="300"
       stroke="white" 
       strokeDasharray="14"
       strokeWidth="2"
       fillOpacity="0"
      /> */}
    </Svg>
  );
};

export default Frame;
