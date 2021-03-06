import React from 'react';
import { Slider } from 'react-native-elements';
import { View, Text } from 'react-native';

export default class SliderBar extends React.Component {
    state = {
        value: 0
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        )
    }
}
