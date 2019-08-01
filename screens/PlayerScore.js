import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class PlayerScore extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Your STRESS Score</Text>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.stress}</Text>
        <Text onPress={() => Actions.scores()}>ALL SCORES</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(PlayerScore)