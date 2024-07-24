import Subtitle from "./Subtitle";
import SectionHeader from "./SectionHeader";
import peopleImg from "../assets/people.svg";

import Paragraph from "./Paragraph";
import TextCard from "./TextCard";

export default function WhyGrove() {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-between">
        <div>
          <Subtitle text="unlocking opportunities for growth" />
          <SectionHeader
            text="Why Choose Grove?"
            width="500px"
            classes="text-black font-poppins font-normal leading-tight mt-1"
          />
        </div>
        <div>
          <Paragraph
            text="Understand the advantages of using Grove for your business, from increased visibility to enhanced customer engagement."
            classes="text-black text-base leading-snug font-poppins"
            width="480px"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-14 gap-x-6 mt-28">
        <TextCard
          img={peopleImg}
          title="Increased Visibility"
          description="Grove helps your business reach a broader audience, ensuring your products are seen by potential customers. "
        />
        <TextCard
          img={peopleImg}
          title="Enhanced Customer Engagement"
          description="With Grove, you can interact directly with your audience, respond to inquiries, and build strong customer relationships."
        />
        <TextCard
          img={peopleImg}
          title="Customizable Business Profiles"
          description="Make your business profile uniquely yours. Customize your page with your branding, including colors, logos, and banners."
        />
        <TextCard
          img={peopleImg}
          title="Easy Product Management"
          description="Grove helps your business reach a broader audience, ensuring your products are seen by potential customers. "
        />
        <TextCard
          img={peopleImg}
          title="Secure Transactions"
          description="Grove ensures that all transactions are secure, providing peace of mind for both sellers and buyers. "
        />
        <TextCard
          img={peopleImg}
          title="Analytics and Insights"
          description="Track your sales, monitor customer behavior, and make data-driven decisions to grow your business."
        />
      </div>
    </div>
  );
}
