// src/lib/axios.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // 실제 API 주소로 변경
  headers: {
    'Content-Type': 'application/json',
  },
});