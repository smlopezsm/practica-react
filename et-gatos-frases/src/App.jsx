import "./style.css";
import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>CATS FACTS</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img src={imageUrl} alt={`image extracted from cat fact: ${fact}`} />
        )}
      </section>
    </main>
  );
}

export default App;
