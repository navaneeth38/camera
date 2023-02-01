import React from 'react';
import { StatusBar, View } from 'react-native';
import CameraPage from './components/CameraPage';

function App() {
  return(
    <>
    <StatusBar 
        animated={true}
        backgroundColor="black"/>
      <CameraPage />
    </>
      
  )

}

export default App