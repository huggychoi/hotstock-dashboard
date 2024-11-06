// src/hooks/useHotstockData.js
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/axios';

export function useHotstockData(date) {
  return useQuery({
    queryKey: ['hotstock', date],
    queryFn: async () => {
      const [year, month] = date.split('-');
      const response = await api.get(`/hotstock/overview/${year}${month}`);
      return response.data;
    },
  });
}
