const StatCard = ({ title, value }:any) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">

      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className="text-2xl font-semibold text-primary mt-2">
        {value}
      </h2>

    </div>
  );
};

export default StatCard;