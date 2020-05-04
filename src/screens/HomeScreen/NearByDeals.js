import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

import TopHeader from './TopHeader';

import { Text, Block, Button, Input } from '../../components';
import foodApp from '../../mooks/foodApp.json';

const W = Dimensions.get('window').width / 2;

const Image = styled.Image`
  width: ${W}px;
  height: ${W / 2}px;
  border-radius: 8px;
`

function NearByDetail() {

  const renderItem = ({ item }) => {
    return (
      <Button shadow m='5px' borderRadius={8} p='10px' bgColor="#fff">
        <Block>
          <Image source={{ uri: item.image }} />
          <Block p="8px 0">
            <Text size={16} weight='bold'>{item.name}</Text>
            <Text color="#AAAAAA">By {item.location}</Text>
            <Text size={16} weight='bold' >{item.price}</Text>
          </Block>
        </Block>
      </Button>
    )
  }

  return (
    <Block p='10px'>
      <TopHeader title='Near by detail' moreTitle='View all' />
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={foodApp}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default NearByDetail;
