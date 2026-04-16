import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MembershipFacilities = ({ membership, nightsUsed, setNightsUsed }:any) => {
  const [usedNights, setUsedNights] = useState(membership?.usedNights || 0);

  const totalNights = membership?.totalNights || 0;

  const remainingNights = totalNights - usedNights;

  const increaseNight = () => {
    if (usedNights < totalNights) {
      setUsedNights(usedNights + 1);
      setNightsUsed(nightsUsed + 1);
    }
  };

  const decreaseNight = () => {
    if (usedNights > 0) {
      setUsedNights(usedNights - 1);
      setNightsUsed(nightsUsed - 1);
    }
  };

  return (

    <div className="bg-white rounded-xl shadow-sm border p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">

        <div>

          <h2 className="text-xl font-semibold text-primary">
            {membership?.membershipPlan?.name}
          </h2>

          <p className="text-sm text-gray-500">
            Membership Details
          </p>

        </div>

        <div className="text-md text-gray-600">
          Price: <span className="font-semibold text-primary">₹{membership?.pricePaid}</span>
        </div>

      </div>

      {/* Nights Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="border rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Total Nights</p>
          <p className="text-xl font-semibold text-primary">{totalNights}</p>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Used Nights</p>
          <p className="text-xl font-semibold text-primary">{usedNights}</p>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Remaining Nights</p>
          <p className="text-xl font-semibold text-green-600">{remainingNights}</p>
        </div>

      </div>

      {/* Night Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">

        <button
          onClick={decreaseNight}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          <FaMinus />
        </button>

        <span className="text-2xl font-semibold">
          {usedNights}
        </span>

        <button
          onClick={increaseNight}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          <FaPlus />
        </button>

      </div>

      {/* Benefits */}
      <div>

        <h3 className="text-md font-semibold text-primary mb-3">
          Membership Benefits
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">

          {membership?.membershipPlan?.benefits?.map((benefit:any, index:any) => (

            <li
              key={index}
              className="text-sm text-gray-600 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {benefit}
            </li>

          ))}

        </ul>

      </div>

    </div>
  );
};

export default MembershipFacilities;