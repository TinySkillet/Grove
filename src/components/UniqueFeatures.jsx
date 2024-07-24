import Image from "./Image";
import guyImg from "../assets/guyStanding.png";
import Subtitle from "./Subtitle";
import SectionHeader from "./SectionHeader";
import SubHeading from "./SubHeading";
import adImg from "../assets/advertisement.svg";
import commImg from "../assets/community.svg";
import chatImg from "../assets/chat.svg";

import Paragraph from "./Paragraph";

export default function UniqueFeatures() {
  return (
    <div className="flex items-center justify-between mt-10">
      <Image
        img={guyImg}
        height="500px"
        width="500px"
        alt="guy standing image"
      />
      <div>
        <Subtitle text="enhancing your business experience" />
        <SectionHeader
          text="powerful features that make grove unique"
          width="500px"
          classes="text-creamGreen font-poppins font-normal leading-tight mt-1"
        />
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex items-start gap-4">
            <div className="mt-5">
              <Image img={adImg} />
            </div>
            <div>
              <SubHeading text="easy product posting" isPrimary={false} />
              <Paragraph
                width="464px"
                text="Post your products easily with detailed descriptions, images, and pricing information."
                classes="text-paragraphGreen text-lg leading-snug"
              />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-5">
              <Image img={commImg} />
            </div>
            <div>
              <SubHeading text="interactive community" isPrimary={false} />
              <Paragraph
                width="464px"
                text="Engage with customers through likes, comments, and ratings."
                classes="text-paragraphGreen text-lg leading-snug"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-5">
              <Image img={chatImg} />
            </div>
            <div>
              <SubHeading text="private chat" isPrimary={false} />
              <Paragraph
                width="464px"
                text="Communicate directly with customers to answer questions and negotiate deals."
                classes="text-paragraphGreen text-lg leading-snug"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
