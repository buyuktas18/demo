import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {createAppContainer, withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
/*const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';


const Base64 = {
    btoa: (input:string = '')  => {
      let str = input;
      let output = '';
  ​
      for (let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || (map = '=', i % 1);
      output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
  ​
        charCode = str.charCodeAt(i += 3/4);
  ​
        if (charCode > 0xFF) {
          throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        
        block = block << 8 | charCode;
      }
      
      return output;
    }}*/
class test extends React.Component {
  
  /*componentDidMount() {
    fetch('http://127.0.0.1:8000/api/v0/posts/', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.results,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }*/
  componentDidMount(){
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dGVzdDpZdXN1ZjE3Nw==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/v0/posts/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
    render() {
        const images = {

        "1": require('./assets/feed_images/1.jpg'),
        "2": require('./assets/feed_images/2.jpg'),
        "3": require('./assets/feed_images/3.png')
    }
    //const { error, isLoaded, items } = this.state;
    /*if (error) {
        return <Text>Error: {error.message}</Text>;
      } else if (!isLoaded) {
        return <Text>Loading...</Text>;
      } 
    else{*/
    
    
       
        
        
    

   
    
        return (
           
         <Text>
           aa
         </Text>
               
         
        );
      }
    }
  //}

export default test;

const styles = StyleSheet.create({
container: {
    flex: 1,
    borderLeftWidth: 20,
}
});
