// src/components/Dashboard.jsx
import { useState } from 'react';
import HotstockList from './HotstockList';
import TopTraders from './TopTraders';
import StatsOverview from './StatsOverview';
import { DatePicker } from './ui/date-picker';

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState('2024-09');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          주도주 분석 대시보드
        </h2>
        <DatePicker 
          value={selectedDate} 
          onChange={setSelectedDate} 
        />
      </div>

      <StatsOverview date={selectedDate} />
      
      <div className="grid md:grid-cols-2 gap-6">
        <HotstockList date={selectedDate} />
        <TopTraders date={selectedDate} />
      </div>
    </div>
  );
}