import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import fire from '../config/fire';
import ProductListItem from '../components/ProductListItem';
import { Card } from '../components/common';

class NewProdsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faucetsList: [],
      kitchSinksList: [],
      tilesList: [],
      toiletsList: [],
      bathVansList: [],
      toolsList: [],
      schlutersList: [],
      countertopsList: [],
      vanTopsList: [],
      stoneTilesList: [],
      cleanerSealersList: [],
      groutMortarsList: [],
      accessoriesList: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const rootRef = fire.database().ref();
    const deptRef = rootRef.child('Department');
    const faucetsRef = deptRef
      .child('Faucets')
      .orderByChild('key')
      .limitToLast(10);
    const kitchSinksRef = deptRef
      .child('Kitchen Sinks')
      .orderByChild('key')
      .limitToLast(10);
    const tilesRef = deptRef.child('Tiles').orderByChild('key').limitToLast(10);
    const toiletsRef = deptRef
      .child('Toilets')
      .orderByChild('key')
      .limitToLast(10);
    const bathVansRef = deptRef
      .child('Bath Vanities')
      .orderByChild('key')
      .limitToLast(10);
    const toolsRef = deptRef.child('Tools').orderByChild('key').limitToLast(10);
    const schlutersRef = deptRef
      .child('Schluter Systems')
      .orderByChild('key')
      .limitToLast(10);
    const countertopsRef = deptRef
      .child('Countertops')
      .orderByChild('key')
      .limitToLast(10);
    const vanTopsRef = deptRef
      .child('Vanity Tops')
      .orderByChild('key')
      .limitToLast(10);
    const stoneTilesRef = deptRef
      .child('Stone Tiles')
      .orderByChild('key')
      .limitToLast(10);
    const cleanerSealersRef = deptRef
      .child('Cleaners & Sealers')
      .orderByChild('key')
      .limitToLast(10);
    const groutMortarsRef = deptRef
      .child('Grout & Mortars')
      .orderByChild('key')
      .limitToLast(10);
    const accessoriesRef = deptRef
      .child('Accessories')
      .orderByChild('key')
      .limitToLast(10);
    faucetsRef.once('value', (deptSnapshot) => {
      const faucetsProds = [];
      deptSnapshot.forEach((product) => {
        faucetsProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          faucetsList: faucetsProds,
        });
      });
    });
    kitchSinksRef.once('value', (deptSnapshot) => {
      const kitchSinksProds = [];
      deptSnapshot.forEach((product) => {
        kitchSinksProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          kitchSinksList: kitchSinksProds,
        });
      });
    });
    tilesRef.once('value', (deptSnapshot) => {
      const tilesProds = [];
      deptSnapshot.forEach((product) => {
        tilesProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          tilesList: tilesProds,
        });
      });
    });
    bathVansRef.once('value', (deptSnapshot) => {
      const bathVansProds = [];
      deptSnapshot.forEach((product) => {
        bathVansProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          bathVansList: bathVansProds,
        });
      });
    });
    toiletsRef.once('value', (deptSnapshot) => {
      const toiletsProds = [];
      deptSnapshot.forEach((product) => {
        toiletsProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          toiletsList: toiletsProds,
        });
      });
    });
    toolsRef.once('value', (deptSnapshot) => {
      const toolsProds = [];
      deptSnapshot.forEach((product) => {
        toolsProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          toolsList: toolsProds,
        });
      });
    });
    schlutersRef.once('value', (deptSnapshot) => {
      const schlutersProds = [];
      deptSnapshot.forEach((product) => {
        schlutersProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          schlutersList: schlutersProds,
        });
      });
    });
    countertopsRef.once('value', (deptSnapshot) => {
      const countertopsProds = [];
      deptSnapshot.forEach((product) => {
        countertopsProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          countertopsList: countertopsProds,
        });
      });
    });
    vanTopsRef.once('value', (deptSnapshot) => {
      const vanTopsProds = [];
      deptSnapshot.forEach((product) => {
        vanTopsProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          vanTopsList: vanTopsProds,
        });
      });
    });
    stoneTilesRef.once('value', (deptSnapshot) => {
      const stoneTilesProds = [];
      deptSnapshot.forEach((product) => {
        stoneTilesProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          stoneTilesList: stoneTilesProds,
        });
      });
    });
    cleanerSealersRef.once('value', (deptSnapshot) => {
      const cleanerSealersProds = [];
      deptSnapshot.forEach((product) => {
        cleanerSealersProds.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          cleanerSealersList: cleanerSealersProds,
        });
      });
    });
    groutMortarsRef.once('value', (deptSnapshot) => {
      const groutMortarsProd = [];
      deptSnapshot.forEach((product) => {
        groutMortarsProd.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          groutMortarsList: groutMortarsProd,
        });
      });
    });
    accessoriesRef.once('value', (deptSnapshot) => {
      const accessoriesProd = [];
      deptSnapshot.forEach((product) => {
        accessoriesProd.push({
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
          sortKey: product.val().sortKey,
        });
        this.setState({
          accessoriesList: accessoriesProd,
          isLoaded: true,
        });
      });
    });
  }

  render() {
    const productsDB = this.state.tilesList.concat(
      this.state.stoneTilesList.concat(
        this.state.faucetsList.concat(
          this.state.schlutersList.concat(
            this.state.toolsList.concat(
              this.state.kitchSinksList.concat(
                this.state.bathVansList.concat(
                  this.state.toiletsList.concat(
                    this.state.countertopsList.concat(
                      this.state.vanTopsList.concat(
                        this.state.cleanerSealersList.concat(
                          this.state.groutMortarsList.concat(
                            this.state.accessoriesList,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
    const productsDBsort = productsDB.sort((a, b) => {
      return a.sortKey > b.sortKey ? 1 : -1;
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.state.isLoaded ? (
          <View backgroundColor="rgb(230,230,230)">
            <FlatList
              data={productsDBsort}
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
        ) : (
          <View>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
      </View>
    );
  }
}

export { NewProdsListScreen };
