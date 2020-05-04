import React from 'react';

import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItem from './PopularItem';
import NearByDetail from './NearByDeals';
import { Text, Body, Block } from '../../components'

function Home() {
  return (
    <Body>
      <Block flex={1} bgColor='#F7F5F7' p='24px' >
        <SearchBar />
        <TopCategories />
        <Block height='1px' bgColor='#EFEEEE' />
        <PopularItem />
        <Block height='1px' bgColor='#EFEEEE' />
        <NearByDetail />
      </Block>
    </Body>
  )
}

export default Home;
