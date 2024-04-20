/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode? styles.whiteText : styles.blackText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});

export default AppPro;
