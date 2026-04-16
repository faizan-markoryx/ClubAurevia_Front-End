import Chart from "react-apexcharts";

const InquiryChart = () => {

  const options = {
    chart: {
      id: "inquiry-chart",
      toolbar: {
        show: false,
      },
    },
    colors: ["#16302C"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
      },
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
      name: "Inquiries",
      data: [
        12,
        18,
        10,
        22,
        15,
        25,
        30,
        28,
        35,
        32,
        40,
        45,
      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">

      <h2 className="text-lg font-semibold text-primary mb-4">
        Monthly Inquiries
      </h2>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={320}
      />

    </div>
  );
};

export default InquiryChart;