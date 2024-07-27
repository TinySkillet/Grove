import Subtitle from "./Subtitle";
import SectionHeader from "./SectionHeader";
import Paragraph from "./Paragraph";
import Button from "./Button";
import SubHeading from "./SubHeading";
import Image from "./Image";
import instaImg from "../assets/instaSvg.svg";
import fbImg from "../assets/fbsvg.svg";
import xImg from "../assets/xSvg.svg";
import pintImg from "../assets/pintSvg.svg";
import Footer from "./Footer";

export default function ReadyToGrow() {
  return (
    <div className="pt-20 flex flex-col items-center ">
      <Subtitle text="join the community today" center={true} />
      <SectionHeader
        text="Ready to Grow with Grove?"
        width="600px"
        classes="text-white font-poppins font-normal leading-tight mt-1"
        center={true}
      />
      <Paragraph
        text="Sign up now and start connecting with customers and other businesses on Grove."
        classes="text-creamWhite text-md leading-snug font-light font-poppins text-center my-7"
        width="460px"
      />
      <Button isPrimary={false} text="Sign Up" />
      <div style={{ width: "40rem" }} className="mt-80 text-center">
        <SubHeading
          text=" Keep up with the latest news and updates from Grove on our social media channels."
          isPrimary={true}
        />
      </div>
      <div className="flex gap-5 mt-8">
        <Image img={fbImg} />
        <Image img={instaImg} />
        <Image img={xImg} />
        <Image img={pintImg} />
      </div>
    </div>
  );
}
