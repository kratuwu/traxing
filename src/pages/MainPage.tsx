import TopicVoter from "../components/TopicVoter";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mt-[15vh] mx-[100px] mb-[100px]">
      <h1 className="m-[50px]">
        <span className="text-[2.5em]">อยากให้</span>
        <span className="mx-[30px] text-[4.5em]">ภาษี</span>
        <span className="text-[2.5em]">ไปไหน?</span>
      </h1>
      <div className="flex justify-between">
        {topic.map((item) => {
          return (
            <TopicVoter key={item.id} name={item.name} color={item.color} />
          );
        })}
      </div>
      <div className="text-center my-[50px]">
        <Link to="/summary">ดูผลโหวต</Link>
      </div>
    </div>
  );
}

const topic = [
  {
    id: "education",
    name: "การศึกษา",
    color: "#9a4dff",
  },
  {
    id: "economic",
    name: "เศรษฐกิจ",
    color: "#4d5bff",
  },
  {
    id: "farm",
    name: "การเกษตร",
    color: "#4dd6ff",
  },
  {
    id: "health",
    name: "สาธารณสุข",
    color: "#4dffc5",
  },
  {
    id: "transport",
    name: "คมนาคม",
    color: "#ffe94e",
  },
  {
    id: "tech",
    name: "เทคโนโลยี",
    color: "#ffa447",
  },
  {
    id: "environment",
    name: "สิ่งแวดล้อม",
    color: "#ff6947",
  },
  {
    id: "security",
    name: "ความมั่นคง",
    color: "#ff4747",
  },
  {
    id: "justice",
    name: "ยุติธรรม",
    color: "#999",
  },
];
