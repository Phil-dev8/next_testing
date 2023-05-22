import styles from "@/styles/Home.module.css";
// import Link from "next/link";
import DropdownMenu from "../../components/DropDownMenu/DropDownMenu";
import Article from "../../components/Article/Article";

export default function Home(props) {
  return (
    <div>
      <h1 className={styles.title}>Vocabulaire</h1>
      <table className={styles.tableau}>
        <tbody>
          {props.array.map((el, index) => (
            <tr key={index}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Article />
      <DropdownMenu />
    </div>
  );
}

export async function getStaticProps() {
  const data = await import(`../../data/vocabulary.json`);
  const array = data.vocabulary;
  return {
    props: {
      array,
    },
  };
}
