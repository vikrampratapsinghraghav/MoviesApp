/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import NearByCinemas from './components/NearByCinemas';





function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
    <NearByCinemas />
    </SafeAreaView>
  );
}



export default App;
