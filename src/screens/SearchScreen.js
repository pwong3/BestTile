import React, { Component } from 'react';
import {
  Text,
  VirtualizedList,
  View,
  ActivityIndicator,
} from 'react-native';
import { Card } from '../components/common/Card';
import fire from '../config/fire';
import ProductListItem from '../components/ProductListItem';
import SearchBar from '../components/SearchBar';

const depts = [
  'Tiles',
  'Stone Tiles',
  'Bath Vanities',
  'Vanity Tops',
  'Faucets',
  'Schluter Systems',
  'Countertops',
  'Kitchen Sinks',
  'Kitchen Cabinets',
  'Toilets',
  'Grout & Mortars',
  'Cleaners & Sealers',
  'Tools',
  'Accessories',
  'Porcelain Panels',
  'Shower & Tub Encelosures',
  'Stone Steps',
];
class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SearchBar
        searchValue={navigation.getParam('searchValue')}
        onChangeText={navigation.getParam('onChangeText')}
        onSubmitEditing={navigation.getParam('onSubmitEditing')}
        clearText={navigation.getParam('clearText')}
      />,
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
  };
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
    this.state = {
      searchList: [],
      isLoading: false,
      searchValue: undefined,
      displayNoResultValue: '',
      pushProduct: false,
      noResults: false,
    };
  }
  onChangeText = (text) => {
    this.setState({ searchValue: text });
  }
  onSubmitEditing = () => {
    const { searchValue } = this.state
    if (searchValue === '' || searchValue === null) {
      return
    }
    this.setState({ isLoading: true, searchList: [], displayNoResultValue: searchValue })
    this.searchDB(searchValue.toLowerCase());
  }
  searchDB(searchValue) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const products = [];
    let searchTerms = searchValue.split(' ');
    depts.forEach((dept) => {
      const productRef = deptRef.child(dept).orderByKey();
      productRef.on('value', (deptSnapshot) => {
        deptSnapshot.forEach((prodSnapshot) => {
          for (var i = 0; i < searchTerms.length; i++) {
            if (prodSnapshot.val().searchKeywords.toLowerCase().includes(searchTerms[i])) {
              this.setState({
                pushProduct: true,
              })
            } else {
              this.setState({
                pushProduct: false,
              })
              break;
            }
          }
          if (this.state.pushProduct) {
            products.push({
              key: prodSnapshot.key,
              productBrand: prodSnapshot.val().productBrand,
              productDepartment: prodSnapshot.val().productDepartment,
              productName: prodSnapshot.val().productName,
              productModelNumber: prodSnapshot.val().productModelNumber,
              productMaterial: prodSnapshot.val().productMaterial,
              productPrice: prodSnapshot.val().productPrice,
              productColor: prodSnapshot.val().productColor,
              productMadeIn: prodSnapshot.val().productMadeIn,
              productSize: prodSnapshot.val().productSize,
              productDescription: prodSnapshot.val().productDescription,
              imageUrl: prodSnapshot.val().imageUrl,
            });
          }
        })
        this.setState({
          searchList: products,
          isLoading: false,
          noResults: false,
        });
        // if (products.length === 0) {
        //   console.log('no prods')
        //   this.setState({
        //     // isLoading: false,
        //     noResults: true
        //   })
        // } else {
        //   this.setState({
        //     // isLoading: false,
        //     noResults: false,
        //   })
        // }
      })

    })

  }
  componentDidMount() {
    this.props.navigation.setParams({
      searchValue: this.state.searchValue,
      onChangeText: this.onChangeText,
      onSubmitEditing: this.onSubmitEditing,
    })
  }
  renderResults = () => {
    const productsDB = this.state.searchList;
    const { isLoading, noResults, displayNoResultValue } = this.state;
    if (isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )
    }
    if (noResults) {
      console.log(noResults)
      return (
        <View>
          <Text>No results for {displayNoResultValue}</Text>
        </View>
      )
    } else {
      return (
        <VirtualizedList
          // style={{ marginBottom: 40 }}
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
            </Card>)}
        />
      )
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="rgb(230,230,230)">
        {this.renderResults()}
      </View>
    );
  }
}

export { SearchScreen };
