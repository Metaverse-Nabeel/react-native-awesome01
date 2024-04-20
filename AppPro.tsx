/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 28,
  },
  blackText: {
    color: '#000',
    fontSize: 28,
  },
});

export default AppPro;
