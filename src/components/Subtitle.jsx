export default function Subtitle({ text, center = false }) {
  const styles = {
    textAlign: center ? "center" : "left",
  };

  return (
    <h2
      style={styles}
      className="text-subtitleGreen text-sm uppercase font-semibold"
    >
      {text}
    </h2>
  );
}
