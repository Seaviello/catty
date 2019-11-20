import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationTab} from './NavigationTab';
import {ABOUT, CUSTOMISE, INFO, ScrollContext} from '../contexts/ScrollContext';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Navigation: React.FC = () => {
  const {scrollTo} = useContext(ScrollContext);

  return (
    <View style={styles.container}>
      <NavigationTab text={'Info'} onPress={() => scrollTo!(INFO)} />
      <NavigationTab
        text={'About'}
        onPress={() => scrollTo!(ABOUT)}
        withSeparator={true}
      />
      <NavigationTab text={'Customise!'} onPress={() => scrollTo!(CUSTOMISE)} />
    </View>
  );
};

export default Navigation;
