import {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import {MovieDetailsModel} from '../models/MovieDetailsModel';
import {

  getFlimDetails,
 
} from '../utils/NetworkCalls';
import {
 onShare
} from '../utils/utilMethods';
import { AirbnbRating} from 'react-native-ratings';
import VideoPlayerModal from './VideoPlayerModal';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/historyActions';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function MovieDetails({route, navigation}): JSX.Element {
  console.log('rouer', route.params);
  const {movieId} = route.params;
  const [movie, setMovie] = useState<MovieDetailsModel | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const moviesBooked:MovieDetailsModel[] = useSelector(state => state.movieReducer.movies);

  const fetchMovieDetails = async () => {
    const movie: MovieDetailsModel = await getFlimDetails(movieId);
    setMovie(movie);
    // const trailer = await getFlimtrailer(movieId);
  };
  const bookMovie = () => {
    var alertMsg = ''
    console.log('Movies booked',moviesBooked);
    if(moviesBooked.find((item:MovieDetailsModel)=>
      item.film_id === movie?.film_id
  )){
      alertMsg='Movie already booked'
    }
    else{
      alertMsg='Movie booked'
      dispatch(addMovie(movie));
    }
   
    Alert.alert(alertMsg, '', [
     
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  useEffect(() => {
    fetchMovieDetails();
  }, [route]);
  if (movie)
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: movie?.images.poster[1].medium.film_image}}
          style={styles.ImageBackgroundStyle}>
            <TouchableOpacity onPress={()=>{
              setModalVisible(true)
            }}>
            <Image
            source={require('../images/play.png')}
            style={styles.playIconStyle}
            resizeMode={'stretch'}
          />
            </TouchableOpacity>
         
        </ImageBackground>
        <View style={styles.descriptionContainerStyle}>
          <Text style={styles.movieNameStyle}>
            {movie.film_name}
          </Text>
          <Text style={styles.movieDurationStyle}>
            {movie.release_dates[0].release_date} {movie.genres[0].genre_name}{' '}
            {movie.duration_mins}
          </Text>
          <AirbnbRating
            count={5}
            defaultRating={movie.review_stars}
            size={20}
            starContainerStyle={{marginVertical: 10}}
            showRating={false}
          />
          <Text
            style={styles.movieDescriptionStyle}
            numberOfLines={4}>
            {movie.synopsis_long}
          </Text>
          <TouchableOpacity onPress={()=>{
            bookMovie();
          }} style={{width: '95%', marginVertical: 20}}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Book ticket</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '95%'}}
          onPress={()=>{
           onShare(movie.film_name,movie.synopsis_long);
          }}
          >
            <View style={[styles.buttonContainer,{backgroundColor: 'grey'}]}>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
        <VideoPlayerModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
       
      </View>
    );
}
export default MovieDetails;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: '90%',
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  ImageBackgroundStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  playIconStyle: {width: 90, height: 90},
  descriptionContainerStyle: {flex: 1, backgroundColor: 'black', alignItems: 'center'},
  movieNameStyle: {color: 'white', fontSize: 20, fontWeight: 'bold',marginVertical:10},
  movieDurationStyle: {color: 'grey', fontSize: 16, fontWeight: 'bold'},
  movieDescriptionStyle: {color: 'grey', fontSize: 12, fontWeight: 'bold'},
  buttonText: {fontSize: 18, fontWeight: 'bold'}
});
