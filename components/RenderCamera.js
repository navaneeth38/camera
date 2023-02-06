import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useEffect, useCallback} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsForeground} from './hooks/useIsForeground';
import Reanimated from 'react-native-reanimated';

const RenderCamera = ({cameraRef}) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isForeground = useIsForeground();

  const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
  Reanimated.addWhitelistedNativeProps({
    zoom: true,
  });

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
      <ReanimatedCamera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isForeground}
        preset="photo"
        photo={true}
        focusable
        enableZoomGesture
      />
    );
  }
};

export default RenderCamera;
