import React, { Component } from 'react';
import { Text, View, Platform, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from '../components/common';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated: false,
      typedEmail: '',
      typedPassword: '',
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
      console.log(`changed User : ${JSON.stringify(changedUser)}`);
      this.setState({ user: changedUser });
    });
  }
  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
  _onAnonymousLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log(`Login successfully`);
        this.setState({
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        console.log(`Login failed. Error = ${error}`);
      });
  };
  _onRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword,
      )
      .then((loggedInUser) => {
        this.setState({ user: loggedInUser });
        console.log(`Register with user : ${JSON.stringify(loggedInUser)}`);
      })
      .catch((error) => {
        console.log(`Register fail with error: ${error}`);
      });
  };
  _onLogin = () => {
    if (this.state.typedEmail.trim() === '') {
      alert('Please enter email address');
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword,
      )
      .then((loggedInUser) => {
        this.setState({ user: loggedInUser });
        console.log(`Login with user : ${JSON.stringify(loggedInUser)}`);
      })
      .then(this._navigateToAuthAccountScreen)
      .catch((error) => {
        console.log(`Login fail with error: ${error}`);
      });
  };

  _navigateToAuthAccountScreen = () => {
    this.props.navigation.navigate('AuthAccount'); //need to pass loggedInUser to AuthAccount -> ShowAddTileButton
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: Platform.OS === 'ios' ? 30 : 0,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 40,
          }}>
          Welcome! Please Login!
        </Text>

        {/*}
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this._onAnonymousLogin}
                >Login anonymous</Button>
                <Text style={{ margin: 20, fontSize: 15, }}>
                    {this.state.isAuthenticated == true ? 'Logged in anonymous' : ''}
                </Text>
                */}
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            color: 'black',
          }}
          keyboardType="email-address"
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          placeholder="Enter your email"
          autoCapitalize="none"
          returnKeyType={'next'}
          onChangeText={(text) => {
            this.setState({ typedEmail: text });
          }}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            color: 'black',
          }}
          keyboardType="default"
          ref={(input) => {
            this.passwordInput = input;
          }}
          placeholder="Enter your password"
          secureTextEntry={true} //stars for input
          onChangeText={(text) => {
            this.setState({ typedPassword: text });
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            style={{ fontSize: 17, color: 'white' }}
            onPress={this._onRegister}>
            Register
          </Button>
          <Button
            style={{ fontSize: 17, color: 'white' }}
            onPress={this._onLogin}>
            Login
          </Button>
        </View>
      </View>
    );
  }
}

export { AuthLoadingScreen };
