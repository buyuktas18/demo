import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import {createAppContainer, withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base'
import MaterialCardWithImageAndTitle from "./components/src/components/MaterialCardWithImageAndTitle";
import MaterialButtonShare from "./components/src/components/MaterialButtonShare";

class CardComponent extends Component {

    

    render() {

        const images = {

            "1": require('./assets/feed_images/1.jpg'),
            "2": require('./assets/feed_images/2.jpg'),
            "3": require('./assets/feed_images/3.png')
        }

        return (
            <Card style={{borderRadius: 50}}>
            <CardItem style={{borderRadius: 5}}>
                <Left>
                    
                    <Body>
                        <Text>Deniz </Text>
                        <Text note>{this.props.date}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Right>
            <TouchableOpacity style={styles.button_m} onPress={this.componentDidMount}>
            <Icon name="crosshairs" size = {30} style={styles.icon_m}/>
          </TouchableOpacity>
          </Right>
            </CardItem>
            
            <CardItem>
                <Body>
                    <Text>
                        <Text style={{ fontWeight: "900" }}>Deniz
                        </Text>
                        {this.props.title}
                    </Text>
                </Body>
            </CardItem>
        </Card>   
       
        
        
      
        );
    }
}
export default withNavigation(CardComponent);

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
    },
    button_m: {
        backgroundColor: '#000',
        borderRadius: 30,
    },
    icon_m: {
        color: '#fff',
    }
 

});