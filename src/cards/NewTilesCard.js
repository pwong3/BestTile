import React, { Component } from 'react';
import {
    Text,
    ImageBackground
} from 'react-native';
import { Card } from '../components/common';

class NewTilesCard extends Component {
    render() {
        const { cardTextStyle } = styles;
        return (
            <Card>
                <ImageBackground
                    style={{ width: '100%', height: 220 }}
                    resizeMode={'cover'}
                    source={require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/newTiles.jpg')}
                >
                    <Text style={cardTextStyle}>NEW!</Text>
                </ImageBackground>
            </Card>
        )
    }
}

const styles = {
    cardTextStyle: {
        
        fontSize: 25,
        color: 'white',
        textAlign: 'right',
        padding: 25,
        textShadowColor: 'black',
        textShadowRadius: 10,
        fontWeight: 'bold'
    }
};

export { NewTilesCard };
