import React, { useContext, useState } from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartContext } from "../../../services/cart/cart.context";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { payRequest } from "../../../services/checkout/checkout.service";

import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { Divider, List } from "react-native-paper";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - ${price / 100} €`}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <Spacer position="top" size="large" />
        <Divider />
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
        </Spacer>
        <Spacer position="top" size="xl" />
        <PayButton
          icon="cash"
          mode="contained"
          onPress={onPay}
          disable={isLoading}
        >
          PAY
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            disable={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            CLEAR
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
