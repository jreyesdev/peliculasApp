import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import useAnimateFade from '../hooks/useAnimateFade';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useAnimateFade();

  return (
    <View style={s.container}>
      <Animated.View style={{...s.caja, opacity}} />
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 20,
  },
});

export default FadeScreen;
