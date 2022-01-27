import React, {useContext, useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
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
  const {loading, nowPlaying, popular, topRated, upComing} = useMovies();
  const {setCurrentColors} = useContext(GradientContext);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getColorPoster(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  const getColorPoster = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await GetColores(uri);
    setCurrentColors({primary, secondary});
  };

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <GradientBackground>
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
        </GradientBackground>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Up comming" movies={upComing} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  carouselContainer: {
    height: 440,
    paddingTop: 15,
  },
});

export default HomeScreen;
