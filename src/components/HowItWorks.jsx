import Subtitle from "./Subtitle";
import SectionHeader from "./SectionHeader";
import Paragraph from "./Paragraph";
import Card from "./Card";
import loginImg from "../assets/logincardimg.png";
import profileImg from "../assets/setProfile.png";
import cartImg from "../assets/cart.png";

export default function HowItWorks() {
  return (
    <div className="text-center">
      <Subtitle text="Connect, Post, and Engage with Ease" center={true} />
      <div className="flex justify-center">
        <SectionHeader
          text="Discover How Grove Simplifies Business Networking"
          width="700px"
          classes="text-black font-poppins font-normal leading-tight mt-1"
          center={true}
        />
      </div>
      <div className="flex justify-center mt-5">
        <Paragraph
          text="Learn how to navigate Grove and maximize your business potential through easy-to-follow steps."
          classes="text-black text-md leading-snug font-poppins"
          width="600px"
        />
      </div>
      <div className="grid grid-cols-3 gap-5 grid-rows-1 mt-14">
        <Card
          heading="sign up"
          description="Provide your basic details and set up an account to get started."
          img={loginImg}
        />
        <Card
          heading="set up your profile"
          description="Provide your basic details and set up an account to get started."
          img={profileImg}
        />
        <Card
          heading="post your products"
          description="Provide your basic details and set up an account to get started."
          img={cartImg}
        />
      </div>
    </div>
  );
}
