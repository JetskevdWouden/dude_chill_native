import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './store'
import GameContainer from './screens/GameContainer';
import SignUp from './screens/SignUp'
import Timer from './screens/Timer'
import SliderBar from './screens/Slider'
import ScoresContainer from './screens/ScoresContainer'
import HomeScreen from './screens/HomeScreen'
import Instructions from './screens/Instructions'
import Pussy from './screens/Pussy'
import PlayerScore from './screens/PlayerScore'

import { Router, Scene, Stack } from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={HomeScreen} title="Home" initial />
            <Scene key="signUp" component={SignUp} title="Sign Up" />
            <Scene key="instructions" component={Instructions} title="How to get Stressed!" />
            <Scene key="pussy" component={Pussy} title="Too bad..." />
            <Scene key="game" component={GameContainer} title="Stress Test" />
            <Scene key="score" component={PlayerScore} title="Your Score"/>
            <Scene key="scores" component={ScoresContainer} title="Scores" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 50
  },
});
