import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Card, CardSection } from '../components/common';

class AboutUsScreen extends Component {
  static navigationOptions = {
    title: 'About Us',
    headerStyle: { 
      backgroundColor: 'red',
      height: 50 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 20,
    },
  };

  render() {
    const { cardTextStyle } = styles;

    return (
      <ScrollView
        backgroundColor="rgb(230,230,230)" //background color under the cards
      >
        <Card>
          <Text style={{ margin: 5 }}>
            Founded in 1989, Best Tile opened its door to provide homeowners and
            contractors with quality tile when they want it and at low prices.
            With a small showroom and warehouse, Best Tile began to build its
            inventory of American, Spanish and Italian tiles.{'\n'}
            {'\n'}
            Today, we have two locations, with a showroom warehouse in San
            Francisco and Santa Clara. With over 5,000 square feet of dedicated
            showroom space and the added convenience of a parking lot at each of
            our location, we have one of the largest showrooms in the Bay Area.
            {'\n'}
            {'\n'}
            And with the ever increasing styles, Best Tile excels in providing a
            large selection to its customers. With one of the largest
            inventories in San Francisco, we offer over 300 styles with our wide
            variety of ceramic, porcelain and stone tiles, kitchen cabinets,
            bathroom vanities, granite countertops and faucets. With our large
            selection, we have had customers coming from as far away as Reno and
            Los Angeles.{'\n'}
            {'\n'}
            With our knowledgeable sales associates, we are able to provide you
            with the information you need to make a good choice for your tiling
            needs. Many of our sales associates have more than 10 years of
            experience. Our sales associates do not have sales quotas and are
            not paid by commission. We feel this is the best way to provide you
            with a pressure free shopping experience. Whether you are remodeling
            your half bath or building a new kitchen, our knowledgeable sales
            associates can help.
          </Text>
        </Card>
      </ScrollView>
    );
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
  },
};

export { AboutUsScreen };
