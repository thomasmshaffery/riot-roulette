import styles from "./Champion.module.css";

function Champion({ champion, champions }) {
  const championImage =
    `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/` +
    champion +
    `_0.jpg`;
  return (
    <div className={styles.champion}>
      <h1>{champions.data[champion].name}</h1>
      <img src={championImage}></img>
      <h2>{champions.data[champion].blurb}</h2>
    </div>
  );
}
export default Champion;
