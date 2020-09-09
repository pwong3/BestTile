import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from '../components/common';
import { _ShowAddTileButton } from '../helperFunctions';

const user = firebase.auth().currentUser;

class AuthAccountScreen extends Component {
    _onLogout = () => {
        firebase.auth().signOut()
            .then(this._navigateToAuthLoadingScreen
                // Sign-out successful.
            );
    }
    _navigateToAuthLoadingScreen = () => {
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View>
                <_ShowAddTileButton />
                <Button
                    style={{ fontSize: 17, color: 'white' }}
                    onPress={this._onLogout}
                >
                    Logout
                </Button>
            </View>
        )
    }
}

export { AuthAccountScreen };