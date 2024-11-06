import { useHotstockData } from '../hooks/useHotstockData';
import { Card } from './ui/card';
import { TrendingUp, Users, Activity, Calendar } from 'lucide-react';

export default function StatsOverview({ date }) {
  const { data, isLoading } = useHotstockData(date);

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse h-32">
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="mt-4 h-8 bg-gray-200 rounded w-1/2"></div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  const stats = data?.summary || {};

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">분석 종목</h3>
              <p className="mt-2 text-3xl font-semibold">{stats.totalStocks}</p>
            </div>
            <TrendingUp className="text-blue-500" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">참여 트레이더</h3>
              <p className="mt-2 text-3xl font-semibold">{stats.totalTraders}</p>
            </div>
            <Users className="text-green-500" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">평균 수익률</h3>
              <p className="mt-2 text-3xl font-semibold">
                {stats.avgReturn?.toFixed(2)}%
              </p>
            </div>
            <Activity className="text-indigo-500" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">분석 기간</h3>
              <p className="mt-2 text-3xl font-semibold">{date}</p>
            </div>
            <Calendar className="text-purple-500" />
          </div>
        </div>
      </Card>
    </div>
  );
}