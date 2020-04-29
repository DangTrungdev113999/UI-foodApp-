import React from 'react';

import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import { Text, Body, Block } from '../../components'

function Home() {
  return (
    <Body>
      <Block flex={1} bgColor='#F7F5F7' p='24px' >
        <SearchBar />
        <TopCategories />
      </Block>
    </Body>
  )
}

export default Home;
