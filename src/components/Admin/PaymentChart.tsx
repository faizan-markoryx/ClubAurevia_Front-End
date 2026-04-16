import Chart from "react-apexcharts";

const PaymentChart = () => {

  const options:any = {
    chart: {
      id: "payment-chart",
      toolbar: {
        show: false,
      },
    },
    colors: ["#16302C"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
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
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    grid: {
      borderColor: "#E0E1E0",
    },
  };

  const series = [
    {
      name: "Payments",
      data: [
        20000,
        35000,
        30000,
        50000,
        45000,
        60000,
        70000,
        55000,
        80000,
        75000,
        90000,
        95000,
      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">

      <h2 className="text-lg font-semibold text-primary mb-4">
        Monthly Payments
      </h2>

      <Chart
        options={options}
        series={series}
        type="area"
        height={320}
      />

    </div>
  );
};

export default PaymentChart;