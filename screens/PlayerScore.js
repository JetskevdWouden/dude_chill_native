import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class PlayerScore extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your STRESS Score</Text>
        <Text style={styles.title}>||{this.props.user.username}||</Text>
        <Text style={styles.title}>{this.props.user.stress} out of 80</Text>
        <Image style={styles.image} source={{ uri: `https://emojis.slackmojis.com/emojis/images/1471119455/979/deal_with_it_parrot.gif?1471119455` }} />
        <Button color="#090c54" onPress={() => Actions.scores()} title="  ALL SCORES  " />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: "#8730ff",
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
    color: "#090c54",
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',

    margin: 20
  }
})

export default connect(mapStateToProps, null)(PlayerScore)