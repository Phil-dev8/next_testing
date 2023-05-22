import React from "react";
import Link from "next/link";

export default function Index(props) {
  return (
    <>
      <h1>Les listes de vocabulaire</h1>
      {props.array.map((item, index) => (
        <p key={index}>
          <Link href={`/Listes/${item.name}`}>{item.name}</Link>
        </p>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../../../data/vocabularylist.json");
  const array = data.default.englishList;
  return {
    props: {
      array,
    },
  };
}
