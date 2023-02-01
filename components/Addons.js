import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Addons = ({title, subject}) => {
  return (
    <View style={styles.addOnContainer}>
      <View style={styles.textCont}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>{subject}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.circleShape} />
      </View>
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
    paddingBottom: 75
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default Addons;
