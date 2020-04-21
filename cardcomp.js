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

class CardComponent extends Component {

    

    render() {

        const images = {

            "1": require('./assets/feed_images/1.jpg'),
            "2": require('./assets/feed_images/2.jpg'),
            "3": require('./assets/feed_images/3.png')
        }

        return (
            <Card stylr={{width: 100}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('./assets/me.jpg')} />
                        <Body>
                            <Text>Deniz </Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
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
        flex: 1,
        borderLeftWidth: 20,
    }
});