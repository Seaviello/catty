import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Navigation from './src/navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Navigation />
        <View />
      </SafeAreaView>
    );
  }
}
export default App;
