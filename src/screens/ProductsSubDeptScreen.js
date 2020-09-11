import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Header } from '../components/common';
import { DeptCard } from '../components';
import { FlatList } from 'react-navigation';

class ProductsSubDeptScreen extends Component {
    static navigationOptions = {
        title: 'Products',
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16
        },
    }
    state = {
        width: '' //used to divide the dept cards in 2 equal size cards when side by side
    }
    render() {
        const { headerStyle } = styles;
        const cardWidth = this.state.width / 2.0;
        const tileSubDepts =
            [
                { subDept: 'Ceramic', deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Pawn2.jpg') },
                { subDept: 'Porcelain', deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Pawn2.jpg') },
            ]
        return (
            <ScrollView backgroundColor='rgb(230,230,230)'>
                <Card>
                    <View onLayout={event => this.setState({ width: event.nativeEvent.layout.width })}>
                        <CardSection>
                            <Text style={headerStyle}>
                                Tiles
                            </Text>
                        </CardSection>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
                            {/*prodPassed: dept[*] is a props that is passed to the productListScreen*/}
                            {tileSubDepts.map((item) => {
                                return (
                                    <TouchableOpacity
                                        key={item.subDept}
                                        onPress={() => this.props.navigation.navigate('ProductsList', { subDeptPassed: item.subDept })}
                                    >
                                        <View style={{ width: cardWidth }}>
                                            <DeptCard
                                                deptImage={item.deptImage}
                                                deptText={item.subDept}
                                                deptWidth={cardWidth}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </Card>
            </ScrollView>
        )
    }
}

const styles = {
    headerStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }
}
export { ProductsSubDeptScreen };