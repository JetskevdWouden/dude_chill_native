import React from 'react';
import { View, Text, Button, Slider, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getGame } from '../actions/game'
import { addScore } from '../actions/scores'
import Game from './Game'
import { Actions } from 'react-native-router-flux';
import Timer from './Timer'

import * as request from 'superagent'

export class GameContainer extends React.Component {
    state = {
        index: 0,
        game: [],
        stress: 0,
        value: 0
    }

    baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

    componentDidMount() {
        console.log("HELLO")
        this.props.getGame()
        // this.getGame()

    }

    // getGame = () => dispatch => {
    // getGame() {
    //     console.log("GETGAME IS RUNNING")
    //     request
    //         .get(`${this.baseUrl}/content`)
    //         .then(response => {
    //             console.log("RESPONSE", response.body)
    //             this.setState({
    //                 game: response.body.content
    //             })
    //             console.log("GAME?", this.state.game)
    //             // dispatch(setGame(response.body.content))
    //         })
    //         .catch(console.error)
    // }

    clickNext() {
        if (this.state.index < 7) {
            this.setState({
                index: this.state.index + 1
            })
            this.setState({
                stress: this.state.stress + this.state.value,
            })
            this.setState({
                value: 0
            })
        } else {
            const score = Math.floor(this.state.stress * 10)
            this.props.addScore(this.props.user.id, score)
            Actions.score()
        }
        return
    }

    render() {
        return (
            <View style={styles.container}>
                <Game style={styles.game} game={this.props.game[this.state.index]} />
                {/* <Game game={this.state.game[this.state.index]} /> */}
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', margin: 10 }}>
                    <Slider
                        value={this.state.value}
                        // onValueChange={stress => this.setState({ stress })}
                        onValueChange={value => this.setState({ value })}
                        style={styles.slider}
                    />
                    <Text style={styles.stress}>Stress: {Math.floor(this.state.value * 10)}</Text>
                </View>
                <View style={styles.icons}>
                    <Image style={styles.image1} source={{ uri: `https://emojis.slackmojis.com/emojis/images/1542340469/4974/notinterested.gif?1542340469` }} />
                    <Image style={styles.image2} source={{ uri: `https://emojis.slackmojis.com/emojis/images/1542340461/4964/cry.gif?1542340461` }} />
                </View>
                <Timer clickNext={this.clickNext} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button color="#090c54" style={styles.button} onPress={() => this.clickNext()} title="   NEXT   " />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        user: state.user
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        alignItems: "center",
        marginTop: 50,

    },
    game: {
        alignItems: "center",
        padding: 3,
        borderColor: "#8730ff",
        borderWidth: 5,
    },
    slider: {
        height: 10
    },
    stress: {
        fontSize: 25,
        margin: 5,

    },
    icons: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image1: {
        width: 60,
        height:60,
        // justifyContent:"flex-start",
        margin: 10
    },
    image2: {
        width: 60,
        height:60,
        // justifyContent:"flex-start",
        margin: 10
    }
})

export default connect(mapStateToProps, { getGame, addScore })(GameContainer)