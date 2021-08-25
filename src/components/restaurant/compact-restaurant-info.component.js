import React from "react";

import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

import styled from "styled-components/native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const Title = styled(Text)`
  margin-top: 5px;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  // porque si no hay un bug, ya que solo queremos usar compactweb en el mapa
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Title center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Title>
    </Item>
  );
};
