import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Splash from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import {Block, Button, Text} from './src/components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <Block
      direction="row"
      bgColor="#FD0014"
      style={{
        paddingBottom: 40,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const getIcon = () => {
          if (route.name == 'Home') {
            return 'explore';
          }

          if (route.name == 'Profile') {
            return 'verified-user';
          }

          if (route.name == 'Search') {
            return 'search';
          }

          return 'shopping-cart';
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            onPress={onPress}
            onLongPress={onLongPress}
            block={isFocused}
            key={route.name}>
            <Block
              p="8px 20px"
              m="14px"
              direction="row"
              middle
              centered
              bgColor={isFocused ? 'rgba(255,159,243,0.3)' : '#FD0014'}
              borderRadius={20}>
              <MaterialIcons
                name={getIcon()}
                color={isFocused ? '#fff' : '#222'}
                size={25}
              />
              {isFocused && (
                <Text color={isFocused ? '#fff' : '#222'}>
                  {' '}
                  {'  '}
                  {label}{' '}
                </Text>
              )}
            </Block>
          </Button>
        );
      })}
    </Block>
  );
}

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Card" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
