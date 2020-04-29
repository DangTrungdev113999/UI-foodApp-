import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, Block, Button, Input } from '../../components'

function SearchBar() {
  return (
    <Block direction='row'>
      <Button bgColor='#fff' p='10px' borderRadius={6} shadow centered middle>
        <Feather name='map-pin' size={24} color='#000' />
      </Button>

      <Block
        flex={1}
        bgColor='#fff'
        p='0 10px'
        m="0 0 0 10px"
        borderRadius={6}
        shadow
        direction='row'
        centered
        middle
      >
        <Block flex={1}>
          <Input placeholder='Search for meats or eara' fontSize={18} />
        </Block>
        <Feather name='search' size={24} />
      </Block>

    </Block>
  )
}

export default SearchBar;
