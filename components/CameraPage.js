import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React,{useCallback,useEffect} from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsForeground } from './hooks/useIsForeground';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const CameraPage = () => {

  const devices = useCameraDevices()
  const device = devices.back
  const isForeground = useIsForeground()
  // console.log(devices)


  useEffect(()=>{
    requestCameraPermission()
  },[])


  // function that request for device permision
  const requestCameraPermission = useCallback(async ()=>{
    const permission = await Camera.requestCameraPermission()
    
    //checking for permission

    if(permission === 'denied') await Linking.openSettings()

  },[])
  if (device == null) {
    return (
      //loading screen till detecting device
    <View style={{flex: 1, justifyContent: 'center'}}>
     <ActivityIndicator  size={75} color="black" />
     {/* <Text>Loading.....</Text> */}
    </View>
    )
  }
  else{
    //rendering camera view
  return (
    <View style={styles.container}>
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={isForeground}
      preset='photo'
      enableZoomGesture
    />
    <View>
      <Text>Title</Text>
    </View>
    <View style={styles.buttons}>
    <View style={styles.circleShape} />
    </View>
    </View>
  )
}
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, .4)'
  },
  buttons: {
    // justifyContent: 'flex-end',
    // alignItems: 'center'
    position: 'absolute',
    left: 150,
    top: 670
  },
  circleShape: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'gray',
  }
})

export default CameraPage;
