import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Addons = ({title, subject}) => {
  return (
    <View style={styles.addOnContainer}>
      <View style={styles.textCont}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>{subject}</Text>
      </View>
      <TouchableOpacity style={styles.buttons}>
        <View style={styles.circleShape} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  addOnContainer: {
    flex: 1,
  },
  textCont: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 75,
    height: 180
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color:'white'
  },
});
export default Addons;
