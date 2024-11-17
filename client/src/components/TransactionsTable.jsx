import React from 'react'
import '../App.css' 
const TransactionsTable = ({ transactions }) => (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th class="centered-header">Description</th>
          <th class="centered-header">Price</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx._id}>
            <td>{tx.title}</td>
            <td>{tx.description}</td>
            <td>{tx.price}</td>
            <td>{tx.sold ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  export default TransactionsTable;
  