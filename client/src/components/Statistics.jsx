import React from 'react';
import '../App.css'

const Statistics = ({ data }) => (
  <section className="statistics">
    <h2 className="statistics__title">Monthly Statistics</h2>
    <table className="statistics__table">
      <thead>
        <tr>
          <th>Metric</th>
          <th class="centered-header">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Sales</td>
          <td>${data?.totalSalesAmount || 0}</td>
        </tr>
        <tr>
          <td>Sold Items</td>
          <td>{data?.totalSoldItems || 0}</td>
        </tr>
        <tr>
          <td>Unsold Items</td>
          <td>{data?.totalNotSoldItems || 0}</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Statistics;
