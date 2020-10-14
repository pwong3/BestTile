import React, { Component } from 'react';
import { ProductItem } from '../components/ProductItem';

class ProductItemScreen extends Component {
  static navigationOptions = {
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
    return (
      <ProductItem itemPassed={this.props.navigation.getParam('itemPassed')} />
    );
  }
}

export { ProductItemScreen };
