/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';
import { Card } from '../components/common';

class ShopDeptsCard extends Component {
  render() {
    const { cardTextStyle } = styles;
    return (
      <Card>
        <ImageBackground
          style={{
            width: '100%',
            height: 250,
          }}
          resizeMode={'cover'}
          source={require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/showroom1.jpg')}>
          <Text style={cardTextStyle}>Shop Departments{'\n'}</Text>
        </ImageBackground>
      </Card>
    );
  }
}

const styles = {
  cardTextStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'left',
    padding: 25,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
};

export { ShopDeptsCard };
