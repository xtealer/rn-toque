import React from 'react';
import { appColors } from './src/styles/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//* imported views
import MenuView from './src/views/MenuView';
import SplashView from './src/views/SplashView';
import GenderView from './src/views/GenderView';
import ScheduleView from './src/views/ScheduleView';
import LastDigitView from './src/views/LastDigitView';
import IsDisabledView from './src/views/IsDisabledView';
import IsOlderThanView from './src/views/IsOlderThanView';
import SocialNetworks from './src/views/SocialNetworksView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: false, headerTitleAlign: 'center', headerTintColor: appColors.textPrimary }} >
          <Stack.Screen name="Splash" component={SplashView} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={MenuView} options={{ headerShown: false }} />
          <Stack.Screen name="Gender" component={GenderView} options={{ headerShown: false }} />
          <Stack.Screen name="IsDisabled" component={IsDisabledView} options={{ headerShown: false }} />
          <Stack.Screen name="IsOlderThan" component={IsOlderThanView} options={{ headerShown: false }} />
          <Stack.Screen name="LastDigit" component={LastDigitView} options={{ headerShown: false }} />
          <Stack.Screen name="Schedule" component={ScheduleView} options={{ headerShown: false }} />
          <Stack.Screen name="SocialNetworks" component={SocialNetworks} options={{ title: "REDES OFICIALES" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >);
};

export default App;
