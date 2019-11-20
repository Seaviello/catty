import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card} from './components/Card/Card';
import {ABOUT, CUSTOMISE, INFO, ScrollContext} from './contexts/ScrollContext';
import {AppState} from './store/reducers';
import {
  resetColor as resetColorAction,
  setColor as setColorAction,
} from './store/actions/themeActions';
import {getRandomColor} from './utils/getRandomColor';

const backgroundColorSelector = (state: AppState) =>
  state.theme.appBackgroundColor;

export const Core = () => {
  const {registerNode} = useContext(ScrollContext);
  const infoRef = useRef<View>(null);
  const aboutRef = useRef<View>(null);
  const customiseRef = useRef<View>(null);
  useEffect(() => {
    registerNode!({id: ABOUT, node: aboutRef});
    registerNode!({id: INFO, node: infoRef});
    registerNode!({id: CUSTOMISE, node: customiseRef});
  }, []);

  const backgroundColor = useSelector<
    AppState,
    ReturnType<typeof backgroundColorSelector>
  >(backgroundColorSelector);
  const dispatch = useDispatch();
  const handleResetColor = useCallback(() => dispatch(resetColorAction()), [
    dispatch,
  ]);
  const handleSetColor = useCallback(
    () => dispatch(setColorAction(getRandomColor())),
    [dispatch],
  );

  const coreStyles = StyleSheet.flatten([styles.core, {backgroundColor}]);
  return (
    <View style={coreStyles}>
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
          }>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={handleResetColor}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSetColor}>
              <Text style={styles.buttonText}>Randomize</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  core: {
    flex: 1,
    paddingVertical: 24,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1565c0',
    minWidth: 120,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
