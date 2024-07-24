export default function SubHeading({ text, isPrimary = false }) {
  const styles = {
    color: isPrimary ? "rgba(233, 252, 209, .8)" : "#229D7E",
  };

  return (
    <h2 style={styles} className="font-poppins uppercase mt-3 text-lg font-semibold" >
      {text}
    </h2>
  );
}
