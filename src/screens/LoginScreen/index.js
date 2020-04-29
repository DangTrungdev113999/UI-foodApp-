import React from 'react';
import styled from 'styled-components';

import { Text, Input, Block, Body, Button } from '../../components';
import FbIcon from '../../assets/fbIcon.png';
import GoogleIcon from '../../assets/googleIcon.png';

const Image = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

function LoginScreen() {
  return (
    <Body>
      <Block flex={1}  p='24px' bgColor='#F7F5F7'>
        <Text h3 center m='50px 0' p='50px 0 0'>Sign in</Text>

        <Block m="20px 0 0">
          <Text weight='bold' m="0 0 5px">Email ID</Text>
          <Input border placeholder='Email ID' radius p='10px' bgColor="#fff" />
        </Block>

        <Block m="20px 0 0">
          <Text weight='bold' m="0 0 5px">Password</Text>
          <Input border placeholder='Password' radius p='10px' bgColor="#fff" />
          <Button m="10px 0 0">
            <Text size={16} weight='bold' left>Forgot password?</Text>
          </Button>
        </Block>

        <Button width="100%" height='50px' m="35px 0 0" centered middle borderRadius={8} bgColor="#eb3d25">
          <Text color='#fff' h6>Sign in</Text>
        </Button>

        <Text size={16} center m="20px 0">or</Text>

        <Block direction='row' centered>
          <Button
            flex={1}
            height='50px'
            m="0 5px 0 0"
            direction='row'
            centered
            middle
            borderWidth={1}
            borderRadius={8}
          >
            <Image source={GoogleIcon} />
            <Text color='#000' weight='bold'>Google</Text>
          </Button>

          <Button
            flex={1}
            height='50px'
            m="0 0 0 5px"
            bgColor='#486ba3'
            direction='row'
            centered
            middle
            borderRadius={8}
          >
            <Image source={FbIcon} />
            <Text color='#fff' weight='bold'>Facebook</Text>
          </Button>
        </Block>

        <Block direction='row' centered m="50px 0 0">
          <Text>Not yet a remenber{' '}</Text>
          <Button>
            <Text color='#eb3d25' weight='bold'>Sign up</Text>
          </Button>
        </Block>
      </Block>
    </Body>
  )
}

export default LoginScreen;
