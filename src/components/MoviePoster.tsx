import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Movie} from '../interfaces/MovieDBInterface';
import {RouteStackParams} from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type HomeScreenNavigation = StackNavigationProp<RouteStackParams, 'HomeScreen'>;

const MoviePoster = ({movie, height = 420, width = 280}: Props) => {
  const navigation = useNavigation<HomeScreenNavigation>();

  const detailMovie = () => {
    navigation.navigate('DetailScreen', movie);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={detailMovie}
      style={{
        ...styles.container,
        width,
        height,
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 15,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
