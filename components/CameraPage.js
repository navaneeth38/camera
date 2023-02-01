import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import SCREEN_SIZE from './dimensions/ScreenDimensions';
import Addons from './Addons';
import RenderCamera from './RenderCamera';
import Frame from './Frame';



const CameraPage = ({title,subject}) => {
  console.log(SCREEN_SIZE)
  return (
    <View style={styles.container}>
      {/* rendering camera portion */}
      {/* <TouchableOpacity>
        <Text style={{color: 'gray',fontSize: 20}}>x</Text>
      </TouchableOpacity> */}
      <RenderCamera />
      {/* Adding frame */}
      <Frame />
      {/* Addons like text capture */}
      <View style={styles.addOn}>
        <Addons title={title} subject={subject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_SIZE.windowHeight,
    width: SCREEN_SIZE.windowWidth,
  },
  addOn: {
    position: 'absolute',
    left: 0.12 * SCREEN_SIZE.windowWidth,
    top: 0.6 * SCREEN_SIZE.windowHeight,
  }
});

export default CameraPage;
