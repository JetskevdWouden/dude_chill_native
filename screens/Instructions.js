import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Instructions extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>MEASURING YOU STRESS SENSITIVITY</Text>
        <Text style={styles.intro}>You will get to see 8 GIFs</Text>
        <Text style={styles.intro}>Per GIF move the stress slider</Text>
        <Text style={styles.intro}>between the value 0 and 10</Text>
        <Text style={styles.intro}>0 meaning: no stress, super chill</Text>
        <Text style={styles.intro}>10 meaning: AHH!!!</Text>
        <Text style={styles.intro}>press NEXT after you have filled in your answer</Text>
        <Text style={styles.intro}>try to finish the test within the time given in the time bar</Text>
        <Text style={styles.intro}>Get your stress score at the end</Text>
        <Text style={styles.intro}>and check how others did</Text>
        <Button color="#090c54" onPress={() => Actions.game()} title="   GO STRESS  "/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color:"#8730ff",
    margin: 20,
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  intro: {
    fontSize: 15,
    color: "#090c54",
    margin: 2,
    marginBottom: 30
  }
})