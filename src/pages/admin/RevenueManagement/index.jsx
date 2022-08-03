import React from "react";
import { Row, Col } from "antd";
import Chart from "react-apexcharts";
import Status from "./Status";

function RevenueManagement() {
  const chartOptions = {
    series: [
      {
        name: "Đã Bán",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
      },
      {
        name: "Đã hủy",
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
      },
    ],
    options: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  const status = [
    {
      icon: "fa-solid fa-bag-shopping",
      count: "195",
      title: "Sản phẩm",
    },
    {
      icon: "fa-solid fa-cart-shopping",
      count: "2,001",
      title: "Đơn hàng",
    },
    {
      icon: "fa-solid fa-sack-dollar",
      count: "2,632,000",
      title: "Tổng tiền",
    },
    {
      icon: "fa-solid fa-receipt",
      count: "1,711",
      title: "Tổng đơn hàng",
    },
  ];

  return (
    <>
      <Row>
        <Col span={12}>
          <Row gutter={[32, 32]}>
            {status.map((item, index) => (
              <Col span={12} key={index}>
                <Status
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            height="100%"
          />
        </Col>
      </Row>
    </>
  );
}

export default RevenueManagement;
