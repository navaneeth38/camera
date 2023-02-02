import React from 'react';
import { StatusBar, View } from 'react-native';
import CameraPage from './components/CameraPage';

function App() {
  return(
    <>
    <StatusBar 
        animated={true}
        backgroundColor="black"/>
      <CameraPage title="CUSTOM TEXT TITLE" subject="Lorem ipsom dolor sit amet consectetur, adipiscing elit est." />
    </>

  )

}

export default App