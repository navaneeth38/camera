import React from 'react';
import { StatusBar, View } from 'react-native';
import CameraPage from './components/CameraPage';

function App() {
  return(
    <>
    <StatusBar 
        animated={true}
        backgroundColor="black"/>
      <CameraPage title="CUSTOM TEXT TITLE" subject="Lorem ipsom how do you capture reading khjy jjkj kjkkkhh jkjkhjhjghuhuh jghuhyyhyhuhu." />
    </>
      
  )

}

export default App