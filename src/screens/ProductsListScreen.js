/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  VirtualizedList,
  View,
  ActivityIndicator,
  Button,
  Animated,
  Text,
} from 'react-native';
import { Card } from '../components/common/Card';
import fire from '../config/fire';
import ProductListItem from '../components/ProductListItem';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';

class ProductsListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let title = '';
    if (navigation.getParam('deptPassed') === 'Tiles') {
      title = navigation.getParam('subDeptHeaderPassed');
    } else {
      title = navigation.getParam('deptPassed');
    }
    return {
      title: title,
      headerStyle: { backgroundColor: 'red' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        fontSize: 16,
      },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      isLoading: true,
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  prepFirebaseRefs(deptPassed) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const productRef = deptRef.child(deptPassed).orderByChild('sortKey');
    this.loadFirebaseData(productRef);
  }
  prepEqualToTilesFirebaseRefs(deptPassed, filterValuePassed, orderBy) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const productRef = deptRef
      .child(deptPassed)
      .orderByChild(orderBy)
      .equalTo(filterValuePassed);
    this.loadFirebaseData(productRef);
  }
  prepStartAtTilesFirebaseRefs(deptPassed, filterValuePassed, orderBy) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const productRef = deptRef
      .child(deptPassed)
      .orderByChild(orderBy)
      .startAt(filterValuePassed);
    this.loadFirebaseData(productRef);
  }
  prepEndAtTilesFirebaseRefs(deptPassed, filterValuePassed, orderBy) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const productRef = deptRef
      .child(deptPassed)
      .orderByChild(orderBy)
      .endAt(filterValuePassed);
    this.loadFirebaseData(productRef);
  }
  loadFirebaseData(productRef) {
    productRef.once('value', (deptSnapshot) => {
      const products = [];
      deptSnapshot.forEach((product) => {
        products.push({
          key: product.key,
          imageUrl: product.val().imageUrl,
          productBrand: product.val().productBrand,
          productColor: product.val().productColor,
          productDepartment: product.val().productDepartment,
          productDescription: product.val().productDescription,
          productMadeIn: product.val().productMadeIn,
          productMaterial: product.val().productMaterial,
          productModelNumber: product.val().productModelNumber,
          productName: product.val().productName,
          productPrice: product.val().productPrice,
          productSize: product.val().productSize,
          productWidth: product.val().productWidth,
          productLength: product.val().productLength,
          sortKey: product.val().sortKey,
        });
      });
      this.setState({
        productsList: products,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    const deptPassed = this.props.navigation.getParam('deptPassed');
    const filterValuePassed = this.props.navigation.getParam('filterValuePassed');
    const orderByPassed = this.props.navigation.getParam('orderByPassed');
    const filterPassed = this.props.navigation.getParam('filterPassed');
    console.log(deptPassed + filterValuePassed + filterPassed);
    if (filterPassed === 'startAt') {
      this.prepStartAtTilesFirebaseRefs(
        deptPassed,
        filterValuePassed,
        orderByPassed,
      );
    } else if (filterPassed === 'equalTo') {
      this.prepEqualToTilesFirebaseRefs(
        deptPassed,
        filterValuePassed,
        orderByPassed,
      );
    } else if (filterPassed === 'endAt') {
      this.prepEndAtTilesFirebaseRefs(
        deptPassed,
        filterValuePassed,
        orderByPassed,
      );
    } else {
      this.prepFirebaseRefs(deptPassed);
    }
    // deptPassed === 'Tiles'
    //   ? this.prepEqualToTilesFirebaseRefs(deptPassed, filterValuePassed, orderByPassed)
    //   : this.prepFirebaseRefs(deptPassed);
  }

  render() {
    const productsDB = this.state.productsList.sort((a, b) =>
      a.sortKey > b.sortKey ? 1 : -1,
    );
    const listOfColors = [...new Set(productsDB.map((prod) => prod.productColor))]
      .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
    const { isModalVisible } = this.state;
    console.log(listOfColors);
    return (
      <View style={{ flex: 1 }} backgroundColor="rgb(230,230,230)">
        {this.state.isLoading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <View>
            <Animated.View>
              <Button onPress={this.toggleModal} title="Filter" />
            </Animated.View>
            <Modal
              style={{ justifyContent: 'flex-end', margin: 0 }}
              isVisible={isModalVisible}
              animationIn={'slideInUp'}
              animationInTiming={400}
              animationOut={'slideOutDown'}
              animationOutTiming={400}
              onSwipeComplete={() => this.setState({ isModalVisible: false })}
              swipeDirection="down"
              onBackButtonPress={() => this.setState({ isModalVisible: false })}
              onBackdropPress={() => this.setState({ isModalVisible: false })}
              useNativeDriver={true}>
              <View
                style={{
                  padding: 100,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <Text>HI</Text>
              </View>
            </Modal>
            <VirtualizedList
              style={{ marginBottom: 35 }}
              data={productsDB}
              keyExtractor={(item) => item.key}
              getItem={(data, index) => data[index]}
              getItemCount={(data) => data.length}
              maxToRenderPerBatch={10}
              renderItem={({ item }) => (
                <Card>
                  <ProductListItem
                    itemScreen={'ProductItem'}
                    navigation={this.props.navigation} //passes navigation props to FlatListItem
                    item={item}
                  />
                </Card>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}

export { ProductsListScreen };
