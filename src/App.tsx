import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { Calculator_Screen } from './presentation/screens/Calculator_Screen';
import { stylesGlobal } from './config/app-theme';



function App(){
  return (
    <View style={ stylesGlobal.background }>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <Calculator_Screen></Calculator_Screen>
    </View>
  );
}

export default App;
