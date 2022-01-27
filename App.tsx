import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <GradientProvider>
        <Navigation />
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
