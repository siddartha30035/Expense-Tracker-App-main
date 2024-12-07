import React, { useState } from "react";

const Budgetpage = () => {
  const [categoryLimits, setCategoryLimits] = useState({
    Savings: 1000,
    Investments: 500,
    Groceries: 200,
    Utilities: 150,
    Transportation: 100,
    Entertainment: 300,
    Healthcare: 250,
    DiningOut: 150,
    Education: 200,
    Others: 100,
  });

  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const predefinedCategories = [
    "Savings",
    "Investments",
    "Groceries",
    "Utilities",
    "Transportation",
    "Entertainment",
    "Healthcare",
    "DiningOut",
    "Education",
    "Others",
  ];

  const handleSetLimit = () => {
    if (category && limit) {
      setCategoryLimits((prev) => ({
        ...prev,
        [category]: parseFloat(limit),
      }));
      setCategory("");
      setLimit("");
    }
  };

  const totalBudget = Object.values(categoryLimits).reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ fontSize: "30px", color: "#1F4529", marginBottom: "10px" }}>
         BUDGET MANAGEMENT PAGE
      </h1>
      <h2 sx={{fontSize:"3px"}}>set your budget limts</h2>
      <div style={{ marginBottom: "10px" }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "5px",
            marginRight: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            width: "120px",
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
          type="number"
          placeholder="Limit (₹)"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          style={{
            padding: "5px",
            marginRight: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            width: "100px",
          }}
        />
        <button
          onClick={handleSetLimit}
          style={{
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Set Limit
        </button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <h2 style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}>
          Category Limits
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "5px",
                  borderBottom: "1px solid #ccc",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Category
              </th>
              <th
                style={{
                  padding: "5px",
                  borderBottom: "1px solid #ccc",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Limit (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categoryLimits).map((cat) => (
              <tr key={cat}>
                <td
                  style={{
                    padding: "5px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {cat}
                </td>
                <td
                  style={{
                    padding: "5px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  ₹{categoryLimits[cat].toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "15px" }}>
        <h2 style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>
          Total Budget
        </h2>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#4CAF50",
          }}
        >
          ₹{totalBudget.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Budgetpage;
