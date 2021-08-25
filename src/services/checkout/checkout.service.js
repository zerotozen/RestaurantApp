import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51JJ2LsFKj0H50yPFJrc5MHgHRuC4HXXT8qfgK3ZM7JAWHOT92GZXo8wKGJcsr2hRQKCaZgJKWkt2I1FU88ywXalt00PC6FiLPJ"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
