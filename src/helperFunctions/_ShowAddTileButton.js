import React, { Component } from 'react';
import { Card } from '../components/common';
import { ModalAddNewTile } from '../cards';
import firebase from 'react-native-firebase';

const user = firebase.auth().currentUser;

class _ShowAddTileButton extends Component {
    render() {
        if (user.uid=='dmUt7FjRT3hMMwgUZSFtZPSe4kv1') {
            return <Card><ModalAddNewTile /></Card>; 
        }
        else
            return null;
    }
}

export { _ShowAddTileButton };