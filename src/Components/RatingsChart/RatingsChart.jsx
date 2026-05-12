import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const RatingsChart = ({ ratings }) => {
  const chartData = [...ratings].reverse();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full h-80">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Rating Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }} 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
          />
          
          <Bar 
            dataKey="count" 
            radius={[0, 10, 10, 0]} 
            barSize={12}
          >
            
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#7c3aed' : '#ddd6fe'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;