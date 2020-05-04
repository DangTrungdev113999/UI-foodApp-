import React, { memo } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Block, Text, Button } from '../../components/index';

function TopHeader({ title, moreTitle, moreIcon }) {
  return (
    <Block direction='row' justifyContent='space-between' middle p="5px 0" m='10px 0 0' >
      <Text h5>{title}</Text>
      <Button>
        <Block direction='row'>
          <Feather size={18} color="#ADABAC" name={moreIcon} />
          <Text color="#ADABAC"> {'  '}{moreTitle}</Text>
        </Block>
      </Button>
    </Block>
  )
}

export default TopHeader;
