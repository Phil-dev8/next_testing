import React from "react";

export default function btc(props) {
  console.log(props.results.bpi.USD.rate);
  return (
    <div>
      <h1>Le BTC est à : {props.results.bpi.USD.rate} </h1>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await data.json();
  return {
    props: {
      results,
    },
  };
}
