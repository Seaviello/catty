import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from './navigation/Navigation';
import {ScrollContext, useScrollHandler} from './contexts/ScrollContext';
import {persistor, store} from './store/store';
import {Core} from './Core';

const App = () => {
  const {scrollView, registerNode, scrollTo} = useScrollHandler();
  const contextValue = useRef({registerNode, scrollTo});
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ScrollContext.Provider value={contextValue.current}>
          <SafeAreaView style={styles.container}>
            <ScrollView ref={scrollView} stickyHeaderIndices={[0]}>
              <Navigation />
              <Core />
            </ScrollView>
          </SafeAreaView>
        </ScrollContext.Provider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  core: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: '#90caf9',
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  shoutOut: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: 40,
  },
});
export default App;
