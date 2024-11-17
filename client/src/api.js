import axios from 'axios';

const API_BASE = 'http://localhost:3000/api'; 

export const fetchTransactions = (month, page = 1, search = '') =>
  axios.get(`${API_BASE}/transactions`, { params: { month, page, search } });

export const fetchStatistics = (month) =>
    axios.get(`${API_BASE}/statistics/${month}`);
  
  export const fetchBarChart = (month) =>
    axios.get(`${API_BASE}/sales/price-range/${month}`);
  
  export const fetchCategoryItems = (month) =>
    axios.get(`${API_BASE}/sales/category-items/${month}`);
  
  export const fetchCombinedData = (month) =>
    axios.get(`${API_BASE}/sales/combined-data/${month}`);

export const fetchPieChart = (month) =>
  axios.get(`${API_BASE}/sales/category-items/${month}`);
