import React, { Component } from 'react';
import { TextInput } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { textInputStyle } = styles;
    return (
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
      />
    )
  }
}
const styles = {
  textInputStyle: {
    backgroundColor: 'white',
    height: 30,
    width: 250,
    margin: 3,
    padding: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
};

export default SearchBar
