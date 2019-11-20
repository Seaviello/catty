import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props {
  text: string;
  withSeparator?: boolean;
}

const NavigationTab: React.FC<Props & TouchableOpacityProps> = ({
  text,
  withSeparator,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, withSeparator && styles.withSeparator]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withSeparator: {
    borderColor: 'gray',
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export {NavigationTab};
