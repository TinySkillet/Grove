export default function Paragraph({ width, text, classes}) {
  const styles = {
    width: width,
  };

  return (
    <p style={styles} className={classes}>
      {text}
    </p>
  );
}
