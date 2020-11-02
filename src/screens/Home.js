/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import fire from '../config/fire';
import { NewTilesCard, HomePromoCard, MapCard, ShopDeptsCard } from '../cards';

class Home extends Component {
  static navigationOptions = {
    //headerTransparent: true
    title: 'Welcome to Best Tile',
    headerStyle: {
      backgroundColor: 'red',
      height: 50,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 20,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      ezWedge: [],
    }
  }
  componentDidMount() {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const ToolsDeptRef = deptRef.child('Tools');
    const ezWedgeRef = ToolsDeptRef.child('-M8OheW0I7Q1blGE9nVL');
    ezWedgeRef.once('value', (prodSnap) => {
      const ezWedge = [];
      ezWedge.push({
        key: prodSnap.key,
          imageUrl: prodSnap.val().imageUrl,
          productBrand: prodSnap.val().productBrand,
          productColor: prodSnap.val().productColor,
          productDepartment: prodSnap.val().productDepartment,
          productDescription: prodSnap.val().productDescription,
          productMadeIn: prodSnap.val().productMadeIn,
          productMaterial: prodSnap.val().productMaterial,
          productModelNumber: prodSnap.val().productModelNumber,
          productName: prodSnap.val().productName,
          productPrice: prodSnap.val().productPrice,
          productSize: prodSnap.val().productSize,
          productWidth: prodSnap.val().productWidth,
          productLength: prodSnap.val().productLength,
          sortKey: prodSnap.val().sortKey,
      });
      this.setState({
        ezWedge: ezWedge,
      })
    })
  }
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="rgb(230,230,230)" //background color under the cards
      >
        <StatusBar backgroundColor="rgb(190,0,0)" />
        {/*ImageBackground is the Header picture*/}
        <ImageBackground
          source={require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/bt_shop.jpg')}
          style={{ height: 180 }}>
          <View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                height: 180,
              }}>
              <Image
                style={{ width: '40%', borderRadius: 2 }}
                resizeMode={'contain'}
                source={require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/BestTileLogo.jpg')}
              />
            </View>
          </View>
        </ImageBackground>

        <TouchableOpacity
          style={{ marginTop: 5 }}
          onPress={() => this.props.navigation.navigate('Products')}>
          <ShopDeptsCard />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 5 }}
          onPress={() => this.props.navigation.navigate('NewProds')}>
          <NewTilesCard />
        </TouchableOpacity>

        <MapCard navigation={this.props.navigation} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProductItem', {itemPassed: this.state.ezWedge[0]})}>
          <HomePromoCard />
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

export { Home };
