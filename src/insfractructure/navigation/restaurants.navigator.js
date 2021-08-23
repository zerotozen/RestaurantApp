import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screen/restaurant-detail.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screen/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      // headerMode="none"
      screenOptions={{
        //...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />

      <RestaurantStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
