import Image from "./Image";
import sapiensImg from "../assets/sapiens.png";
import SubHeading from "./SubHeading";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-7 mt-10">
      <div className="flex flex-col">
        <h1 className="uppercase text-creamGreen text-6xl font-poppins font-medium leading-normal">
          welcome to grove
        </h1>
        <SubHeading
          text="the business social media platform for nepal"
          isPrimary={true}
        />
        <Paragraph
          width="525px"
          text="Connect with sellers, discover products, and engage with the community.
                Grove is designed to help businesses showcase their products and connect
                with customers easily."
          classes="text-paragraphGreen text-lg leading-snug mt-3 mb-12"
        />
        <div className="flex gap-2">
          <Button isPrimary={true} text="Login" />
          <Button isPrimary={false} text="Signup" />
        </div>
      </div>
      <Image
        img={sapiensImg}
        height="550px"
        width="618px"
        alt="hero image"
      />
    </div>
  );
}
