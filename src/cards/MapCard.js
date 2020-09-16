/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Linking,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, CardSection, Button, Input } from '../components/common';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const SFMarker = { latitude: 37.737234, longitude: -122.406195 };
const SCMarker = { latitude: 37.384748, longitude: -121.959435 };
const LATITUDE = (SFMarker.latitude + SCMarker.latitude) / 2;
const LONGITUDE = (SFMarker.longitude + SCMarker.longitude) / 2;
const LATITUDE_DELTA = 0.81511;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const locations = [SFMarker, SCMarker];

class MapCard extends Component {
  render() {
    const {
      addrTextStyle,
      addrHeaderStyle,
      phoneNumberStyle,
      textStyle,
      detailsButtonStyle,
    } = styles;
    return (
      <View>
        <Card>
          <CardSection>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
              Nearby Stores
            </Text>
          </CardSection>
          <MapView
            liteMode={true}
            provider={PROVIDER_GOOGLE}
            ref={(ref) => {
              this.map = ref;
            }}
            style={{ height: 180 }}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Marker coordinate={SFMarker} title={'Best Tile Inc'} />
            <Marker
              coordinate={SCMarker}
              title={'Best Tile & Building Supply'}
            />
          </MapView>
          <ScrollView
            snapToInterval={260}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            centerContent={true}>
            <View
              style={{
                width: 260,
                marginVertical: 5,
              }}>
              <Card>
                <Text style={addrTextStyle}>
                  <Text style={addrHeaderStyle}>Best Tile Inc{'\n'}</Text>
                  625 Bayshore Blvd{'\n'}
                  San Francisco, CA 94124
                </Text>
                <Text
                  style={phoneNumberStyle}
                  onPress={() => Linking.openURL('tel://+14154678563')}>
                  415-467-8563
                </Text>
                <View style={detailsButtonStyle}>
                  <TouchableNativeFeedback
                    style={detailsButtonStyle}
                    background={TouchableNativeFeedback.Ripple('red', true)}
                    delayPressIn={0}
                    onPress={() => this.props.navigation.navigate('SFDetails')}>
                    <View style={detailsButtonStyle}>
                      <Text style={textStyle}>View Details</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </Card>
            </View>
            <View style={{ width: 260, marginVertical: 5 }}>
              <Card>
                <Text style={addrTextStyle}>
                  <Text style={addrHeaderStyle}>
                    Best Tile & Building Supply{'\n'}
                  </Text>
                  3550 Thomas Road{'\n'}
                  Santa Clara, CA 95054
                </Text>
                <Text
                  style={phoneNumberStyle}
                  onPress={() => Linking.openURL('tel://+14087270099')}>
                  408-727-0099
                </Text>

                <View style={detailsButtonStyle}>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('red', true)}
                    delayPressIn={0}
                    onPress={() => this.props.navigation.navigate('SCDetails')}>
                    <View style={detailsButtonStyle}>
                      <Text style={textStyle}>View Details</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </Card>
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}
const styles = {
  addrHeaderStyle: {
    fontSize: 15,
    color: 'black',
    lineHeight: 18,
    margin: 5,
    fontWeight: 'bold',
  },
  addrTextStyle: {
    fontSize: 15,
    lineHeight: 18,
    margin: 10,
  },
  phoneNumberStyle: {
    fontSize: 15,
    color: 'red',
    lineHeight: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  detailsButtonStyle: {
    borderTopWidth: 0.6,
    borderColor: '#ddd',
    borderTopLeftRadius: 0,
    borderTopRightRadiues: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
};

export { MapCard };
