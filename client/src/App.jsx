import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { fetchBarChart, fetchPieChart, fetchStatistics, fetchTransactions } from './api';
import './App.css';

const App = () => {
  const [month, setMonth] = useState('March'); // Default month
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null); // State for pie chart data

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    // Fetch data on month change
    fetchData();
  }, [month, search]);

  const fetchData = async () => {
    const [transactionRes, statsRes, barChartRes, pieChartRes] = await Promise.all([
      fetchTransactions(month, 1, search),
      fetchStatistics(month),
      fetchBarChart(month),
      fetchPieChart(month), // Fetch pie chart data
    ]);
    setTransactions(transactionRes.data);
    setStatistics(statsRes.data);
    setBarChartData(barChartRes.data);
    setPieChartData(pieChartRes.data); // Set pie chart data
  };

  return (
    <>
      <div>
      <header className="unique-header">
        <select
          className="unique-header__select"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <input
          className="unique-header__input"
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

        <Statistics data={statistics} />
        <TransactionsTable transactions={transactions} />
        <div className="charts-container">
          <div className="chart-bar">
            <BarChart data={barChartData} />
          </div>
          <div className="chart-pie">
            <PieChart data={pieChartData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
