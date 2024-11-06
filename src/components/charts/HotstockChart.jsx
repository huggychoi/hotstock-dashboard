// src/components/charts/HotstockChart.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function HotstockChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="avgReturn" 
          stroke="#3B82F6" 
          name="평균 수익률"
        />
        <Line 
          type="monotone" 
          dataKey="tradersCount" 
          stroke="#10B981" 
          name="참여자 수"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}