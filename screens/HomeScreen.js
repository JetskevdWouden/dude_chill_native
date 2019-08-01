import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>Dude, chill...</Text>
        <Text style={styles.intro}>The app to test your stress sensitivity</Text>
        <Image style={styles.image} source={{ uri: `https://emojis.slackmojis.com/emojis/images/1542340471/4979/thinking.gif?1542340471` }} />
        <Button color="#8730ff" style={styles.button} onPress={() => Actions.signUp()} title="   START   " />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "#8730ff",
    margin: 30
  },
  intro: {
    fontSize: 20,
    color: "#090c54"
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
})


