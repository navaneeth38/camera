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
      <TouchableOpacity
        onPress={() => console.log('Capture')}
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
    top: 0.66 * SCREEN_SIZE.windowHeight,
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
    fontWeight: 'bold',
    fontFamily: 'Mulish-VariableFont_wght',
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    color: 'white',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Mulish-Light',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: 'white',
  },
});
export default Addons;
