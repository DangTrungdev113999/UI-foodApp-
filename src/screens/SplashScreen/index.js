import React from 'react';
import styled from 'styled-components';
import SplashImage from '../assets/Splash.png';

const ImageBackground = styled.ImageBackground`
flex: 1;
`

function Splash() {
  return (
    <ImageBackground  source={SplashImage} />
  )
}

export default Splash;
