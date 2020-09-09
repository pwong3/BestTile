import React from 'react';
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <View style={buttonStyle}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('red', true)}
                delayPressIn={0}
                onPress={onPress}
            >
                <View style={buttonStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        backgroundColor: 'white',
        //borderTopWidth: 0.6,
        borderColor: '#ddd',
        borderWidth: 0.6,
        borderRadius: 10,
    }
}
export { Button };
