/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';
import { Card } from '../components/common';

class HomePromoCard extends Component {
  render() {
    const { cardTextStyle } = styles;
    return (
      <Card>
        <ImageBackground
          style={{ width: '100%', height: 250 }}
          resizeMode={'cover'}
          source={require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/ezWedge.jpg')}>
          <Text style={cardTextStyle}>
            EZ Wedge{'\n'}
            Stay leveled!
          </Text>
        </ImageBackground>
      </Card>
    );
  }
}

const styles = {
  cardTextStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'right',
    padding: 25,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowRadius: 10,
  },
};

export { HomePromoCard };
