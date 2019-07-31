import React from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import store from './store'
import { GameContainer } from './screens/GameContainer';
import SignUp from './screens/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello!</Text>
          <GameContainer />
          {/* <SignUp /> */}
        </View>
      </Provider>
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
