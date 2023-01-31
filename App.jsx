import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function App() {
  const devices = useCameraDevices('telephoto-camera')
  const device = devices.back
  console.log(device)

  useEffect(()=>{
    requestCameraPermission()
  },[])

  const requestCameraPermission = useCallback(async ()=>{
    const permission = await Camera.requestCameraPermission()
    
    if(permission === 'denied') await Linking.openSettings()

  },[])
  if (device == null) {
    return <ActivityIndicator size={50} color="black" />
  }
  else{
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      enabled
    />
  )
}

}

export default App