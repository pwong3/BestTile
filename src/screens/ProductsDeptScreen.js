/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../components/common';
import { DeptCard } from '../components';

class ProductsDeptScreen extends Component {
  static navigationOptions = {
    title: 'Products',
    headerStyle: { backgroundColor: 'red' },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 16,
    },
  };
  state = {
    width: '', //used to divide the dept cards in 2 equal size cards when side by side
  };
  render() {
    const { headerStyle } = styles;
    const cardWidth = this.state.width / 2.0;
    const depts = [
      {
        dept: 'Tiles',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Pawn2.jpg'),
      },
      {
        dept: 'Stone Tiles',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Stone/S1120-Ledge-Panel.jpg'),
      },
      {
        dept: 'Bath Vanities',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Vanities/MJ.jpg'),
      },
      {
        dept: 'Vanity Tops',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/VanityTop.jpg'),
      },
      {
        dept: 'Faucets',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Faucets/Concetto.jpg'),
      },
      {
        dept: 'Schluter Systems',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/SchluterSystem.jpeg'),
      },
      {
        dept: 'Countertops',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Countertop.jpg'),
      },
      {
        dept: 'Kitchen Sinks',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Sinks/m2522-8.png'),
      },
      {
        dept: 'Kitchen Cabinets',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/WhiteKitCab.jpg'),
      },
      {
        dept: 'Toilets',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Toilets/UltraMaxII.png'),
      },
      {
        dept: 'Grout & Mortars',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/GroutMortar.png'),
      },
      {
        dept: 'Cleaners & Sealers',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/CleanerSealer.png'),
      },
      {
        dept: 'Tools',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/Tools/tx4.jpg'),
      },
      {
        dept: 'Accessories',
        deptImage: require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/ezNiche.jpg'),
      },
    ];

    return (
      <ScrollView backgroundColor="rgb(230,230,230)">
        <Card>
          <View
            onLayout={(event) =>
              this.setState({ width: event.nativeEvent.layout.width })
            }>
            <CardSection>
              <Text style={headerStyle}>Departments</Text>
            </CardSection>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: 5,
              }}>
              {/*prodPassed: dept[*] is a props that is passed to the productListScreen*/}
              {depts.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.dept}
                    onPress={
                      item.dept === 'Tiles'
                        ? () =>
                            this.props.navigation.navigate('TilesSubDept', {
                              deptPassed: item.dept,
                            })
                        : () =>
                            this.props.navigation.navigate('ProductsList', {
                              deptPassed: item.dept,
                            })
                    }>
                    <View style={{ width: cardWidth }}>
                      <DeptCard
                        deptImage={item.deptImage}
                        deptText={item.dept}
                        deptWidth={cardWidth}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
};
export { ProductsDeptScreen };
