import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'
//import { Container, Content, Icon } from 'native-base'
//import { Icon } from 'react-native-elements'

import Moment from 'moment';
import { Container, Content} from 'native-base';
import CardComponent from './CardComponent';

class HomeTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
          hits: { results: []},
          
        };
      }
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{color: tintColor, fontSize: 35}} />
        )
    }

    componentDidMount(){
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdDpZdXN1ZjE3Nw==");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://192.168.43.142:8000/api/v0/posts/", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({hits: result,
      }));
      
    
      //.catch(error => console.log('error', error));
    }
    

    render() {
        const {hits} = this.state;
        const images = {
        "1": require('./assets/feed_images/1.jpg'),
        "2": require('./assets/feed_images/2.jpg'),
        "3": require('./assets/feed_images/3.png')
    }
    var dates = [];
    dates = hits.results.map(item => item.created_at);
        return (
            <Container style={styles.container}>
                <Content>
                    
                    <FlatList
                         data={this.state.hits.results}
                        renderItem={({ item }) => <CardComponent title={item.title} date= {Moment(dates[5 - item.id]).format('MMMM Do YYYY, h:mm:ss a')} />}
                        keyExtractor={item => item.id}
      />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        marginLeft: 50,
        marginTop: 400,
        backgroundColor: 'transparent',
        opacity: 1,
        marginRight:50,
    },
    icon: {
        fontSize: 35
        
    }
    });
