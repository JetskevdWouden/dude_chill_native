import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import {List, ListItem} from 'react-native-elements'

export default function Scores(props) {
    const scores = props.scores             //users -> id, username, stress

    const list = (scores) => {
        return scores.map(user => {
            return (
                <View style={styles.row}>
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
            <ScrollView style={styles.list}>
                {list(scores)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 10
    },
    row: {
        fontSize: 20,
        margin: 3,
        color: "#8730ff"
    }
})