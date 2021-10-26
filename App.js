import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Transition} from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Screens

const Screen = ({navigation, buttonRouteName, backgroundColor}) => {
  const handlePress = () => navigation.navigate(buttonRouteName);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{backgroundColor: 'white', padding: 20, borderRadius: 5}}>
        <Text>To {buttonRouteName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <Screen
      backgroundColor={'dodgerblue'}
      buttonRouteName={'Settings'}
      navigation={navigation}
    />
  );
};

const Settings = ({navigation}) => {
  return (
    <Screen
      backgroundColor={'darkorange'}
      buttonRouteName={'Home'}
      navigation={navigation}
    />
  );
};

// Navigation

const Navigator = createAnimatedSwitchNavigator(
  {Home, Settings},
  {
    initialRouteName: 'Home',
    transition: (
      <Transition.Together>
        <Transition.Out
          type={'slide-left'}
          durationMs={260}
          interpolation="easeOut"
        />
        <Transition.In
          type={'slide-right'}
          durationMs={260}
          interpolation="easeOut"
        />
      </Transition.Together>
    ),
  },
);

const NavigationContainer = createAppContainer(Navigator);

// App

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer />
    </GestureHandlerRootView>
  );
};

export default App;
