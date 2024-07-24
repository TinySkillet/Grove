export default function Button({ isPrimary = false, text }) {
  const style = {
    boxSizing: "border-box",
    background: isPrimary ? "#E9FCD1" : "none",
    fontFamily: "Poppins",
    border: isPrimary ? "none" : "1px solid #E9FCD1",
    borderRadius: "30px",
    width: "121px",
    height: "53px",
    cursor: "pointer",
    color: isPrimary ? "black" : "#E9FCD1",
    fontWeight: "500",
  };

  return (
    <button style={style} className="hover:opacity-80 ease duration-200">
      {text}
    </button>
  );
}
