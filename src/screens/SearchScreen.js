import React, { Component, useState } from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import { Card } from '../components/common/Card';
import fire from '../config/fire';
import ProductListItem from '../components/ProductListItem';


const SearchBar = () => {
  const [value, onChangeText] = useState('Search');

  const { textInputStyle } = styles;
  return (
    <TextInput
      style={textInputStyle}
      placeholderTextColor='grey'
      onChangeText={text => onChangeText(text)}
      value={value}
      returnKeyLabel='search'
      returnKeyType='search'
    />
  );
};

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SearchBar />,
      headerStyle: {
        backgroundColor: 'red',
      },
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
      searchList: [],
    };
  }
  searchList() {
    //const deptPassed = this.props.navigation.getParam('deptPassed');//getting the dept name to the pull correct database
    //console.log(deptPassed);//deptPassed equals name of dept
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const productRef = deptRef
      .child('Accessories')
      .orderByKey();
    productRef.on('value', (deptSnapshot) => {
      const products = [];
      deptSnapshot.forEach((prodSnapshot) => {
        if (prodSnapshot.val().searchKeywords === value) {
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
          //console.log(products)
          //this.products = products.reverse();
          this.setState({
            searchList: products,
          });
        }
      });
    });
  }
  render() {
    return (
      <View backgroundColor="rgb(230,230,230)">
        <Card>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProductsDept')}>
            <Text style={{ fontSize: 25, textAlign: 'center', color: 'black' }}>
              Browse all departments
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
const styles = {
  textInputStyle: {
    backgroundColor: 'white',
    height: 30,
    width: 250,
    margin: 3,
    padding: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
};
export { SearchScreen };
