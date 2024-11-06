// src/components/HotstockList.jsx
import { Card } from './ui/card';

export default function HotstockList({ date }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold">주도주 TOP 10</h2>
        {/* 주도주 목록 구현 */}
      </div>
    </Card>
  );
}
