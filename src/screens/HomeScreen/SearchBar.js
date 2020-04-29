import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, Block, Button, Input } from '../../components'

function SearchBar() {
  return (
    <Block direction='row'>
      <Button bgColor='#fff' p='10px' borderRadius={4} shadow>
        <Feather name='map-pin' size={20} />
      </Button>

      <Block>
        
      </Block>
    </Block>
  )
}

export default SearchBar;
