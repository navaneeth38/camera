import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SCREEN_SIZE from '../assets/dimensions/ScreenDimensions';

const Addons = ({title, subject}) => {
  return (
    <View style={styles.addOnContainer}>
      <View style={styles.textCont}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>{subject}</Text>
      </View>
      <TouchableOpacity onPress={()=> console.log("Capture")} style={styles.buttons}>
        <View style={styles.circleShape} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  addOnContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0.65 * SCREEN_SIZE.windowHeight,
  },
  textCont: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 55,
    height: 180,
    width: SCREEN_SIZE.windowWidth
  },
  circleShape: {
    width: 80,
    height: 80,
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
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color:'white'
  },
});
export default Addons;
