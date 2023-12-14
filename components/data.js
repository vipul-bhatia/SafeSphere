import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Simplify Compliance",
  desc: "SafeSphere simplifies the completion of Data Protection Impact Assessment (DPIA), providing a user-friendly experience. It features clickable displays, automatic field completion, customizable drop-down lists, quick document searches, and adaptable filters for streamlined data management.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Effortless Data Entry",
      desc: "Navigate fields easily with clickable displays and automatically filled information.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Enhance Efficiency",
      desc: "Improve your workflow with customizable drop-down lists and quick document searches.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Tailored Data Management",
      desc: "Adapt and filter lists for efficient data tracking within SafeSphere.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


const benefitTwo = {
  title: "Effortless Compliance Management",
  desc: "Simplify compliance by easily selecting your business field. Receive tailored questions for data compliance and generate reports highlighting areas that need attention.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Website",
      desc: "SafeSphere is designed as a mobile-first responsive website.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Comprehensive Compliance Reports",
      desc: "Effortlessly generate detailed reports pinpointing areas of non-compliance, empowering proactive adherence to data protection standards.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Tailored Compliance Questions",
      desc: "Select your business field and receive specific, targeted questions for streamlined data compliance assessment.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
