import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import { useEffect, useCallback, useRef } from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsForeground} from './hooks/useIsForeground';

const RenderCamera = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isForeground = useIsForeground();
  const cameraRef = useRef()
 

  useEffect(() => {
    requestCameraPermission();
  }, []);



  // focusing


  //const touchII = async (event) => {
  //   console.log("touched") 
  //     let point= {
  //       x: Math.round(event.pageX - camLocation.x),
  //       y: Math.round(event.pageY - camLocation.y),
  //     };
  //     await cameraRef?.current?.focus(point) 
         
  //   };

  // cameraRef.current.focus({ x: tapEvent.x, y: tapEvent.y })

  // function that request for device permision
    const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    //checking for permission
     
    if (permission === 'denied') await Linking.openSettings();
  }, []);
  if (device == null) {
    return (
      //loading screen till detecting device
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={75} color="black" />
        {/* <Text>Loading.....</Text> */}
      </View>
    );
  } else {
    return(
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isForeground}
          preset="photo"
          enableZoomGesture
          // onTouchEnd={x => device.supportsFocus && touchII(x.nativeEvent)}
        />
    )
  }
};

export default RenderCamera

//const touchII = async (event: NativeTouchEvent) => {
//   let point: Point = {
//     x: Math.round(event.pageX - camLocation.x),
//     y: Math.round(event.pageY - camLocation.y),
//   };
//   await cameraRef?.current?.focus(point)     
// };

// onTouchEnd={x => device.supportsFocus && touchII(x.nativeEvent)}
