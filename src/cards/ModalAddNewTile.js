import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  Modal,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { AddNewTile } from '../cards';
import { Button, Card } from '../components/common';

class ModalAddNewTile extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalStyle, textStyle } = styles;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)} //back button close modal
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <AddNewTile />
            <View style={{ width: 60, marginTop: 10 }}>
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Done</Text>
              </Button>
            </View>
          </View>
        </Modal>
        <View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red', true)}
            delayPressIn={0}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <View>
              <Text style={textStyle}>Add Tile</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = {
  modalStyle: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { ModalAddNewTile };
