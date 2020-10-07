/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Home,
  SFDetailsScreen,
  SCDetailsScreen,
  AboutUsScreen,
  NewProdsScreen,
  NewProdsListScreen,
  FavoritesScreen,
  AuthLoadingScreen,
  AccountScreen,
  AuthAccountScreen,
  ProductsDeptScreen,
  TilesSubDeptScreen,
  ProductsListScreen,
  PrivacyPolicyScreen,
  ProductItemScreen,
  SearchScreen,
} from './screens';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  TabBarBottom,
  HeaderBackButton,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';
import { View, Image } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}

const ProductsStackNavigator = createStackNavigator({
  Products: {
    screen: ProductsDeptScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),

      headerRight: (
        <MatIcon
          style={{ margin: 15 }}
          name={'magnify'}
          color={'white'}
          size={25}
          onPress={() => navigation.navigate('SearchScreen')}
        />
      ),
    }),
  },
  TilesSubDept: {
    screen: TilesSubDeptScreen,
  },
  ProductsList: {
    screen: ProductsListScreen,
  },
  ProductItem: {
    screen: ProductItemScreen,
  },
  SearchScreen: {
    screen: SearchScreen,
  },
});
/*
const AuthLoadingSwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoadingScreen,
        },
        Account: {
            screen: AccountScreen
        },
        AuthAccount: {
            screen: AuthAccountScreen
        }
    },
    {
        initialRouteName: 'AuthLoading'
    }
)
*/
const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    //back button in header
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
  ProductItem: {
    screen: ProductItemScreen,
  },
});
const AboutUsStackNavigator = createStackNavigator({
  AboutUs: {
    screen: AboutUsScreen,
    //back button in header
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
});
const PrivacyPolicyStackNavigator = createStackNavigator({
  PrivacyPolicy: {
    screen: PrivacyPolicyScreen,
    //back button in header
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
});
const NewProdsStackNavigator = createStackNavigator(
  {
    NewProds: {
      screen: NewProdsScreen,
      //back button in header
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor="white"
            onPress={() => navigation.goBack(null)}
          />
        ),
      }),
    },
    NewProdsList: {
      screen: NewProdsListScreen,
    },
    ProductItem: {
      screen: ProductItemScreen,
    },
  },
  {
    navigationOptions: {},
  },
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <MatIcon
          style={{ margin: 15 }}
          name={'menu'}
          color={'white'}
          size={25}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: (
        <MatIcon
          style={{ margin: 15 }}
          name={'magnify'}
          color={'white'}
          size={25}
          onPress={() => navigation.navigate('SearchScreen')}
        />
      ),
    }),
  },
  SFDetails: {
    screen: SFDetailsScreen,
  },
  SCDetails: {
    screen: SCDetailsScreen,
  },
  SearchScreen: {
    screen: SearchScreen,
  },
  ProductsDept: {
    screen: ProductsDeptScreen,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <MatIcon
          style={{ margin: 15 }}
          name={'magnify'}
          size={25}
          onPress={() => navigation.navigate('SearchScreen')}
        />
      ),
    }),
    //  AboutUs: {
    //    screen: AboutUsScreen,
    //}
  },
});

const TabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
    },
    Products: {
      screen: ProductsStackNavigator,
    },
    New: {
      screen: NewProdsStackNavigator,
    },
    Favorites: {
      screen: FavoritesStackNavigator,
    },
  },
  {
    resetOnBlur: true, //resets stack for each tab
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Products') {
          iconName = 'cart';
        } else if (routeName === 'Favorites') {
          iconName = 'heart';
        } else if (routeName === 'New') {
          iconName = 'new-box';
          //  } else if (routeName === "Account") {
          //    iconName = 'account-box'
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MatIcon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      labelStyle: {
        // fontSize: 13,
      },
      style: {
        borderTopWidth: 0.75,
        borderTopColor: '#ddd',
        paddingTop: 5,
      },
    },
  },
);

const DrawerContent = (props) => (
  <View>
    <Image
      style={{ width: '40%', height: '33%', marginLeft: 20 }}
      resizeMode={'contain'}
      source={require('/Users/patri/Documents/React Native Projects/BestTile/src/resources/BTIcon.png')}
    />
    <DrawerItems {...props} />
  </View>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabsNavigator,
    },
    Products: {
      screen: ProductsStackNavigator,
    },
    New: {
      screen: NewProdsStackNavigator,
    },
    Favorites: {
      screen: FavoritesStackNavigator,
    },
    AboutUs: {
      screen: AboutUsStackNavigator,
    },
    /*
    Account: {
        screen: AuthLoadingSwitchNavigator,
    },
    */
    PrivacyPolicy: {
      screen: PrivacyPolicyStackNavigator,
    },
  },
  {
    contentComponent: DrawerContent,
    overlayColor: 'rgba(0,0,0,0.7)',
    resetOnBlur: true,
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Products') {
          iconName = 'cart';
        } else if (routeName === 'Favorites') {
          iconName = 'heart';
        } else if (routeName === 'New') {
          iconName = 'new-box';
        } else if (routeName === 'AboutUs') {
          iconName = 'information';
          //  } else if (routeName === "Account") {
          //    iconName = 'account-circle'
        } else if (routeName === 'PrivacyPolicy') {
          iconName = 'lock';
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
        }
        return <MatIcon name={iconName} size={25} color={tintColor} />;
      },
    }),
    contentOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'transparent',
    },
  },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default App;
