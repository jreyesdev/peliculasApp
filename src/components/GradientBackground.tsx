import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {GradientContext} from '../context/GradientContext';
import useAnimateFade from '../hooks/useAnimateFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setOldColors} = useContext(GradientContext);

  const {fadeIn, fadeOut, opacity} = useAnimateFade();

  useEffect(() => {
    fadeIn(() => {
      setOldColors(colors);
      fadeOut(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  return (
    <View style={s.container}>
      <LinearGradient
        style={{...StyleSheet.absoluteFillObject}}
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          style={{...StyleSheet.absoluteFillObject}}
          colors={[colors.primary, colors.secondary, 'white']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;
