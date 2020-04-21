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
          refreshing: true,
          answer: [],
          users: [],
          temp: []
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
    
    fetch("http://192.168.1.106:8000/api/v0/posts/", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({hits: result, refreshing: false }))
      .then(() => {if((this.state.hits.next) != 'null'){
        fetch(this.state.hits.next, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({answer: this.state.hits.results.concat(result.results)}))
            .then(() =>
                this.state.answer.map((item) => {
                fetch(item.owner, requestOptions)
                    .then(response => response.json())
                    .then(result => this.state.temp.push(result.username))    
                    .then(() => this.setState({users: this.state.temp}))
                }))
            .then(() => console.log(this.state.users));

      
            
            
              
      }})
      

      
      
      //.catch(error => console.log('error', error));
    }
 
  
                            
    

    handleRefresh() {
        this.setState(
          {
            refreshing: false
          },
          () => this.componentDidMount()
        );
      }
    

    render() {
        const {hits} = this.state;
        
    
        return (
            <Container style={styles.container}>
                <Content>
                    
                    <FlatList
                        data={this.state.answer}
                        renderItem={({ item }) => <CardComponent userId = {item.id - 1}  user={this.state.users[this.state.hits.count - item.id]} title={item.title} date= {Moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')} />}
                        keyExtractor={item => item.id} 
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh.bind(this)}
                        
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
