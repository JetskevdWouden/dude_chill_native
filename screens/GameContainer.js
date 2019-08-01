import React from 'react';
import { View, Text, Button, Slider } from 'react-native';
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
            console.log("VALUE", this.state.value, "STRESS" ,this.state.stress)
            this.setState({
                stress: this.state.stress + this.state.value,
            })
            this.setState({
                value: 0
            })
            console.log("VALUE", this.state.value, "STRESS" ,this.state.stress)
        } else {
            const score = Math.floor(this.state.stress * 10)
            this.props.addScore(this.props.user.id, score)
            Actions.score()
        }
        return
    }

    render() {
        return (
            <View>
                <Text>THE GAME</Text>
                <Game game={this.props.game[this.state.index]} />
                {/* <Game game={this.state.game[this.state.index]} /> */}
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Slider
                        value={this.state.value}
                        // onValueChange={stress => this.setState({ stress })}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Text>Stress: {Math.floor(this.state.value * 10)}</Text>
                </View>
                <Timer clickNext={this.clickNext} />
                <Button onPress={() => this.clickNext()} title="NEXT" />
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

export default connect(mapStateToProps, { getGame, addScore })(GameContainer)