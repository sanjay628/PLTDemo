import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DashboardScreen from '../screens/dashboard/dashboard.screen';
import CartScreen from '../screens/cart/cart.screen';
import {NavigationRoutes} from '../utils';

const Stack = createStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.DASHBOARD_SCREEN}>
        <Stack.Screen
          name={NavigationRoutes.DASHBOARD_SCREEN}
          component={DashboardScreen}
          options={{
            headerShown: true,
            headerTitle: 'PrettyLittleThing',
          }}
        />
        <Stack.Screen
          name={NavigationRoutes.CART_SCREEN}
          component={CartScreen}
          options={{
            headerShown: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
