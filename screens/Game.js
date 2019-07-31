import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Game(props) {
    console.log("PROPS", props)
    const game = props.game

    if (!game) {
        return (
            <Text>Loading game...</Text>
        )
    } else {
        return (
            <View>
                <Image
                    style={{ width: 400, height: 400 }}
                    source={{uri: `${game.url}`}}
                />
            </View>
        )
    }
}