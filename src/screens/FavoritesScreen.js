/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import ProductListItem from '../components/ProductListItem';
import AsyncStorage from '@react-native-community/async-storage';
import { Card } from '../components/common';
import { NavigationEvents } from 'react-navigation';

class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Favorites',
    headerStyle: { backgroundColor: 'red' },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 16,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
      isLoading: true,
      hasFaves: false,
    };
  }
  removeFavorite = async (item) => {
    const { favoritesList } = this.state;
    try {
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i].key === item.key) {
          favoritesList.splice(i, 1);
        }
      }
      let itemValue = JSON.stringify(favoritesList);
      await AsyncStorage.setItem('@favorites', itemValue);
      this.getFavoritesList();
    } catch (e) {
      // remove error
    }
  };
  getFavoritesList = async () => {
    try {
      const itemValue = await AsyncStorage.getItem('@favorites');
      const favorites = [];
      const itemParsed = JSON.parse(itemValue);
      itemParsed.forEach((product) => {
        favorites.push({
          key: product.key,
          imageUrl: product.imageUrl,
          productBrand: product.productBrand,
          productColor: product.productColor,
          productDepartment: product.productDepartment,
          productDescription: product.productDescription,
          productMadeIn: product.productMadeIn,
          productMaterial: product.productMaterial,
          productModelNumber: product.productModelNumber,
          productName: product.productName,
          productPrice: product.productPrice,
          productSize: product.productSize,
          sortKey: product.sortKey,
        });
      });
      this.setState({
        favoritesList: favorites,
        hasFaves: favorites.length === 0 ? false : true,
        isLoading: false,
      });
    } catch (e) {
      // error reading value
    }
  };

  render() {
    const { removeButtonStyle, textStyle } = styles;
    const { favoritesList } = this.state;
    return (
      <View style={{ flex: 1 }} backgroundColor="rgb(230,230,230)">
        <NavigationEvents onDidFocus={() => this.getFavoritesList()} />
        {this.state.hasFaves ? (
          <View>
            {this.state.isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="red" />
              </View>
            ) : (
              <View backgroundColor="rgb(230,230,230)">
                <FlatList
                  data={favoritesList}
                  renderItem={({ item }) => (
                    <Card>
                      <ProductListItem
                        itemScreen={'ProductItem'}
                        navigation={this.props.navigation} //passes navigation props to ProductListItem
                        item={item}
                      />
                      <TouchableNativeFeedback
                        style={removeButtonStyle}
                        title="Remove"
                        onPress={() =>
                          Alert.alert(
                            'Remove from favorites?',
                            item.productName,
                            [
                              {
                                text: 'Cancel',
                              },
                              {
                                text: 'Yes',
                                onPress: () => this.removeFavorite(item),
                              },
                            ],
                          )
                        }>
                        <View style={removeButtonStyle}>
                          <Text style={textStyle}>Remove</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </Card>
                  )}
                  keyExtractor={(item, index) => item.key}
                />
              </View>
            )}
          </View>
        ) : (
          <View>
            <Card>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Products')}>
                <Text
                  style={{ fontSize: 25, textAlign: 'center', color: 'black' }}>
                  Browse all departments
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
        )}
      </View>
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
  itemImageStyle: {
    width: '33%',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  removeButtonStyle: {
    backgroundColor: 'white',
    borderTopWidth: 0.6,
    borderColor: '#ddd',
    borderTopLeftRadius: 0,
    borderTopRightRadiues: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
};

export { FavoritesScreen };
