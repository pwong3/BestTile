/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { Card } from '../components/common/Card';
import fire from '../config/fire';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../components/common';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const dbRef = fire.database().ref();
const tilesRef = dbRef.child('tiles');

class AddNewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      newTileName: '',
      newTileMaterial: '',
      newMadeIn: '',
      newTileSize: '',
      loading: false,
      imgSource: '',
    };
  }

  onPressAdd = () => {
    if (this.state.newTileName.trim() === '') {
      alert('Tile name is blank');
      this.newNameTextInput.focus(); //moves cursor to this input box
      return;
    } else if (this.state.newTileMaterial.trim() === '') {
      this.newMatTextInput.focus();
      alert('Tile material is blank'); //moves cursor to this input box
      return;
    } else if (this.state.newMadeIn.trim() === '') {
      alert('Tile price is blank');
      this.newMadeInTextInput.focus(); //moves cursor to this input box
      return;
    } else if (this.state.newTileSize.trim() === '') {
      alert('Tile size is blank');
      this.newSizeInput.focus(); //moves cursor to this input box
      return;
    } else this.newNameTextInput.focus(); //moves cursor to top input box

    tilesRef.push({
      tileName: this.state.newTileName,
      tileMaterial: this.state.newTileMaterial,
      tileMadeIn: this.state.newMadeIn,
      tileSize: this.state.newTileSize,
    });

    ToastAndroid.show(this.state.newTileName + ' is added', ToastAndroid.SHORT);
    this.clearText();
  };

  //clears input boxes after clicking add
  clearText = () => {
    this.setState({ newTileName: '' });
    this.setState({ newTileMaterial: '' });
    this.setState({ newMadeIn: '' });
    this.setState({ newTileSize: '' });
  };
  render() {
    const { textInputStyle } = styles;
    return (
      <View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{ marginTop: 20, marginBottom: 10 }}>
            Please enter in all fields.
          </Text>
          <TextInput
            style={textInputStyle}
            keyboardType={'default'}
            ref={(input) => {
              this.newNameTextInput = input;
            }}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.newMatTextInput.focus();
            }}
            placeholderTextColor="grey"
            placeholder="Enter new tile name"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({ newTileName: text });
            }}
            value={this.state.newTileName}
          />
          <TextInput
            style={textInputStyle}
            keyboardType={'default'}
            ref={(input) => {
              this.newMatTextInput = input;
            }}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.newMadeInTextInput.focus();
            }}
            placeholderTextColor="grey"
            placeholder="Enter new tile material"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({ newTileMaterial: text });
            }}
            value={this.state.newTileMaterial}
          />
          <TextInput
            style={textInputStyle}
            keyboardType={'numeric'}
            ref={(input) => {
              this.newMadeInTextInput = input;
            }}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.newSizeInput.focus();
            }}
            placeholderTextColor="grey"
            placeholder="Enter country made in"
            autoCapitalize="none"
            onChangeText={(madeIn) => {
              this.setState({ newMadeIn: madeIn });
            }}
            value={this.state.newMadeIn}
          />
          <TextInput
            style={textInputStyle}
            keyboardType={'default'}
            ref={(input) => {
              this.newSizeInput = input;
            }}
            onSubmitEditing={() => {
              this.newNameTextInput.focus();
            }}
            placeholderTextColor="grey"
            placeholder="Enter new tile size"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({ newTileSize: text });
            }}
            value={this.state.newTileSize}
          />
          <View style={{ width: 60, margin: 10 }}>
            <Button
              onPress={() => {
                this.onPressAdd();
              }}>
              <Text style={{ flex: 1, padding: 5 }}>Add</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
};
export { AddNewTile };
