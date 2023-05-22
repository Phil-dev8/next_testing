import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function liste(props) {
  const router = useRouter();
  return (
    <div>
      <h1 className={styles.title}>{router.query.liste}</h1>
      <table className={styles.tableau}>
        <tbody>
          {props.listePage.map((el, index) => (
            <tr key={index}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  const liste = context.params.liste;
  const data = await import("../../../data/vocabularylist.json");
  const listePage = data.englishList.find((list) => list.name === liste);

  return {
    props: { listePage: listePage.data },
  };
}

export async function getStaticPaths() {
  const data = await import("../../../data/vocabularylist.json");
  const paths = data.englishList.map((elem) => ({
    params: { liste: elem.name },
  }));
  return {
    // paths: [{ params: { liste: paths } }],
    paths,
    fallback: false,
  };
}
