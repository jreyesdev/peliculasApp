import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast;
}

const CastCard = ({actor}: Props) => {
  return (
    <View style={s.container}>
      <View style={s.card}>
        {actor.profile_path && (
          <View style={s.cardImage}>
            <Image
              style={s.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w300${actor.profile_path}`,
              }}
            />
          </View>
        )}
        <View style={s.info}>
          <Text style={s.name}>{actor.name}</Text>
          <Text style={s.char}>{actor.character}</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingLeft: 15,
  },
  card: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
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
  cardImage: {
    width: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  char: {
    fontSize: 14,
  },
});

export default CastCard;
