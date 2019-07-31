import React from 'react';
import { View, Text, Image } from 'react-native';
// import {List, ListItem} from 'react-native-elements'

export default function Scores(props) {
    console.log("PROPS?", props)
    const scores = props.scores             //users -> id, username, stress

    const list = (scores) => {
        console.log("LIST IS RUNNING", scores)
        return scores.map(user => {
            return (
                <View>
                    <Text key={user.id}>{user.username} --> {user.stress}</Text>
                </View>
            )
        })
    }

    if (scores.length === 0) {
        return (
            <Text>Loading scores...</Text>
        )
    } else {
        return (
            <View>
                {list(scores)}
            </View>
        )
    }
}