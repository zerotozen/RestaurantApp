import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourites.component";
import { View } from "react-native";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  Rating,
  Icon,
  placeId,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1Q5JGgIDuWKirjh5iu-dpgHaEf%26pid%3DApi&f=1",
    photos = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiscoversg.com%2Fwp-content%2Fuploads%2Fsites%2F32%2F2016%2F05%2FChinese-Take-Out-Boxes.jpg&f=1&nofb=1",
    ],
    address = "Some Street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporaly = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporaly && <Text variant="error">CLOSED TEMPORALY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
