/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, ScrollView, Dimensions, Linking } from 'react-native';
import { Card, CardSection } from '../components/common';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { StoreHours, Holidays } from '../components';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.384748;
const LONGITUDE = -121.959456;
const LATITUDE_DELTA = 0.008641;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SCMarker = { latitude: LATITUDE, longitude: LONGITUDE };

class SCDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Santa Clara',
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
    const {
      headerTextStyle,
      cardSectionStyle,
      bodyTextStyle,
      phoneNumberStyle,
    } = styles;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="rgb(230,230,230)">
        <Card>
          <MapView
            liteMode={false}
            zoomControlEnabled={true}
            provider={PROVIDER_GOOGLE}
            ref={(ref) => {
              this.map = ref;
            }}
            style={{ height: 200, flex: 1 }}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Marker
              coordinate={SCMarker}
              title={'Best Tile & Building Supply'}
              description={'3550 Thomas Road'}
            />
          </MapView>
        </Card>
        <CardSection style={cardSectionStyle}>
          <Text style={headerTextStyle}>Best Tile & Building Supply</Text>
          <Text style={bodyTextStyle}>
            {'\n'}
            3550 Thomas Road{'\n'}
            Santa Clara, CA 95054{'\n'}
            <Text
              style={{ fontWeight: 'bold', fontSize: 17, color: 'red' }}
              onPress={() =>
                Linking.openURL(
                  'https://www.google.com/maps/dir/?api=1&destination=Best+Tile+%26+Building+Supply+Santa+Clara+CA&travelmode=driving',
                )
              }>
              Get Directions
              <MatIcon name={'directions'} size={16} />
              {'\n'}
              {'\n'}
            </Text>
            <Text
              style={phoneNumberStyle}
              onPress={() => Linking.openURL('tel://+14087270099')}>
              408-727-0099
            </Text>
          </Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <StoreHours store={'SC'}/>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Holidays />
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSectionStyle: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
  },
  bodyTextStyle: {
    fontSize: 16,
    lineHeight: 20,
  },
  phoneNumberStyle: {
    fontSize: 17,
    color: 'red',
    lineHeight: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
};

export { SCDetailsScreen };
