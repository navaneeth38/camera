import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import CameraPage from './components/CameraPage';

function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="black" />
      <CameraPage
        title="CUSTOM TEXT TITLE"
        subject="Lorem ipsom dolor sit amet consectetur, adipiscing elit est."
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;