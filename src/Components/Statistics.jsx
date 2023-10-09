import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getLocalstorage } from "../Utilities/localStorage";

const Statistics = () => {
  const prev = getLocalstorage();
  const totalDonations = 12;

  const data = [
    { name: "Your Donations", value: prev.length },
    { name: "Remaining Donation", value: totalDonations - prev.length },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div>
      <div
        className="font-bold text-xs lg:text-lg "
        style={{ width: "100%", height: 500 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-2 mb-5">
        <p>Your Donation</p>
        <div className="badge m-0 md:mr-8 badge-success bg-[#00C49F] "></div>
        <p>Remaining Donation</p>
        <div className="badge badge-error bg-[#FF444A]  gap-2"></div>
      </div>
    </div>
  );
};

export default Statistics;
