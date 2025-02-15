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
  ProductsDept: {
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
    navigationOptions: ({ navigation }) => ({
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
  ProductsList: {
    screen: ProductsListScreen,
    navigationOptions: ({ navigation }) => ({
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
  ProductItem: {
    screen: ProductItemScreen,
    navigationOptions: ({ navigation }) => ({
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
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
},
  {
    headerLayoutPreset: 'center'
  }
);
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
  ProductItem: {
    screen: ProductItemScreen,
    navigationOptions: ({ navigation }) => ({
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
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
},
  {
    headerLayoutPreset: 'center'
  }
);
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
},
  {
    headerLayoutPreset: 'center'
  }
);
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
},
  {
    headerLayoutPreset: 'center'
  }
);
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
    NewProdsList: {
      screen: NewProdsListScreen,
      navigationOptions: ({ navigation }) => ({
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
    ProductItem: {
      screen: ProductItemScreen,
      navigationOptions: ({ navigation }) => ({
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
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor="white"
            onPress={() => navigation.goBack(null)}
          />
        ),
      }),
    },
  },
  {
    headerLayoutPreset: 'center'
  }
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
  ProductItem: {
    screen: ProductItemScreen,
    navigationOptions: ({ navigation }) => ({
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
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
},
  {
    headerLayoutPreset: 'center'
  }
);

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
      style={{ width: '40%', height: '33%', marginTop: 20, marginLeft: 60 }}
      resizeMode={'contain'}
      source={require('/Users/pat/Documents/React Native Projects/BestTile/src/resources/BTIcon.png')}
    />
    <DrawerItems {...props} />
  </View>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabsNavigator,
    },
    'Products': {
      screen: ProductsStackNavigator,
    },
    New: {
      screen: NewProdsStackNavigator,
    },
    Favorites: {
      screen: FavoritesStackNavigator,
    },
    'About Us': {
      screen: AboutUsStackNavigator,
    },
    /*
    Account: {
        screen: AuthLoadingSwitchNavigator,
    },
    */
    'Privacy Policy': {
      screen: PrivacyPolicyStackNavigator,
    },
  },
  {
    contentComponent: DrawerContent,
    // drawerWidth: 250,
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
        } else if (routeName === 'About Us') {
          iconName = 'information';
          //  } else if (routeName === "Account") {
          //    iconName = 'account-circle'
        } else if (routeName === 'Privacy Policy') {
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
      itemsContainerStyle: {
        marginLeft: 10,
      },
    },
  },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default App;
