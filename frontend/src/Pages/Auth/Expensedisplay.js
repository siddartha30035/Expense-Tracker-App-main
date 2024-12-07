import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Expensedisplay = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  const predefinedCategories = [
    "Savings",
    "Investments",
    "Groceries",
    "Utilities",
    "Transportation",
    "Entertainment",
    "Healthcare",
    "Dining Out",
    "Education",
    "Others",
  ];

  const handleAddExpense = () => {
    const selectedCategory = customCategory || category;
    if (amount && selectedCategory) {
      setExpenses((prev) => [
        ...prev,
        { category: selectedCategory, amount: parseFloat(amount) },
      ]);
      setAmount("");
      setCategory("");
      setCustomCategory("");
    }
  };

  const categories = expenses.reduce((acc, { category, amount }) => {
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#4DC0C0",
          "#A066FF",
          "#FF5733",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#4DC0C0",
          "#A066FF",
          "#FF5733",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "30px auto",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Expense Tracker</h1>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100px",
            }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "150px",
            }}
          >
            <option value="">Select Category</option>
            {predefinedCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Custom Category (Optional)"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "150px",
            }}
          />
          <button
            onClick={handleAddExpense}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Expense
          </button>
        </div>
        <div style={{ marginTop: "30px", maxWidth: "500px", margin: "0 auto" }}>
          <Pie
            data={chartData}
            options={{
              maintainAspectRatio: false,
            }}
            width={400} // Optimized for laptops
            height={400}
          />
        </div>
      </div>

      <div
        style={{
          width: "40%",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#333" }}>Expenses Summary</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  borderBottom: "2px solid #ddd",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Category
              </th>
              <th
                style={{
                  padding: "10px",
                  borderBottom: "2px solid #ddd",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Amount (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categories).map((category) => (
              <tr key={category}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {category}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  ₹{categories[category].toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expensedisplay;
