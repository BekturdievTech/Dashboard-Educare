import { RiBubbleChartFill } from "react-icons/ri";

export default function Totals() {
  const NumData = [
    {
      title: "Almashinuv Posts",
      icon: "",
      count: 560,
    },
    {
      title: "Amaliyotlar Posts",
      icon: "",
      count: 1040,
    },
    {
      title: "Grantlar Posts",
      icon: "",
      count: 230,
    },
    {
      title: "Konferensiya Posts",
      icon: "",
      count: 710,
    },
    {
      title: "Stipendiya Posts",
      icon: "",
      count: 470,
    },
    {
      title: "Tanlovlar Posts",
      icon: "",
      count: 250,
    },
  ];
  return (
    <div className="flex justify-start gap-5 items-center flex-wrap">
      {NumData.map((item, index) => (
        <div
          key={index}
          className="w-[300px] p-4 rounded-lg h-[130px] flex flex-col justify-between"
          style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
        >
          <div className="flex justify-start items-center gap-[10px]">
            <div
              className="w-[40px] h-[40px] p-[10px] rounded-md"
              style={{ background: "rgba(162, 161, 168, 0.05)" }}
            >
              <RiBubbleChartFill size={20} color="#7152F3" />
            </div>
            {item.title}
          </div>
          <h4 className="text-[30px] font-semibold">{item.count}</h4>
        </div>
      ))}
    </div>
  );
}
