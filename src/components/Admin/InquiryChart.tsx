import Chart from "react-apexcharts";

const InquiryChart = ({ data, loading }: { data?: number[], loading?: boolean }) => {
  const options: any = {
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
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
    },
    grid: {
      borderColor: "#E0E1E0",
    },
  };

  const series = [
    {
      name: "Inquiries",
       // Agar data nahi aaya toh default 0s pass karenge [0,0,0...]
      data: data || new Array(12).fill(0),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border relative min-h-[380px]">
      <h2 className="text-lg font-semibold text-primary mb-4">
        Monthly Inquiries
      </h2>

      {loading ? (
         <div className="flex items-center justify-center h-[320px] text-gray-500">
           Loading chart data...
        </div>
      ) : (
        <Chart
          options={options}
          series={series}
          type="bar"
          height={320}
        />
      )}
    </div>
  );
};

export default InquiryChart;