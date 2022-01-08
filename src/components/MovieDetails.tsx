import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Currency from 'currency-formatter';

import {MovieFull} from '../interfaces/MovieDBInterface';

interface Props {
  movieFull: MovieFull;
}

const MovieDetails = ({movieFull}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingCont}>
        <Icon color="grey" size={20} name="star-outline" />
        <Text> {movieFull.vote_average}</Text>
        <Text> · {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>
      <View style={styles.sectionCont}>
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.texto}>{movieFull.overview}</Text>
      </View>
      <View style={styles.sectionCont}>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.texto}>
          {Currency.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={styles.sectionCont}>
        <Text style={styles.title}>Recaudación</Text>
        <Text style={styles.texto}>
          {Currency.format(movieFull.revenue, {code: 'USD'})}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  sectionCont: {
    marginBottom: 15,
  },
  ratingCont: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  texto: {
    fontSize: 15,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
});

export default MovieDetails;
