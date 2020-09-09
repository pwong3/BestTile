import React from 'react';
import { View } from 'react-native';

const TileCard = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex : 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 12 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        margin: 5,
        
    }
};

export { TileCard };
