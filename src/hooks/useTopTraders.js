
// src/hooks/useTopTraders.js
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/axios';

export function useTopTraders(date) {
  return useQuery({
    queryKey: ['traders', date],
    queryFn: async () => {
      const [year, month] = date.split('-');
      const response = await api.get(`/top-traders/${year}${month}`);
      return response.data;
    },
  });
}