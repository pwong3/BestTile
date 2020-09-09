import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native';

class Holidays extends Component {
    render() {
        const { cardSecTextStyle, bodyTextStyle } = styles;
        return (
            <View>
                <Text style={cardSecTextStyle}>Holidays</Text>
                    <Text style={bodyTextStyle}>We are also closed on the following holidays:{"\n"}</Text>
                    <Text style={bodyTextStyle}>
                        New Years Day (January 1st){"\n"}
                        Independence Day (July 4th){"\n"}
                        Thanksgiving (4th Thursday of November){"\n"}
                        Christmas Day (December 25th)
                    </Text>
            </View>
        )
    }
}
const styles = {
    cardSecTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    bodyTextStyle: {
        fontSize:16,
        lineHeight: 20
    }
}

export { Holidays };