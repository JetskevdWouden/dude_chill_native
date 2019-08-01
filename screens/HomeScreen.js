import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Summary here...</Text>
        <Text onPress={() => Actions.signUp()}>Sign Up</Text>
      </View>
    );
  }
}


