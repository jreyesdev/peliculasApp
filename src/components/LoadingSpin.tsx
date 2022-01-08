import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingSpin = () => {
  return (
    <View style={style.loadingContainer}>
      <ActivityIndicator color="blue" size={50} />
    </View>
  );
};

const style = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default LoadingSpin;
