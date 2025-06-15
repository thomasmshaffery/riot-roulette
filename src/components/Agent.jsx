import styles from "./Agent.module.css";

function Agent({ agent }) {
  const gradients = agent.backgroundGradientColors;

  const h1Gradient =
    "linear-gradient(#" + gradients[0] + ", #" + gradients[1] + ")";

  //   -webkit-background-clip\: text\;
  //   -webkit-text-fill-color\: transparent;`;
  return (
    <div className={styles.agent}>
      <h1
        style={{
          backgroundImage: h1Gradient,
          color: "transparent",
          backgroundClip: "text",
        }}
      >
        {agent.displayName}
      </h1>
      <img src={agent.bustPortrait}></img>
      <h2>{agent.description}</h2>
    </div>
  );
}
export default Agent;
