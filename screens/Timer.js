import React from 'react'
import {Text, View, Animates, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Animated from 'react-native-reanimated';

export default class Timer extends React.Component {
    state = {
        animation: new Animated.Value(0)
    }

    handlePress = () => {
        //what happens when press button --> next gif
        this.state.animation.setValue(0);
        this.state.opacity.setValue(1);

        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 2000
        }).start(({finished}) => {
            if(finished) {
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200
                })
            }
        });
    }

    render() {

        const progessInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp"
        })

        const colorInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(71,255,99)", "rgb(99,71,255)"]
            // outputRange: ["#2375fa", "#2375fa"]

        })

        const progressStyle = {
            width: progessInterpolate,
            bottom: 0,
            backgroundColor: colorInterpolate,
            opacity: this.state.opacity
        }

        return (
            <View style={styles.container}>
                <TouchabkeWithoutFeedback onPress={this.handlePress}>
                    <View style={styles.button}>
                        <View style={StyleSheet.absoluteFill}>
                            <Animated.View style={[styles.progess,progressStyle]} />
                        </View>
                        <Text style={styles.buttonText}>
                            NEXT
                        </Text>
                    </View>
                </TouchabkeWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#e6537d",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 60,
        paddingVertical: 10,
        overflow: "hidden"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24,
        backgroundColor: "transparent"
    },
    progress: {
        position: "absolute",
        top: 0,
        left: 0
    }

})