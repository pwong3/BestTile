import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import {
    NewTilesCard,
    HomePromoCard,
    MapCard,
    ShopDeptsCard
} from '../cards';
import fire from '../config/fire';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
    static navigationOptions = {
        //headerTransparent: true
        title: 'Welcome to Best Tile',
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16
        },
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                backgroundColor='rgb(230,230,230)' //background color under the cards
            >
                <StatusBar backgroundColor="rgb(190,0,0)" />
                {/*ImageBackground is the Header picture*/}
                <ImageBackground
                    source={require('/Users/patri/Documents/React Native Projects/BestTile2/src/resources/bt_shop.jpg')}
                    style={{ height: 180 }}
                >
                    <View>
                        <View style={{ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)', height: 180 }}>
                            <Image
                                style={{ width: '40%', borderRadius: 2 }}
                                resizeMode={'contain'}
                                source={require('/Users/patri/Documents/React Native Projects/BestTile2/src/resources/BestTileLogo.jpg')}
                            />
                        </View>
                    </View>
                </ImageBackground>

                <TouchableOpacity
                    style={{ marginTop: 5 }}
                    onPress={() => this.props.navigation.navigate('Products')}
                >
                    <ShopDeptsCard />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 5 }}
                    onPress={() => this.props.navigation.navigate('NewProds')}
                >
                    <NewTilesCard />
                </TouchableOpacity>

                <MapCard navigation={this.props.navigation} />
                <HomePromoCard />
            </ScrollView>

        );
    }
}


export { Home }