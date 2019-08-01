import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Instructions extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>How to get Stressed: </Text>
        <Text>add explination here...</Text>
        <Button onPress={() => Actions.game()} title="STRESS"/>
      </View>
    );
  }
}