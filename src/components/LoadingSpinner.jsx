// src/components/LoadingSpinner.jsx
export function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  // HotstockList.jsx와 TopTraders.jsx에 로딩 상태 추가
  import { useHotstockData } from '../hooks/useHotstockData';
  import { LoadingSpinner } from './LoadingSpinner';
  
  export default function HotstockList({ date }) {
    const { data, isLoading } = useHotstockData(date);
  
    return (
      <Card className="overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold">주도주 TOP 10</h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            // 데이터 표시 로직
          )}
        </div>
      </Card>
    );
  }