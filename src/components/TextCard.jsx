import Image from "./Image";
import Paragraph from "./Paragraph";

export default function TextCard({ img, title, description }) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <div>
        <Image img={img} height="38px" width="38px" />
      </div>
      <h2 className="text-black font-poppins text-xl">{title}</h2>
      <Paragraph
        text={description}
        classes="text-black text-sm font-normal leading-snug font-poppins"
        width="340px"
      />
    </div>
  );
}
