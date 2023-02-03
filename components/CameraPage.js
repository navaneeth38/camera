import {View, StyleSheet} from 'react-native';
import React from 'react';
import SCREEN_SIZE from '../assets/dimensions/ScreenDimensions';
import Addons from './Addons';
import RenderCamera from './RenderCamera';
import Frame from './Frame';
import {CameraFrame} from '../assets/images';
import { useRef } from 'react';
import { Camera } from 'react-native-vision-camera';



const CameraPage = ({title, subject}) => {
  console.log(SCREEN_SIZE);
  const cameraRef = useRef(null);
  // const takePhoto = async () => {
  //   try {
  //     if (cameraRef.current == null) throw new Error('Camera Ref is Null');
  //     console.log('Photo taking ....');
  //     const photo = await cameraRef.current.takePhoto(takePhotoOptions);
  //     console.log(photo.path)
  //   } catch (error) {
  //     console.log(error);
  //     console.error('Failed to take photo!')
  //   }
  // };
  
  return (
      <View style={styles.container}>
        {/* rendering camera portion */}

        <RenderCamera cameraRef={cameraRef} />
        {/* Adding frame */}
        <Frame  />
        {/* Addons like text capture */}

        <View
          style={{
            position: 'absolute',
            top: '25%',
            left: '12%',
            width: '100%',
          }}>
          <CameraFrame height={100} width={300} />
        </View>

        <Addons title={title} subject={subject} cameraRef={cameraRef} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_SIZE.windowHeight,
    width: SCREEN_SIZE.windowWidth,
  },
});

export default CameraPage;
