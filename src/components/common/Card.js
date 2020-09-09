import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#ddd',
        borderWidth: 1,
        //shadowColor: '#000',
        //shadowOffset: { width:1, height:12 },
        //shadowOpacity: 0.5,
        //shadowRadius: 10,
        elevation: 0.3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    }
};

export { Card };
