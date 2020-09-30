/* eslint-disable react-native/no-inline-styles */
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Alert,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card, Input, CardSection } from '../components/common';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class ProductItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      favKeyList: [],
      favoritesList: [],
    };
  }

  getFavoritesList = async () => {
    try {
      let favList = await AsyncStorage.getItem('@favorites');
      const parsedList = JSON.parse(favList);
      if (parsedList === null) {
        return;
      } else {
        this.setState({
          favoritesList: parsedList,
        });
      }
      this.getFavoritesKeys();
    } catch (e) {
      // get key error
    }
  };
  getFavoritesKeys = () => {
    let allKeys = [];
    this.state.favoritesList.forEach((item) => {
      allKeys.push(item.key);
    });
    this.setState({
      favKeyList: allKeys,
    });
  };
  addToFavoriteList = async (item) => {
    try {
      this.state.favoritesList.unshift(item); //adds item to beginning of list
      const stringList = this.state.favoritesList;
      let itemValue = JSON.stringify(stringList);
      await AsyncStorage.setItem('@favorites', itemValue);
      ToastAndroid.show(
        item.productName + ' added to favorites.',
        ToastAndroid.SHORT,
      );
      this.getFavoritesList();
    } catch (e) {
      // save error
    }
  };
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
      ToastAndroid.show(
        item.productName + ' removed from favorites.',
        ToastAndroid.SHORT,
      );
      this.getFavoritesKeys();
    } catch (e) {
      // remove error
    }
  };

  componentDidMount() {
    this.getFavoritesList();
  }
  render() {
    const {
      productBrandText,
      productDescText,
      productDetailsText,
      productDetailsHeaderText,
      productLabelText,
      cardSectionStyle,
      cardSecTitleStyle,
    } = styles;
    const { itemPassed } = this.props;
    //split to separate each line
    const descSplit = itemPassed.productDescription.split('\n');
    return (
      <ScrollView backgroundColor="white">
        <CardSection style={cardSectionStyle}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width,
            }}>
            <View style={{ flexDirection: 'column', flex: 1 }}>
              {itemPassed.productBrand === '' ||
              itemPassed.productDepartment === 'Tiles' ? (
                <Text style={productBrandText}>{itemPassed.productName}</Text>
              ) : (
                <View>
                  <Text style={productBrandText}>
                    {itemPassed.productBrand}
                  </Text>
                  <Text style={productDescText}>{itemPassed.productName}</Text>
                </View>
              )}
            </View>
            <View>
              {this.state.favKeyList.includes(itemPassed.key) ? (
                <MatIcon
                  name={'heart'}
                  color={'red'}
                  size={35}
                  style={{ padding: 5, paddingRight: 15 }}
                  onPress={() => this.removeFavorite(itemPassed)}
                />
              ) : (
                <MatIcon
                  name={'heart-outline'}
                  color={'red'}
                  size={35}
                  style={{ padding: 5, paddingRight: 15 }}
                  onPress={() => this.addToFavoriteList(itemPassed)}
                />
              )}
            </View>
          </View>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          {itemPassed.imageUrl.length === 1 ? (
            <View>
              <Image
                key={itemPassed.imageUrl[0].name}
                source={{ uri: itemPassed.imageUrl[0].url }}
                style={{
                  width: 300,
                  height: 300,
                  margin: 20,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
              />
            </View>
          ) : (
            <ScrollView
              style={{
                alignContent: 'center',
              }}
              snapToInterval={340}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              decelerationRate={0}
              horizontal={true}>
              {itemPassed.imageUrl.map((image) => (
                <Image
                  key={image.name}
                  source={{ uri: image.url }}
                  style={{
                    width: 300,
                    height: 300,
                    margin: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              ))}
            </ScrollView>
          )}
        </CardSection>
        {itemPassed.productDescription === '' ? null : (
          <View>
            <CardSection style={cardSectionStyle}>
              <Text style={cardSecTitleStyle}>Product Details</Text>
              {itemPassed.productModelNumber === '' ? null : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={productLabelText}>Model#</Text>
                  <Text style={productDescText}>
                    {itemPassed.productModelNumber}
                  </Text>
                </View>
              )}
              {itemPassed.productSize === '' ? null : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={productLabelText}>Size:</Text>
                  <Text style={productDescText}>{itemPassed.productSize}</Text>
                </View>
              )}
              {itemPassed.productMaterial === '' ? null : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={productLabelText}>Material:</Text>
                  <Text style={productDescText}>
                    {itemPassed.productMaterial}
                  </Text>
                </View>
              )}
              {itemPassed.productColor === '' ? null : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={productLabelText}>Color:</Text>
                  <Text style={productDescText}>{itemPassed.productColor}</Text>
                </View>
              )}
              {itemPassed.productMadeIn === '' ? null : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={productLabelText}>Made in:</Text>
                  <Text style={productDescText}>
                    {itemPassed.productMadeIn}
                  </Text>
                </View>
              )}
            </CardSection>
            <CardSection style={cardSectionStyle}>
              {descSplit.map((desc) => {
                if (desc.includes('//h//')) {
                  const header = desc.split('//h//');
                  return (
                    <Text key={desc} style={productDetailsHeaderText}>
                      {header[1]}
                    </Text>
                  );
                } else if (desc.includes('//p//')) {
                  const paragraph = desc.split('//p//');
                  return (
                    <Text key={desc} style={productDetailsText}>
                      {paragraph[1]}
                    </Text>
                  );
                } else {
                  return (
                    <View
                      key={desc}
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        width: Dimensions.get('window').width - 22,
                      }}>
                      <Text style={productDetailsText}>{`\u2022`}</Text>
                      <Text style={productDetailsText}>{desc}</Text>
                    </View>
                  );
                }
              })}
            </CardSection>
          </View>
        )}
      </ScrollView>
    );
  }
}
const styles = {
  productBrandText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 1,
    fontSize: 16,
  },
  productLabelText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDetailsHeaderText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 8,
    fontSize: 16,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  productDetailsText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 8,
    fontSize: 16,
    flexWrap: 'wrap',
  },
  productPriceText: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  priceTextView: {
    flex: 1,
    flexDirection: 'row',
  },
  sqftText: {
    fontWeight: 'normal',
    paddingTop: 11,
    fontSize: 16,
  },
  cardSectionStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 11,
  },
  cardSecTitleStyle: {
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
};

export { ProductItem };
