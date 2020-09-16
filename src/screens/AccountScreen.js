/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from '../components/common';

class AccountScreen extends Component {
  _onLogout = () => {
    firebase.auth().signOut().then(
      this._navigateToAuthLoadingScreen,
      // Sign-out successful.
    );
  };
  _navigateToAuthLoadingScreen = () => {
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View>
        <Text>Welcome to your account</Text>
        <Button
          style={{ fontSize: 17, color: 'white' }}
          onPress={this._onLogout}>
          Logout
        </Button>
      </View>
    );
  }
}

export { AccountScreen };
