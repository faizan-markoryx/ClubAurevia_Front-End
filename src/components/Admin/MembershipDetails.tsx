// import AdminLayout from "../layout/AdminLayout";

const MembershipDetails = () => {

  return (
    <>

      <h1 className="text-2xl font-semibold text-primary mb-6">
        Membership Details
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl border shadow-sm">

          <h2 className="font-semibold text-lg mb-4">
            Available Facilities
          </h2>

          <ul className="space-y-2 text-sm">

            <li>5 Hotel Stays</li>
            <li>3 Flight Discounts</li>
            <li>2 Free Spa</li>

          </ul>

        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">

          <h2 className="font-semibold text-lg mb-4">
            Used Facilities
          </h2>

          <ul className="space-y-2 text-sm">

            <li>2 Hotel Stays Used</li>
            <li>1 Flight Discount Used</li>

          </ul>

        </div>

      </div>

    </>
  );
};

export default MembershipDetails;