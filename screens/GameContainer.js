import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { getGame } from '../actions/game'
import Game from './Game'
import * as request from 'superagent'

export class GameContainer extends React.Component {
    state = {
        index: 0,
        game: []
    }

    baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

    componentDidMount() {
        console.log("HELLO")
        // this.props.getGame()
        this.getGame()

    }

    // getGame = () => dispatch => {
    getGame() {
        console.log("GETGAME IS RUNNING")
        request
            .get(`${this.baseUrl}/content`)
            .then(response => {
                console.log("RESPONSE", response.body)
                this.setState({
                    game: response.body.content
                })
                console.log("GAME?", this.state.game)
                // dispatch(setGame(response.body.content))
            })
            .catch(console.error)
    }

    clickNext() {
        if (this.state.index < 7) {
            this.setState({
                index: this.state.index + 1
            })
        }
        return
    }

    render() {
        console.log("REDUX STATE GAME", this.props.game)
        return (
            <View>
                <Text>THE GAME</Text>
                {/* <Game game={this.props.game[0]} /> */}
                <Game game={this.state.game[this.state.index]} />
                <Button onPress={() => this.clickNext()} title="NEXT" />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps, { getGame })(GameContainer)