import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React,{useState} from 'react';
import SCREEN_SIZE from '../assets/dimensions/ScreenDimensions';
import {Camera, PhotoFile, TakePhotoOptions } from 'react-native-vision-camera';

const Addons = ({title, subject,cameraRef}) => {
  const [file,setFile] = useState('')
  

  const takePhotoOptions = {
    qualityPrioritization: 'speed',
    flash: 'off'
  };

  const takePhoto = async () => {
    try {
      //Error Handle better
      if (cameraRef.current == null) throw new Error('Camera Ref is Null');
      console.log('Photo taking ....');
      const photo = await cameraRef.current.takePhoto(takePhotoOptions);
      console.log(photo.path)
      setFile(`file:/${photo.path}`)
    } catch (error) {
      console.log(error);
      console.error('Failed to take photo!')
    }
  };

  // const takePhotoOptions = useMemo(
  //   () => ({
  //     photoCodec: 'jpeg',
  //     qualityPrioritization: 'speed',
  //     quality: 90,
  //     skipMetadata: true,
  //   }),
  //   [],
  // )
  
  // const takePhoto = useCallback(async () => {
  //   try {
  //     if (cameraRef.current == null) throw new Error('Camera ref is null!');

  //     console.log('Taking photo...');
  //     const photo = await cameraRef.current.takePhoto(takePhotoOptions);
  //   } catch (e) {
  //     console.error('Failed to take photo!', e);
  //   }
  // }, [cameraRef, takePhotoOptions]);

  // const takePhotoFun = async ()=>{
  // const photo = await cameraRef.current.takePhoto()
  // }

  return (
    <View style={styles.addOnContainer}>
    <View style={styles.textCont}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>{subject}</Text>
    </View>
    <TouchableOpacity
      onPress={() => {
        console.log('Capture')
        takePhoto()
    }}
      style={styles.buttons}>
      <View style={styles.circleShape} />
    </TouchableOpacity>
  </View>
   
  );
};
const styles = StyleSheet.create({
  addOnContainer: {
    flex: 1,
    position: 'absolute',
    left: 0.1 * SCREEN_SIZE.windowHeight,
    top: 0.65 * SCREEN_SIZE.windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCont: {
    justifyContent: 'center',
    paddingBottom: 0.0633 * SCREEN_SIZE.windowHeight,
    height: 0.23889 * SCREEN_SIZE.windowHeight,
    width: 0.6 * SCREEN_SIZE.windowWidth,
  },
  circleShape: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'gray',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Mulish-Light',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#fff',
  },
});
export default Addons;
