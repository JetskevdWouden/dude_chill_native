import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Pussy extends React.Component {
  render() {
    return (
        <View style={{justifyContent:"center"}}>
        <Image
            style={{ width: 400, height: 400, marginTop: 100, marginLeft: 5}}
            source={{uri: `https://media.giphy.com/media/4HcDFepOILH7M2L9aq/giphy.gif`}}
        />
        </View>
    );
  }
}
