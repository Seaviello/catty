import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface Props {
  imageUrl: string;
  header: ReactNode;
  description: ReactNode;
  headerSuffix?: ReactNode;
}
export const Card: FC<Props> = ({
  imageUrl,
  header,
  headerSuffix,
  description,
  children,
  ...props
}) => {
  return (
    <View style={styles.container} {...props}>
      <Image source={{uri: imageUrl, height: 320}} />
      <View style={styles.content}>
          <View style={styles.header}><Text style={styles.headerText}>{header}</Text>{headerSuffix}</View>

          <View style={styles.description}>
              <Text>{description}</Text>
          </View>
          {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFF'
  },
  content: {
      padding: 20,
      paddingTop: 10,
  },
  header: {
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: "row",
      justifyContent: "space-between",
  },
    headerText: {
        fontSize: 32,
        fontWeight: "700",
    },
    description: {
      paddingVertical: 10,
    }
});
