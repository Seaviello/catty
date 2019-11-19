import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props {
  text: string;
  last?: boolean;
}

const NavigationTab: React.FC<Props & TouchableOpacityProps> = ({
  text,
  last,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, !last && styles.withSeparator]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEDEDE',
    height: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  withSeparator: {
    borderRightColor: 'gray',
    borderRightWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export {NavigationTab};
