import React from 'react';
import { View, Text, TouchableHighlight, Button, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux'
import { signUp } from '../actions/user'
import { Actions } from 'react-native-router-flux';

export class SignUp extends React.Component {
    state = {
        username: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    pressHandler() {
        this.props.signUp(this.state.username)
        Alert.alert(
            `Hey ${this.state.username}!`,
            `...are you ready to get stressed?!`,
            [
                {text: 'instructions', onPress: () => Actions.instructions()},
                {text: 'yes', onPress: () => Actions.game()},
                {text: 'nope', onPress: () => Actions.pussy()}
            ],
            {cancelable: false}
        )
    }

    render() {
        console.log("STATE?", this.props.user)
        return (
            <View>
                <Text>USERNAME</Text>
                <TextInput
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <Button
                    title='Sign Up'
                    onPress={() => this.pressHandler()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { signUp })(SignUp)