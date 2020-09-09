//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
//make component abailable to other parts of app
export { Header };
