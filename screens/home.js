import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#AFD5F0'}
          centerComponent={{
            text: 'Learn Ease',
            style: { color: 'black', fontSize: 20, borderRadius: 50 },
          }}
        
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
flex: 1,
  },
});
