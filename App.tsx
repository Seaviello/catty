import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {Card} from './src/components/Card/Card';
import {ABOUT, CUSTOMISE, INFO, ScrollContext, useScrollHandler,} from './src/contexts/ScrollContext';

const App = () => {
  const {scrollView, registerNode, scrollTo} = useScrollHandler();
  const infoRef = useRef<View>(null);
  const aboutRef = useRef<View>(null);
  const customiseRef = useRef<View>(null);
    registerNode({id: ABOUT, node: aboutRef});
    registerNode({id: INFO, node: infoRef});
    registerNode({id: CUSTOMISE, node: customiseRef});
  return (
    <ScrollContext.Provider value={scrollTo}>
      <SafeAreaView style={styles.container} >
        <ScrollView ref={scrollView}>
          <Navigation />
          <View style={styles.core}>
            <View style={styles.card} ref={infoRef}>
              <Card
                imageUrl={'https://cataas.com/cat/says/woff'}
                header={'Intro'}
                description={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
              />
            </View>
            <View style={styles.card} ref={aboutRef}>
              <Card
                imageUrl={'https://cataas.com/cat/says/hola'}
                header={'About'}
                description={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
                headerSuffix={<Text style={styles.shoutOut}>NEW!!!</Text>}
              />
            </View>
            <View style={styles.card} ref={customiseRef}>
              <Card
                imageUrl={'https://cataas.com/cat/says/meow'}
                header={'Customise!'}
                description={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollContext.Provider>
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
