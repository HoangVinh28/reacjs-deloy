import React, { useState } from "react";
import { Button, Table } from "antd";

const columns = [
  {
    title: "Vé đã bán",
    dataIndex: "sold",
    key: "sold",
  },
  {
    title: "Vé hoàn trả",
    dataIndex: "refund",
    key: "refund",
  },
  {
    title: "Doanh thu tháng",
    dataIndex: "revenue",
    key: "revenue",
  },
];

const data = [
  { sold: 120, refund: 20, revenue: "50 triệu" },
  { sold: 130, refund: 15, revenue: "60 triệu" },
  { sold: 100, refund: 30, revenue: "45 triệu" },
];

export default function App() {
  const [tableData, setTableData] = useState(data);
  const [activeButton, setActiveButton] = useState("sold");

  const handleSoldClick = () => {
    setActiveButton("sold");
    const newData = [
      { sold: 120, refund: 20, revenue: "50 triệu" },
      { sold: 130, refund: 15, revenue: "60 triệu" },
      { sold: 100, refund: 30, revenue: "45 triệu" },
    ];
    setTableData(newData);
  };

  const handleRevenueClick = () => {
    setActiveButton("revenue");
    const newData = [
      { sold: 60, refund: 10, revenue: "15 triệu" },
      { sold: 70, refund: 20, revenue: "25 triệu" },
      { sold: 80, refund: 5, revenue: "20 triệu" },
    ];
    setTableData(newData);
  };

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <Button
          style={{ marginRight: "1rem" }}
          type={activeButton === "sold" ? "primary" : "default"}
          onClick={handleSoldClick}
        >
          Thống kê theo số lượng
        </Button>
        <Button
          type={activeButton === "revenue" ? "primary" : "default"}
          onClick={handleRevenueClick}
        >
          Thống kê theo doanh thu
        </Button>
      </div>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
}