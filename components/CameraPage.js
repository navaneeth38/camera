import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraPage = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <ActivityIndicator size={50} color="#E4D00A" />;
  return (
    <View>
      <Camera
      style={StyleSheet.absoluteFill}
      device={device}
    />
    </View>
  );
};

export default CameraPage;
