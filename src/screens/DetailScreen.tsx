import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RouteStackParams} from '../navigation/Navigation';
import useMovieDetail from '../hooks/useMovieDetail';
import LoadingSpin from '../components/LoadingSpin';
import MovieDetails from '../components/MovieDetails';
import CastDetails from '../components/CastDetails';

const {height: screenHeight} = Dimensions.get('screen');

interface Props extends StackScreenProps<RouteStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {loading, cast, movieFull} = useMovieDetail(movie.id);
  return (
    <ScrollView>
      <View style={styles.buttonBack}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
      </View>
      {loading ? (
        <LoadingSpin />
      ) : (
        <View>
          <MovieDetails movieFull={movieFull!} />
          <CastDetails actores={cast} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  iconButton: {
    padding: 2,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 60,
  },
  container: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.15)',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    opacity: 0.7,
  },
  icono: {marginLeft: 50},
});

export default DetailScreen;
