import React, { Component } from 'react';
import { NewProdsListScreen } from './NewProdsListScreen';

class NewProdsScreen extends Component {
    static navigationOptions = {
        title: 'New',
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16
        },
    }

    render() {
        return (
            <NewProdsListScreen navigation={this.props.navigation} /> //passes navigation to NewProdsList
        )
    }
}

export { NewProdsScreen };
