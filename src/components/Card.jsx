import Paragraph from "./Paragraph";
import Image from "./Image";

export default function Card({ heading, description, img }) {
  const styles = {
    borderRadius: "12px",
  };

  return (
    <div style={styles} className="shadow-md flex flex-col gap-3 items-center">
      <h2
        className="font-poppins uppercase mt-3 text-lg font-semibold text-black"
      >
        {heading}
      </h2>
      <Paragraph
        text={description}
        classes="text-black text-md font-poppins mb-6 leading-snug"
        width="300px"
      />
      <Image width="340px" img={img} alt="login img" rounded={true} />
    </div>
  );
}
