import React from 'react';
import { View, Text, TouchableHighlight, Button, TextInput, Alert, StyleSheet } from 'react-native';
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
                { text: 'instructions', onPress: () => Actions.instructions() },
                { text: 'yes', onPress: () => Actions.game() },
                { text: 'nope', onPress: () => Actions.pussy() }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ENTER YOUR USERNAME:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='USERNAME'
                    autoCapitalize="characters"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <Button
                    color="#8730ff"
                    title='   SIGN UP   '
                    
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

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        marginTop: 60,
        marginBottom: 20,
        color:"#8730ff"
    },
    input: {
        width: "90%",
        height: 50,
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "red",
        padding: 5,
        paddingLeft: 10,
        margin: 20,
    }


})

export default connect(mapStateToProps, { signUp })(SignUp)