/* eslint-disable react-native/no-inline-styles */
import React, { PureComponent } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import noImage from '../resources/noImage.png';

class ProductListItem extends PureComponent {
  render() {
    const {
      productBrandText,
      productNameText,
      productDescText,
      imageStyle,
    } = styles; //object destructuring
    const { item, itemScreen } = this.props;
    const widthTilesName = Dimensions.get('window').width - 125;
    const widthProductName = Dimensions.get('window').width - 145;
    let url = item.imageUrl[0].url === '/static/media/noImage.c0c008e2.png' ?
      'https://firebasestorage.googleapis.com/v0/b/besttile-a546b.appspot.com/o/noImage.png?alt=media&token=ba6891e1-beb2-432b-843f-55d7efd07f06'
      : item.imageUrl[0].url;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(itemScreen, { itemPassed: item })
        }>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingTop: 8,
            paddingBottom: 10,
          }}>
          <View>
            <Image source={{ uri: url }} style={imageStyle} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingTop: 4,
            }}>
            {item.productBrand === '' || item.productDepartment === 'Tiles' ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: widthTilesName,
                  }}>
                  <Text style={productBrandText}>{item.productName}</Text>
                </View>
              </View>
            ) : (
                <View>
                  <Text style={productBrandText}>{item.productBrand}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: widthProductName,
                    }}>
                    <Text style={productNameText}>{item.productName}</Text>
                  </View>
                </View>
              )}
            {item.productModelNumber === '' ? null : (
              <Text style={productDescText}>
                Model# {item.productModelNumber}
              </Text>
            )}
            {item.productSize === '' ? null : (
              <Text style={productDescText}>{item.productSize}</Text>
            )}
            {item.productMaterial === '' ? null : (
              <Text style={productDescText}>{item.productMaterial}</Text>
            )}
            {item.productMadeIn === '' ? null : (
              <Text style={productDescText}>Made in {item.productMadeIn}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  productBrandText: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productNameText: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
  },
  productDescText: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 0,
    fontSize: 16,
  },
  productPriceText: {
    color: 'black',
    fontSize: 16,
    paddingTop: 4,
    fontWeight: 'bold',
  },
  productTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: 'contain',
  },
};

export default ProductListItem;
