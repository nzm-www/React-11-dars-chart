import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import data from "../../assets/grafik.json";

function grafik() {
  const [grafikData, setgrafikData] = useState({ labels: [], series: [] });

  useEffect(() => {
    function fetchData() {
      fetch(data)
        .then((response) => response.json())
        .then(function (data) {
          const labels = data.map(function (item) {
            return item.date;
          });
          const values = data.map(function (item) {
            return item.value;
          });

          setChartData({
            labels: labels,
            course: [{ course: values, label: "Series A", stack: "total" }],
          });
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }

    fetchData();
  }, []);

  const seriesB = {
    data: [3, 1, 4, 2, 1],
    label: "Series B",
    stack: "total",
  };
  const seriesC = {
    data: [3, 2, 4, 5, 1],
    label: "Series C",
    stack: "total",
  };

  return (
    <BarChart
      width={1200}
      height={600}
      series={[...grafikData.series, seriesB, seriesC]}
    />
  );
}

export default grafik;
