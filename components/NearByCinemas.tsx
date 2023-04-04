import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Cinema} from '../models/NearByCinemasModel';
import {getNearByCinemas} from '../utils/NetworkCalls';

function NearByCinemas(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const [cinemasNearby, setCinemaNearBy] = useState<Cinema[]>([]);
  const fetchCinemas = async () => {
    var cinemas: Cinema[] = await getNearByCinemas();
    setCinemaNearBy(cinemas);
    console.log('Cinemas', cinemas);
  };
  useEffect(() => {
    const event = new Date();

    fetchCinemas();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={cinemasNearby}
        itemContainerStyle={{color: 'red'}}
        maxHeight={300}
        labelField="cinema_name"
        valueField="cinema_name"
        placeholder={!isFocus ? 'Select item' : '...'}
       
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.cinema_name);
          setIsFocus(false);
        }}
        renderItem={item => {
          return <Text style={{color: 'blue'}}>{item.cinema_name}</Text>;
        }}
      />
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
    backgroundColor: 'red',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'blue',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'blue',
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
