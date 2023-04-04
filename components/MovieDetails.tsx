import {useEffect, useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {MovieDetailsModel} from '../models/MovieDetailsModel';
import {
  getNearByCinemas,
  getMoviesForCinema,
  getFlimDetails,
} from '../utils/NetworkCalls';

function MovieDetails({route, navigation}): JSX.Element {
  console.log('rouer', route.params);
  const {movieId} = route.params;
  const [movie, setMovie] = useState<MovieDetailsModel | null>(null);
  const fetchMovieDetails = async () => {
    const movie: MovieDetailsModel = await getFlimDetails(movieId);
    setMovie(movie);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [route]);
  if (movie)
    return <View style={{flex:1}}>
        <Image source={{uri: movie?.images.poster[1].medium.film_image}} style={styles.imageContainer} resizeMode={'stretch'} />
        
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Text style={{fontSize: 18,fontWeight:'bold'}}>Share</Text>
                </View>
            </TouchableOpacity>
        
    </View>;
}
export default MovieDetails;

const styles = StyleSheet.create({
    imageContainer: {width: '100%',height: '50%'},
    buttonContainer: {height:40,width: '90%', backgroundColor: 'red',alignSelf: 'center', justifyContent: 'center',alignItems: 'center',borderRadius:8},
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