import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function App() {
  const devices = useCameraDevices('wide-angle-camera')
  const device = devices.back
  console.log(devices)

  if (device == null) return <ActivityIndicator size={50} color="black" />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}

export default App