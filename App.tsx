import React from 'react';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}