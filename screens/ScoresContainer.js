import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { getScores } from '../actions/scores'
import Scores from './Scores'
import * as request from 'superagent'
import { Actions } from 'react-native-router-flux';

export class ScoreContainer extends React.Component {
    state = {
        scores: []
    }

    baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

    componentDidMount() {
        console.log("IM RUNNING")
        // this.props.getScores()
        this.getScores()
    }

    getScores() {
        console.log("SIGNUP ACTION CREATOR")
        request
            .get(`${this.baseUrl}/all-users`)
            .then(response => {
                // console.log("RESPONSE",response.body.users)
                this.setState({
                    scores: response.body.users
                })
                // dispatch(setScores(response.body.users))
            })
            .catch(console.error)
    }

    render() {
        return (
            <View>
                {/* <Scores scores={this.props.scores} /> */}
                <Scores scores={this.state.scores} />
                <Button onPress={() => Actions.home()} title="GO HOME" />
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        scores: state.scores
    }
}

export default connect(mapStateToProps, { getScores })(ScoreContainer)