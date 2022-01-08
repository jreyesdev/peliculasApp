import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import HorizontalSlider from '../components/HorizontalSlider';
import LoadingSpin from '../components/LoadingSpin';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {loading, nowPlaying, popular, topRated, upComing} = useMovies();

  if (loading) {
    return <LoadingSpin />;
  }

  return (
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
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Up comming" movies={upComing} />
      </View>
    </ScrollView>
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
