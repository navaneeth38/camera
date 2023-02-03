import {View, StyleSheet} from 'react-native';
import React from 'react';
import SCREEN_SIZE from '../assets/dimensions/ScreenDimensions';
import Addons from './Addons';
import RenderCamera from './RenderCamera';
import Frame from './Frame';
import {CameraFrame} from '../assets/images';

const CameraPage = ({title, subject}) => {
  console.log(SCREEN_SIZE);
  return (
    <View style={styles.container}>
      {/* rendering camera portion */}
     
      <RenderCamera />
      {/* Adding frame */}
      <Frame />
      {/* Addons like text capture */}

      <View style={{position: 'absolute', top: '25%',left: '12%', width: "100%"}}>
        <CameraFrame height={100} width={300} />
      </View>

      <Addons title={title} subject={subject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_SIZE.windowHeight,
    width: SCREEN_SIZE.windowWidth,
  },
  // addOn: {
  //   position: 'absolute',
  //   left: 0.12 * SCREEN_SIZE.windowWidth,
  //   top: 0.6 * SCREEN_SIZE.windowHeight,
  // }
});

export default CameraPage;
