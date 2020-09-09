import React, { Component } from 'react';
import { VirtualizedList, View, ActivityIndicator } from 'react-native';
import { Card } from '../components/common/Card';
import AsyncStorage from '@react-native-community/async-storage';
import fire from '../config/fire';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import ProductListItem from '../components/ProductListItem';

class ProductsListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('deptPassed'),
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 16
            },
        };
    };
    constructor(props) {
        super(props);
        this.state = ({
            productsList: [],
            isLoading: true
        });
    }


    loadFirebaseData(deptPassed) {
        const rootRef = fire.database().ref();
        deptRef = rootRef.child('Department');
        const productRef = deptRef.child(deptPassed).orderByChild('sortKey');
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
        const deptPassed = this.props.navigation.getParam('deptPassed')
        deptPassed === 'Tiles'
        ?
        this.loadTilesFirebaseData(subDeptPassed)
        :
        this.loadFirebaseData(deptPassed);

    }

    render() {
        const productsDB = this.state.productsList;
        return (
            <View style={{ flex: 1 }} backgroundColor='rgb(230,230,230)'>
                {this.state.isLoading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
                    :
                    <View>
                        <VirtualizedList
                            data={productsDB}
                            getItem={(data, index) => data[index]}
                            getItemCount={data => data.length}
                            renderItem={({ item }) =>
                                <Card>
                                    <ProductListItem
                                        itemScreen={'ProductItem'}
                                        navigation={this.props.navigation} //passes navigation props to FlatListItem
                                        item={item}
                                    />
                                </Card>
                            }
                        />
                    </View>
                }
            </View>
        )
    }
}

export { ProductsListScreen };