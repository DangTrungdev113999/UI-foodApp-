import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import SplashImage from '../../assets/Splash.png';

const ImageBackground = styled.ImageBackground`
  flex: 1;
`

function Splash() {
  const timerRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    timerRef.current = setTimeout(() => navigation.navigate('Login'), 2000)

    return () => {
      clearTimeout(timerRef.current);
    }
  }, []);

  return (
    <ImageBackground source={SplashImage} />
  )
}

export default Splash;
