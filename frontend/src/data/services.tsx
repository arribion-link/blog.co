import { MdOutlineContentPasteGo } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { LiaDigitalTachographSolid } from "react-icons/lia";

type blogserivice = {
  id: number;
  title: string;
  description: string;
  icon?: JSX.Element;
};

export const services: blogserivice[] = [
  {
    id: 1,
    title: "Content Publishing",
    description:
      "We deliver regular blog posts on lifestyle, tech, travel, food, and personal development to keep you informed and inspired.",
    icon: <MdOutlineContentPasteGo size={50} />,
  },
  {
    id: 2,
    title: "Commenting & Community",
    description:
      "Join the conversation—share your thoughts, connect with others, and be part of a growing community of curious minds.",
    icon: <IoIosPeople size={50} />,
  },
  {
    id: 3,
    title: "Newsletter Subscription",
    description:
      "Subscribe to receive curated updates, exclusive content, and the latest blog highlights straight to your inbox.",
    icon: <FaRegNewspaper size={50} />,
  },
  {
    id: 4,
    title: "Affiliate Marketing",
    description:
      "Explore recommended products and services through affiliate links that help support our blog while offering you value.",
    icon: <MdOutlineSendTimeExtension size={50} />,
  },
  {
    id: 5,
    title: "Sponsored Posts",
    description:
      "We collaborate with brands to bring you sponsored content that aligns with your interests and our values.",
    icon: <BsCash size={50} />,
  },
  {
    id: 6,
    title: "Ad Placement",
    description:
      "Our blog features relevant ads (Google AdSense, banners) to generate revenue while keeping your experience smooth.",
    icon: <FaPhotoVideo size={50} />,
  },
  {
    id: 7,
    title: "Digital Products",
    description:
      "Access downloadable resources like eBooks, templates, and online courses crafted to help you grow and learn.",
    icon: <LiaDigitalTachographSolid size={50} />,
  },
];

export default services;
