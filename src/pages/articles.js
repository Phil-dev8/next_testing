import { useState, useEffect } from "react";

import React from "react";

export default function articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/articles");

        const data = await response.json();
        console.log(data);
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>LISTE DES ARTICLES</h1>
      <ul>
        {articles.map((elem, index) => (
          <li key={index}>{elem.description}</li>
        ))}
      </ul>
      <h1>details</h1>
    </div>
  );
}
