import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('AlbumList has mounted');
  }
  render() {
    return (
        <View>
          <Text>Album List</Text>
        </View>
    );
  }
}

export default AlbumList;
