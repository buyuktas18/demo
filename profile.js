import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deniz BÜYÜKTAŞ 
        
        Student at ITU{"\n"}
        Last activities... {"\n"}
        
        ADD+ </Text>
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