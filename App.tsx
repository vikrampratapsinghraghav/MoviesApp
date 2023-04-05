import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NearByCinemas from './components/NearByCinemas';
import MovieDetails from './components/MovieDetails';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore()

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store = { store }>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={NearByCinemas} options={{headerShown: false}} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

export default App;