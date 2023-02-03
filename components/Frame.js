import {Svg, Defs, Rect, Mask} from 'react-native-svg';

const Frame = () => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#ffffff" />
          <Rect x="12%" y="25.5%" height="92" width="300" />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba( 0, 0, 0, 0.6)"
        mask="url(#mask)"
      />
    </Svg>
  );
};

export default Frame;
