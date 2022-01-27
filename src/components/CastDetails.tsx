import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/CreditsInterface';
import CastCard from './CastCard';

interface Props {
  actores: Cast[];
}

const CastDetails = ({actores}: Props) => {
  return (
    <View style={s.container}>
      <View style={s.sectionCont}>
        <Text style={s.title}>Reparto</Text>
      </View>
      <FlatList
        data={actores}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastCard actor={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionCont: {
    paddingHorizontal: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CastDetails;
