import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
 
} from 'recharts';
import { useState } from 'react';

const data = [
  { month: 'Jan', projects: 72, revenue: 50, active: 25 },
  { month: 'Feb', projects: 80, revenue: 65, active: 22 },
  { month: 'Mar', projects: 70, revenue: 55, active: 40 },
  { month: 'Apr', projects: 100, revenue: 75, active: 28 },
  { month: 'May', projects: 48, revenue: 50, active: 24 },
  { month: 'Jun', projects: 100, revenue: 58, active: 31 },
  { month: 'Jul', projects: 78, revenue: 45, active: 18 },
  { month: 'Aug', projects: 75, revenue: 68, active: 39 },
  { month: 'Sep', projects: 92, revenue: 70, active: 25 },
  { month: 'Oct', projects: 30, revenue: 48, active: 20 },
  { month: 'Nov', projects: 74, revenue: 50, active: 33 },
  { month: 'Dec', projects: 100, revenue: 42, active: 26 },
];

const ProjectsOverviewCard = () => {
  const [activeTab, setActiveTab] = useState('Week');

  return (
    <div className="xl:col-span-8 bg-white p-4 rounded-xl shadow border ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Projects Overview</h2>
        <div className="flex gap-2">
          {['Week', 'Month', 'Year', 'All'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeTab === tab
                  ? 'bg-purple-700 text-white shadow'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              formatter={(value) => {
                if (value === 'projects') return 'Number of Projects';
                if (value === 'revenue') return 'Revenue';
                if (value === 'active') return 'Active Projects';
                return value;
              }}
            />
            {/* Bar */}
            <Bar dataKey="projects" fill="#4B2991" barSize={20} radius={[4, 4, 0, 0]} />
            {/* Revenue Line (area-like with opacity) */}
            <Line type="monotone" dataKey="revenue" stroke="#34D399" strokeWidth={2} dot={false} />
            {/* Active Projects (dashed line) */}
            <Line
              type="monotone"
              dataKey="active"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-4 border-t mt-4  text-center text-sm text-gray-600 font-medium">
        <div className='border-x-2'>
          <p className="text-lg text-black font-bold">12,721</p>
          <p>Number of Projects</p>
        </div>
        <div className='border-r-2'>
          <p className="text-lg text-black font-bold">721</p>
          <p>Active Projects</p>
        </div>
        <div className='border-r-2'>
          <p className="text-lg text-black font-bold">$2,50,523</p>
          <p>Revenue</p>
        </div>
        <div className='border-r-2'>
          <p className="text-lg text-emerald-500 font-bold">12,275h</p>
          <p>Working Hours</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverviewCard;
