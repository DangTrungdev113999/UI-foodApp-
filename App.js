/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Text from './src/components/TextView';
import Block from './src/components/Block';

const App = () => {
  return (
    <>
      <ScrollView>
        <Text h6> This is text </Text>
        <Text h5> This is text </Text>
        <Text h4> This is text </Text>
        <Text h3> This is text </Text>
        <Text h2> This is text </Text>
        <Text h1> This is text </Text>

        <View><Text>asdf</Text></View>
        <Block
          width='100%'
          height={50}
          border
          paddingVertical={10}
          paddingHorizontal={20}
          bgColor='skyblue'
          shawdow
          borderRadius={999}
          justifyContent='center'
          direction='row'
          middle='center'
          shawdow
        >
          <Text weight='thin' h6 color='white'> This is text </Text>
        </Block>
      </ScrollView>
    </>
  );
};



export default App;
