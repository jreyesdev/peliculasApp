import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {Movie} from '../interfaces/MovieDBInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.sliderContainer,
        height: title ? 270 : 220,
      }}>
      {title && <Text style={styles.sliderTitle}>{title}</Text>}
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 260,
    marginVertical: 10,
  },
  sliderTitle: {
    marginLeft: 10,
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HorizontalSlider;
