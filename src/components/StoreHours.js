import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

class StoreHours extends Component {
    render() {
        const { cardSecTextStyle } = styles;
        const hours = '8:00 a.m. - 5:30 p.m.\n';
        return (
            <View>
                <Text style={cardSecTextStyle}>Store Hours{"\n"}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', lineHeight: 20 }}>
                        Monday{"\n"}
                        Tuesday{"\n"}
                        Wednesday{"\n"}
                        Thursday{"\n"}
                        Friday{"\n"}
                        Saturday{"\n"}
                        Sunday
                        </Text>
                    <Text style={{ fontSize: 16, marginLeft: 15, lineHeight: 20 }}>
                        {hours}
                        {hours}
                        {hours}
                        {hours}
                        {hours}
                        {hours}
                        Closed
                        </Text>
                </View>
            </View>
        )
    }
}
const styles = {
    cardSecTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
}

export { StoreHours };