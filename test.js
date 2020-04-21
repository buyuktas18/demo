import * as React from 'react';
import {createAppContainer, withNavigation } from 'react-navigation';
import {TextInput, TouchableOpacity, View, styles, ScrollView, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      reward: "",
      latitude: 0,
      longitude: 0,
      error: null
    };
  }
  
  componentDidMount(){
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
  };

  sendPost(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdDpZdXN1ZjE3Nw==");
    
    var requestOptions = {
      method: 'POST',
      headers: {myHeaders,"Authorization": "Basic dGVzdDpZdXN1ZjE3Nw==", 'Content-Type': 'application/json', Accept: 'application/json',},
      redirect: 'follow',
      body: JSON.stringify({ "title": this.state.title,
        "description": this.state.description,
        "loc_lat": Number(this.state.latitude.toFixed(6)),
        "loc_long": Number(this.state.longitude.toFixed(6)),
        "reward": this.state.reward})
    }
    
    fetch("http://192.168.1.106:8000/api/v0/posts/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render(){
    return (
      <View
				style={{
					flex: 1,
					flexDirection: 'column',
			        justifyContent: 'center',
			        padding: 15
				}}>
      <View>
      <TextInput
        style={{
          height: 50
        }}
        value={this.state.title}
        onChangeText={(value) => this.setState({title: value})}
        placeholder="Title"/>
    </View>
    <View>
      <TextInput
        style={{
          height: 50
        }}
        value={this.state.description}
        onChangeText={(value) => this.setState({description: value})}
        placeholder="Description"/>
    </View>
    <View>
      <TextInput
        style={{
          height: 50
        }}
        value={this.state.reward}
        onChangeText={(value) => this.setState({reward: value})}
        placeholder="Reward"/>
    </View>
    <View
    style={{
      height: 50
    }}>
    <Button
        title="POST" // butonun yazısı
        color="#4285f4" // arkaplan rengi
        onPress={this.sendPost.bind(this)} /* butona tıklandığında tetiklenecek fonksiyon*/ />
  </View>
</View>
    );
  }
}

