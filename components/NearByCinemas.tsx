import React, {useEffect, useState} from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import {FlatList, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Cinema} from '../models/NearByCinemasModel';
import {getNearByCinemas,getMoviesForCinema,getFlimDetails} from '../utils/NetworkCalls';

function NearByCinemas({ navigation }): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const [cinemasNearby, setCinemaNearBy] = useState<Cinema[]>([]);
  const [cinemasMovies, setCinemasMovies] = useState([]);
  const fetchCinemas = async () => {
    var cinemas: Cinema[] = await getNearByCinemas();
    setCinemaNearBy(cinemas);
    console.log('Cinemas', cinemas);
  };
  const fetchCinemaMovies = async () => {
    var movies = await getMoviesForCinema();
    setCinemasMovies(movies);
    console.log('Movies', movies);
  };
  useEffect(() => {
    fetchCinemas();
    fetchCinemaMovies();
    // setCinemasMovies(getMoviesForCinema());
    // getFlimDetails();
  }, []);
  useEffect(() => {
   if(cinemasNearby && cinemasNearby.length!=0){
    var nearestCinema: Cinema=cinemasNearby[0];
    cinemasNearby.map((cinema:Cinema)=>{
      if(cinema.distance<nearestCinema.distance)
      nearestCinema=cinema;
    })
    setValue(nearestCinema.cinema_name)
   }
  }, [cinemasNearby]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={cinemasNearby}
       
        maxHeight={300}
        labelField="cinema_name"
        valueField="cinema_name"
        placeholder={!isFocus ? 'Select item' : '...'}
       
        value={value}
     
        onChange={item => {
          setValue(item.cinema_name);
          setIsFocus(false);
        }}
        renderItem={item => {
          return <Text style={{color: 'black',padding: 4,fontSize: 16}}>{item.cinema_name}</Text>;
        }}
      />
      <FlatList 
      horizontal
      renderItem={({item,index})=>{
        return (
          <TouchableOpacity onPress={()=>{
            navigation.navigate('MovieDetails',{
              movieId: item.film_id
            })
          }}>
              <Image
          style={{height: 200,width: 130,margin:20,borderRadius: 10}}
          source={{
            uri: item.images.poster[1].medium.film_image,
          }}
        />
          </TouchableOpacity>
        
        )
      }}
      data={cinemasMovies} />
    </SafeAreaView>
  );
}

export default NearByCinemas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
