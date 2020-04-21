import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackRouter } from 'react-navigation';
import CardComponent from './CardComponent';
import Moment from 'moment';
export default class profile extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    name: "",
    surname: "",
    url: "",
    hits: { posts: []},
    post: [],
    shares: [],
    temp: "",
  };
}



componentDidMount(){
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dGVzdDpZdXN1ZjE3Nw==");
const {id} = this.props.navigation.state.params;
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

fetch("http://192.168.1.106:8000/api/v0/posts/", requestOptions)
.then(response => response.json())
.then(result => this.setState({url: result.results[0].owner}))
.then(() => {if(1 == 1){
  fetch(this.state.url, requestOptions)
    .then(response => response.json())
    .then(result => this.setState({name: result.username, surname: result.last_name, hits: result}))
    .then(console.log(this.state.hits))
    .then(() => {for(let i = 0; i < this.state.hits.posts.length; i ++){
      fetch(this.state.hits.posts[i], requestOptions)
      .then(response => response.json())
      .then(result => this.state.post[i] = result)
      .then(console.log(i))
      .then(console.log(this.state.post[i]))
    }})
    

}}
  
)

}

  render() {
    return (
    <View>
     
      <Text>{this.state.name}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});