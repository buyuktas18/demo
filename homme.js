/*This is an Example of React Native Map*/
import React from 'react';
import { Platform, Alert, ActivityIndicator, StyleSheet, Button, Text, View , TextInput, TouchableOpacity} from 'react-native';
import MapView, {Marker, Circle} from 'react-native-maps';
import HomeTab from './HomeTab.js';
import Constants from 'expo-constants';
import CircleButton from 'react-native-circle-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer, withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 
class home extends React.Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);


    
}



state = {
  latitude: 41.105771,
  longitude: 29.025406,
  error: null,
}




  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );


  }


  render() {
    

    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 41.105771, 
            longitude: 29.025406,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
        <Marker draggable
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}>
            <View>
              <TouchableOpacity style={styles.feed_new}>
                <Icon name="calculator" size = {30}/>
              </TouchableOpacity>
            </View>
            
          </Marker>
        </MapView>
        <HomeTab style={styles.feed} onPress={() => { console.log('puff') }}/>
        <TouchableOpacity style={styles.button} onPress={ ()=> this.props.navigation.navigate('test')}>
            <Icon name="user" size = {30} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_r} onPress={this.componentDidMount}>
            <Icon name="crosshairs" size = {30} style={styles.icon_r}/>
          </TouchableOpacity>
      </View>
    );
  }
}


 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  feed: {
    width: 500,
    opacity: 0.5,
  },
  button: {
      position: 'absolute',
      top: 40,
      bottom: 200,
      left: 30,
      right: 100,
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor: '#fff',
 
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 18,
  },
  button_r:{
    position: 'absolute',
      top: 40,
      right: 30,
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor: '#fff',
  },
  icon_r: {
    position: 'absolute',
    top: 16,
    right: 18,
  },
  feed_new: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor: '#519',
    justifyContent: 'center',
    alignItems:'center',
  },
});

export default home
