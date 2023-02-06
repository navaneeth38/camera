import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useEffect, useCallback, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsForeground} from './hooks/useIsForeground';


const RenderCamera = ({cameraRef}) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isForeground = useIsForeground();
  // const [camLocation,setCamLocation] = useState({
  //   x: 0,
  //   y: 0,
  // })


  // const touchII = async (event) => {
  //   let point= {
  //     x: Math.round(event.pageX - camLocation.x),
  //     y: Math.round(event.pageY - camLocation.y),
  //   };
  //   console.log(point);

  //   await cameraRef.current.focus(point)
  //     .then(() => {
  //       console.log('Focus succeeded');
  //     })
  //     .catch(reason => {
  //       console.log('Focus failed!', reason);
  //     });
  // };

  useEffect(() => {
    requestCameraPermission();
  }, []);

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
    return (
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isForeground}
        preset="photo"
        photo={true}
        focusable
      />
    );
  }
};

export default RenderCamera;
