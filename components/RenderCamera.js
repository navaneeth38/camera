import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useEffect, useCallback, useState} from 'react';
import {Camera, useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';
import {useIsForeground} from './hooks/useIsForeground';
import { useSharedValue } from 'react-native-reanimated';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import {scanOCR} from 'vision-camera-ocr'
import SCREEN_SIZE from '../assets/dimensions/ScreenDimensions';


const RenderCamera = ({cameraRef, capture}) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isForeground = useIsForeground();

  // const textBound = useSharedValue({ top: 0.25 * SCREEN_SIZE.windowHeight , left: 0.12 * SCREEN_SIZE.windowWidth , right: 0.79 * SCREEN_SIZE.windowWidth, bottom: 0.5 * SCREEN_SIZE.windowHeight })
  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const scannedOcr = scanOCR(frame)
    console.log(scannedOcr.result.text)
  }, []);
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
        preset="medium"
        photo={true}
        focusable
        frameProcessor={capture ? frameProcessor : undefined}
        frameProcessorFps={2}
      />
    );
  }
};

export default RenderCamera;


//import { labelImage } from "vision-camera-image-labeler";

// ...
// const frameProcessor = useFrameProcessor((frame) => {
//   'worklet';
//   const scannedOcr = scanOCR(frame);
// }, []);