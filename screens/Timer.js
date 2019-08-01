import React from 'react';
import { Platform, StyleSheet, Text, View, Animated } from 'react-native';

export default class Timer extends React.Component {
    state = {
        progressStatus: 0
    }

    anim = new Animated.Value(0)

    componentDidMount() {
        this.onAnimate();
        // this.props.clickNext();
    }

    onAnimate = () => {
        this.anim.addListener(({ value }) => {
            this.setState({ progressStatus: parseInt(value, 10) });
        });
        Animated.timing(this.anim, {
            toValue: 100,
            duration: 30000,
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Animated.View
                        style={[
                            styles.inner, { width: this.state.progressStatus + "%" },
                        ]}
                    />
                    <Animated.Text style={styles.label}>
                        {/* {this.state.progressStatus}s */}
                        TIME
            </Animated.Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 15
    },
    timeContainer: {
        width: "90%",
        height: 40,
        padding: 3,
        borderColor: "#8730ff",
        borderWidth: 3,
        borderRadius: 0,
        marginTop: 5,
        justifyContent: "center",
    },
    inner: {
        width: "100%",
        height: 30,
        borderRadius: 0,
        backgroundColor: "red",
        justifyContent: "center",

    },
    label: {
        fontSize: 23,
        color: "#3037ff",
        position: "absolute",
        zIndex: 1,
        alignSelf: "center",
    }
}); 