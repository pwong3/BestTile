import React, { Component } from 'react';
import { Text, ScrollView, Dimensions, Linking } from 'react-native';
import { Card, CardSection } from '../components/common';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { StoreHours, Holidays } from '../components';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.737234;
const LONGITUDE = -122.406195;
const LATITUDE_DELTA = 0.007915;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SFMarker = { latitude: LATITUDE, longitude: LONGITUDE };

class SFDetailsScreen extends Component {
  static navigationOptions = {
    title: 'San Francisco',
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
      cardSecTextStyle,
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
              coordinate={SFMarker}
              title={'Best Tile Inc'}
              description={'625 Bay Shore Blvd'}
            />
          </MapView>
        </Card>
        <CardSection style={cardSectionStyle}>
          <Text style={cardSecTextStyle}>Best Tile Inc{'\n'}</Text>
          <Text style={bodyTextStyle}>
            625 Bay Shore Blvd{'\n'}
            San Francisco, CA 94124{'\n'}
            <Text
              style={{ fontWeight: 'bold', fontSize: 17, color: 'red' }}
              onPress={() =>
                Linking.openURL(
                  'https://www.google.com/maps/dir/?api=1&destination=Best+Tile+Inc+San+Francisco+CA&travelmode=driving',
                )
              }>
              Get Directions
              <MatIcon name={'directions'} size={16} />
              {'\n'}
              {'\n'}
            </Text>
            <Text
              style={phoneNumberStyle}
              onPress={() => Linking.openURL('tel://+14154678563')}>
              415-467-8563
            </Text>
          </Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <StoreHours store={'SF'}/>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Holidays />
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  cardSecTextStyle: {
    fontSize: 18,
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

export { SFDetailsScreen };
