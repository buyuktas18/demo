import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import home from './home';
import profile from './profile';
import chat from './chat';
import test from './test';

const AppNavigator = createStackNavigator({
  feed: { screen: home },
  profile: { screen: profile},
  chat: { screen: chat},
  test: {screen: test},
});

export default createAppContainer(AppNavigator);
