/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../components/common';
import { DeptCard } from '../components';
import fire from '../config/fire';

class TilesSubDeptScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deptPassed'),
      headerStyle: { backgroundColor: 'red' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        fontSize: 16,
      },
    };
  };

  state = {
    width: '', //used to divide the dept cards in 2 equal size cards when side by side
  };

  render() {
    const { headerStyle } = styles;
    const cardWidth = this.state.width / 2.0;
    const tileSubDepts = [
      {
        filterValue: 'Ceramic',
        subDeptHeader: 'Wall Tile',
        deptImage: require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/asarorlvblancoceramic.jpg'),
        orderBy: 'productMaterial',
        filter: 'equalTo',
      },
      {
        filterValue: 'Porcelain',
        subDeptHeader: 'Porcelain Tile',
        deptImage: require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/g.lasablanco35x70.jpg'),
        orderBy: 'productMaterial',
        filter: 'equalTo',
      },
      {
        filterValue: 13,
        subDeptHeader: 'Large Format Tile',
        deptImage: require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/newiceblacklarge.jpg'),
        orderBy: 'productLength',
        filter: 'startAt',
      },
      {
        filterValue: 4,
        subDeptHeader: 'Mosaic Tile',
        deptImage: require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/belukagris2x2.jpg'),
        orderBy: 'productLength',
        filter: 'endAt',
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
              <Text style={headerStyle}>Tiles</Text>
            </CardSection>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: 5,
              }}>
              {/*prodPassed: dept[*] is a props that is passed to the productListScreen*/}
              {tileSubDepts.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.filterValue}
                    onPress={() =>
                      this.props.navigation.navigate('ProductsList', {
                        deptPassed: this.props.navigation.getParam(
                          'deptPassed',
                        ),
                        subDeptHeaderPassed: item.subDeptHeader,
                        filterValuePassed: item.filterValue,
                        orderByPassed: item.orderBy,
                        filterPassed: item.filter,
                      })
                    }>
                    <View style={{ width: cardWidth }}>
                      <DeptCard
                        deptImage={item.deptImage}
                        deptText={item.subDeptHeader}
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
export { TilesSubDeptScreen };
