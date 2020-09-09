import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    Button,
    FlatList,
    ActivityIndicator,
    Alert,
    TouchableNativeFeedback
} from 'react-native';
import ProductListItem from '../components/ProductListItem';
import AsyncStorage from '@react-native-community/async-storage';
import { Card, TileCard } from '../components/common';

class FavoritesScreen extends Component {
    static navigationOptions = {
        title: 'Favorites',
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16
        },
    }
    constructor(props) {
        super(props);
        this.state = ({
            favProdList: [],
            isLoading: true,
            hasFaves: false,
        });
    }
    removeFavorite = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            this.getFavorites();
        } catch (e) {
            // remove error
        }
    }
    getFavorites = async () => {
        let allKeys = []
        try {
            allKeys = await AsyncStorage.getAllKeys()
            const allItems = await AsyncStorage.multiGet(allKeys)
            console.log(allItems);
            const favorites = [];
            if (favorites.length === 0) {
                this.setState({ hasFaves: false })
            }
            allItems.forEach((item) => {
                const product = JSON.parse(item[1])
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
                })
            })
            this.setState({
                favProdList: favorites,
                hasFaves: true,
                isLoading: false,
            });
            console.log('state 2: '+ this.state.favProdList)
        } catch (e) {
        }
    }
    componentDidMount() {
        this.getFavorites();
        console.log('loaded')
        console.log('state: ' + this.state.favProdList)
    }

    // componentDidUpdate(prevState) {
    //     if (prevState.favProdList.length !== this.state.favProdList.length)
    //         this.getFavorites();
    // }

    render() {
        const { cardTextStyle, itemCardStyle, itemImageStyle, detailsButtonStyle, textStyle } = styles;
        const favProdList = this.state.favProdList;
        return (
            <View style={{ flex: 1 }} backgroundColor='rgb(230,230,230)'>
                {this.state.hasFaves ?
                    <View>
                        {this.state.isLoading ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size='large' color='red' />
                            </View>
                            :
                            <View backgroundColor='rgb(230,230,230)'>
                                <FlatList
                                    data={favProdList}
                                    renderItem={({ item }) =>
                                        <Card >
                                            <ProductListItem
                                                itemScreen={'ProductItem'}
                                                navigation={this.props.navigation} //passes navigation props to ProductListItem
                                                item={item}
                                            />
                                            <TouchableNativeFeedback
                                                style={detailsButtonStyle}
                                                title='Remove'
                                                onPress={() => Alert.alert(
                                                    'Remove from favorites?',
                                                    item.productName,
                                                    [
                                                        {
                                                            text: 'Cancel',
                                                        },
                                                        {
                                                            text: 'Yes',
                                                            onPress: () => this.removeFavorite(item.key)
                                                        }
                                                    ]
                                                )}
                                            >
                                                <View style={detailsButtonStyle}>
                                                    <Text style={textStyle}>Remove</Text>
                                                </View>
                                            </TouchableNativeFeedback>

                                        </Card>
                                    }
                                    keyExtractor={(item, index) => item.key}
                                />
                            </View>
                        }
                    </View>
                    :
                    <View>
                        <Text>Start shopping!</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = {
    cardTextStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'right',
        padding: 25,
        textShadowColor: 'black',
        textShadowRadius: 10
    },
    itemImageStyle: {
        width: '33%'
    },
    textStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    detailsButtonStyle: {
        borderTopWidth: 0.6,
        borderColor: '#ddd',
        borderTopLeftRadius: 0,
        borderTopRightRadiues: 0,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
};

export { FavoritesScreen };
