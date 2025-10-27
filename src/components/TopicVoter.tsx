import React from "react";
import education from "./img/education.png";
import economic from "./img/economic.png";
import agriculture from "./img/agriculture.png";
import medical from "./img/medical.png";
import transportation from "./img/transportation.png";
import technology from "./img/technology.png";
import environment from "./img/environment.png";
import security from "./img/security.png";
import justice from "./img/justice.png";
import defaultLogo from "./img/default.png";
const logoMap: Record<string, string> = {
  การศึกษา: education,
  เศรษฐกิจ: economic,
  การเกษตร: agriculture,
  สาธารณสุข: medical,
  คมนาคม: transportation,
  เทคโนโลยี: technology,
  สิ่งแวดล้อม: environment,
  ความมั่นคง: security,
  ยุติธรรม: justice,
};

interface TopicVoterProps {
  name: string;
  color: string;
}

const TopicVoter: React.FC<TopicVoterProps> = ({ name, color }) => {
  const logo: string = logoMap[name] || defaultLogo;
  
  return (
    <div className="w-[120px] text-center">
      <div className="text-sm md:text-base">{name}</div>
      <div
        className="min-h-[300px] my-2.5"
        style={{ background: color || "white" }}
      ></div>
      <div>
        <img src={logo} alt={name} className="w-[80px] h-[80px]" />
      </div>
    </div>
  );
};

export default TopicVoter;
