import React, { Component } from 'react';
import { Platform, TextInput, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClearButton: false,
    }
  }
  showButton = () => {
    this.setState({ showClearButton: true })
  }
  hideButton = () => {
    this.setState({ showClearButton: false })
  }
  clearText = () => {
    this.textInput.clear()
  }
  renderClearButton = () => {
    if (Platform.OS === 'android') {
      return (
        <TouchableOpacity
          onPress={() => this.clearText()}
        >
          <MatIcon
            name={'close'}
            color={'grey'}
            size={25}
          />
        </TouchableOpacity>
      )
    }
  }
  render() {
    const { textInputStyle, searchBarStyle } = styles;
    return (
      <View style={searchBarStyle}>
        <TextInput
          style={textInputStyle}
          placeholder='Search'
          placeholderTextColor='grey'
          onChangeText={this.props.onChangeText}
          value={this.props.searchValue}
          returnKeyLabel='search'
          returnKeyType='search'
          onSubmitEditing={this.props.onSubmitEditing}
          autoFocus={true}
          clearButtonMode={'always'}
          selectionColor='rgba(255,0,0,0.6)'
          onFocus={() => this.showButton()}
          onBlur={() => this.hideButton()}
          ref={input => { this.textInput = input }}
        />
        {this.state.showClearButton ? this.renderClearButton() : null}
      </View>
    )
  }
}

const styles = {
  searchBarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    // height: 35,
    width: Dimensions.get('window').width * 0.65,
    paddingLeft: 4,
    paddingRight: 4,

  },
  textInputStyle: {
    flex: 1,
    fontSize: 15,
    height: 35,
    // backgroundColor: 'white',
    // height: 30,
    // width: 250,
    // margin: 3,
    padding: 4,
    // borderColor: '#ddd',
    // borderWidth: 1,
  },
};

export default SearchBar
