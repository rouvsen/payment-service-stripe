import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 200000,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}} className="App">
      <Stripe style={{padding: "10px"}}
        stripeKey="pk_test_51Nt5U9CT1JVEtB5XORzetNCh1dTjSqIC7sEbCmYyetY0TEWSXTWMu8KH0GPp31pobEb4BWV5MYtIYSQ24p4SDf1T00qkXvEX9z"
        token={handleToken}
      />
    </div>
  );
}

export default Payment;