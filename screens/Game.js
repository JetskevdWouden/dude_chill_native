import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Game(props) {
    console.log("PROPS", props)
    const game = props.game

    if (!game) {
        return (
            <Text>Loading game...</Text>
        )
    } else {
        return (
            <View style={styles.continer}>
                <Image
                    style={styles.image}
                    source={{uri: `${game.url}`}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center"
    },
    image :{
        width: 400,
        height: 450,
        borderWidth: 30,
        borderColor: "red",
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 30,
        padding: 10
    }

})