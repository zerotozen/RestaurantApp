import React, { useContext } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { FavouritesContext } from "../../../services/favourites/favourites.contex";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";

import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const { restaurants } = useContext(RestaurantsContext);

  const FavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      {favourites.length ? (
        <SafeArea>
          <RestaurantList
            data={favourites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Restaurant Details", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </SafeArea>
      ) : (
        <FavouritesArea>
          <Text>No favourites yet</Text>
        </FavouritesArea>
      )}
    </>
  );
};
