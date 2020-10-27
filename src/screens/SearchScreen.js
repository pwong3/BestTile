import React, { Component } from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  VirtualizedList,
  View,
  ActivityIndicator,
} from 'react-native';
import { Card } from '../components/common/Card';
import fire from '../config/fire';
import ProductListItem from '../components/ProductListItem';
import SearchBar from '../components/SearchBar';

const depts = [
  // 'Tiles',
  // 'Stone Tiles',
  'Bath Vanities',
  // 'Vanity Tops',
  'Faucets',
  'Schluter Systems',
  // 'Countertops',
  'Kitchen Sinks',
  // 'Kitchen Cabinets',
  'Toilets',
  'Grout & Mortars',
  // 'Cleaners & Sealers',
  'Tools',
  'Accessories',
];
class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SearchBar
        searchValue={navigation.getParam('searchValue')}
        onChangeText={navigation.getParam('onChangeText')}
        onSubmitEditing={navigation.getParam('onSubmitEditing')}
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
      searchValue: null,
      pushProduct: false,
      noResults: false,
    };
  }
  onChangeText = (text) => {
    this.setState({ searchValue: text });
  }
  onSubmitEditing = () => {
    const { searchValue } = this.state
    if (searchValue === ('' || null)) {
      return
    }
    this.setState({ isLoading: true })
    this.searchDB(searchValue);
  }
  searchDB(value) {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const products = [];
    let searchTerms = value.split(' ');
    depts.forEach((dept) => {
      const productRef = deptRef
        .child(dept)
        .orderByKey();
      productRef.on('value', (deptSnapshot) => {
        deptSnapshot.forEach((prodSnapshot) => {
          for (var i = 0; i < searchTerms.length; i++) {
            if (prodSnapshot.val().searchKeywords.includes(searchTerms[i])) {
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
          if (this.state.pushProduct === true) {
            products.push({
              key: prodSnapshot.key,
              productBrand: prodSnapshot.val().productBrand,
              productName: prodSnapshot.val().productName,
              productModelNumber: prodSnapshot.val().productModelNumber,
              productMaterial: prodSnapshot.val().productMaterial,
              productPrice: prodSnapshot.val().productPrice,
              productMadeIn: prodSnapshot.val().productMadeIn,
              productSize: prodSnapshot.val().productSize,
              productDescription: prodSnapshot.val().productDescription,
              imageUrl: prodSnapshot.val().imageUrl,
            });
            this.setState({
              searchList: products,
              isLoading: false,
            });
          }
        })
      })
      if (this.state.searchList === 0) {
        this.setState({
          isLoading: false,
          noResults: true
        })
      }
    })
  }
  componentDidMount() {
    this.props.navigation.setParams({
      searchValue: this.state.searchValue,
      onChangeText: this.onChangeText,
      onSubmitEditing: this.onSubmitEditing,
    })
  }
  render() {
    const productsDB = this.state.searchList

    return (
      <View style={{ flex: 1 }} backgroundColor="rgb(230,230,230)">
        {this.state.isLoading ?
          (<View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="red" />
          </View>)
          :
          (<View>
            {this.state.noResults ?
              (<View>
                <Text>No results</Text>
              </View>)
              :
              (<VirtualizedList
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
              />)}
          </View>)
        }
      </View>
    );
  }
}

export { SearchScreen };
