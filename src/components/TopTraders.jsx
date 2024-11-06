// src/components/TopTraders.jsx
import { Card } from './ui/card';

export default function TopTraders({ date }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold">상위 트레이더</h2>
        {/* 트레이더 목록 구현 */}
      </div>
    </Card>
  );
}