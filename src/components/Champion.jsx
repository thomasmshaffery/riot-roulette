import styles from "./Champion.module.css";

function Champion({ champion, championData }) {
  const championImage =
    `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/` +
    champion +
    `_0.jpg`;
  return (
    <div className={styles.champion}>
      <h1>
        {championData.name} {championData.title}
      </h1>
      <img src={championImage}></img>
      <h2>{championData.blurb}</h2>
    </div>
  );
}
export default Champion;
