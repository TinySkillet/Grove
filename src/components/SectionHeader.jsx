export default function SectionHeader({
  text,
  classes,
  width,
  center = false,
}) {
  const styles = {
    width: width,
    textTransform: "capitalize",
    fontSize: "2.5rem",
    textAlign: center ? "center" : "left",
  };

  return (
    <h1 style={styles} className={classes}>
      {text}
    </h1>
  );
}
