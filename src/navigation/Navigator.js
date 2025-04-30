import React, { useEffect, useState } from "react";
// import { TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AUTHSTACK,
  AUTH_LOADING_SCREEN,
  Intro_Screen,
  LOGIN,
} from "./routes";
import NavigationService from "./NavigationService";
import AuthLoading from "../screens/AuthLoading";
import Login from "../screens/Login";
import IntroScreen from "../screens/introScreen/IntroScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;

const RootStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={AUTH_LOADING_SCREEN}
      component={AuthLoading}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AUTHSTACK}
      component={AuthStack}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
);

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Intro_Screen} component={IntroScreen} />
      <Stack.Screen name={LOGIN} component={Login} />

    </Stack.Navigator>
  );
};
