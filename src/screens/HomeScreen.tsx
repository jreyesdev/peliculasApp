import React, {useContext} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import GradientBackground from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import LoadingSpin from '../components/LoadingSpin';
import MoviePoster from '../components/MoviePoster';
import {GradientContext} from '../context/GradientContext';
import GetColores from '../helpers/GetColores';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {loading, nowPlaying, popular, topRated, upComing} = useMovies();
  const {setCurrentColors} = useContext(GradientContext);

  const getColorPoster = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await GetColores(uri);
    setCurrentColors({primary, secondary});
  };

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View
          style={{
            ...styles.container,
            marginTop: top + 10,
          }}>
          <View style={styles.carouselContainer}>
            <Carousel
              data={nowPlaying}
              itemWidth={250}
              inactiveSlideOpacity={0.8}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              onSnapToItem={index => getColorPoster(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Up comming" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  carouselContainer: {
    height: 440,
  },
});

export default HomeScreen;
