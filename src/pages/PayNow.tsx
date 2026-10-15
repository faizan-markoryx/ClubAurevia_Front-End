// import { useState } from "react";
// import loginImage from "../assets/home-page-images/login-image.jpg";
// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import { createPayment, verifyPayment } from "../services/paymentService";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const PayNow = () => {

//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     package: "",
//     amount: "",
//     message: ""
//   });

//   const handleChange = (e: any) => {

//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handlePayment = async () => {

//     try {

//       setLoading(true);

//       // 1️⃣ Create Payment Order
//       const order = await createPayment(formData);

//       const options = {
//         key: order.key,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Club Aurevia",
//         description: "Member Payment",
//         order_id: order.orderId,

//         handler: async function (response: any) {

//           try {

//             const verify = await verifyPayment({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature
//             });

//             if (verify.success) {

              
//               alert("Payment Successful");

//             } else {

//               alert("Payment verification failed");

//             }

//           } catch (error) {

//             alert("Verification error");

//           }
//         },

//         prefill: {
//           name: formData.firstName + " " + formData.lastName,
//           email: formData.email,
//           contact: formData.phone
//         },

//         theme: {
//           color: "#16302C"
//         }
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.open();

//     } catch (error) {

//       console.log(error);
//       alert("Payment failed to initiate");

//     } finally {

//       setLoading(false);

//     }

//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col md:flex-row">

//       <div
//         className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
//         style={{ backgroundImage: `url(${loginImage})` }}
//       ></div>

//       <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-6">

//         <div className="w-full max-w-md">

//           <Link to={"/"} className="text-[#16302C] font-medium hover:underline">

//             <div className="flex justify-start items-center gap-2 pb-3">
//               <FaArrowLeft />
//               <p className="text-sm text-gray-600">Back</p>
//             </div>

//           </Link>

//           <div className="flex justify-center items-center">

//             <h2 className="text-2xl font-semibold text-gray-800 mb-5">
//               Member Payment Page
//             </h2>

//           </div>

//           <div className="flex gap-4">

//             <div className="mb-4 w-1/2">

//               <label className="block text-sm text-gray-700 mb-2">
//                 First Name
//               </label>

//               <input
//                 name="firstName"
//                 placeholder="Enter first name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//               />

//             </div>

//             <div className="mb-4 w-1/2">

//               <label className="block text-sm text-gray-700 mb-2">
//                 Last Name
//               </label>

//               <input
//                 name="lastName"
//                 placeholder="Enter last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//               />

//             </div>

//           </div>

//           <div className="mb-3">

//             <label className="block text-sm text-gray-700 mb-2">
//               Email Address
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email address"
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//             />

//           </div>

//           <div className="mb-3">

//             <label className="block text-sm text-gray-700 mb-2">
//               Phone Number
//             </label>

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter phone number"
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//             />

//           </div>

//           <div className="mb-3">

//             <label className="block text-sm text-gray-700 mb-2">
//               Tour Package Name
//             </label>

//             <select
//               onChange={handleChange}
//               name="package"
//               className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//             >

//               <option className="text-primary" value="">Select</option>
//               <option className="text-primary" value="elite-stays">Elite Stays</option>
//               <option className="text-primary" value="signature-escapes">Signature Escapes</option>
//               <option className="text-primary" value="curated-destinations">Curated Destinations</option>

//             </select>

//           </div>

//           <div className="mb-3">

//             <label className="block text-sm text-gray-700 mb-2">
//               Amount to Pay
//             </label>

//             <input
//               type="number"
//               name="amount"
//               placeholder="Enter amount to pay"
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//             />

//           </div>

//           <div className="mb-3">

//             <label className="block text-sm text-gray-700 mb-2">
//               Special Request
//             </label>

//             <textarea
//               rows={3}
//               name="message"
//               placeholder="Enter special request"
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-200 text-primary"
//             ></textarea>

//           </div>

//           <button
//             onClick={handlePayment}
//             disabled={loading}
//             className="w-full py-3 bg-[#16302C] text-white rounded-lg"
//           >
//             {loading ? "Processing..." : "Pay Now"}
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default PayNow;











// @ts-ignore
import { load } from "@cashfreepayments/cashfree-js";
import { useState } from "react";
import loginImage from "../assets/home-page-images/login-image.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";

const PayNow = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    package: "",
    amount: "",
    message: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePayment = async () => {
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone || !formData.amount) {
      alert("Please fill all the required fields.");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Backend ko data bhej kar Order Create karein (Cashfree payment_session_id laayein)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/payments/create-order`, formData);

      if (response.data.success && response.data.payment_session_id) {
        
        // 2️⃣ Cashfree SDK Initialize karein
        const cashfree = await load({
          mode: "production", // Production me live karne ke liye isko "production" kar dena
        });

        // 3️⃣ Cashfree Checkout trigger karein
        const checkoutOptions = {
          paymentSessionId: response.data.payment_session_id,
          redirectTarget: "_self", // "_self" page ko redirect karega, popup ke liye "_modal" use karein
        };

        // Ye line execute hote hi user Cashfree ke secure payment page par chala jayega
        cashfree.checkout(checkoutOptions);

      } else {
        alert("Failed to get payment session from server.");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Payment failed to initiate. Please check your backend connection.");
    } finally {
      // setLoading false yaha optional hai agar '_self' redirect use kar rahe hain
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div
        className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>

      <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-6">
        <div className="w-full max-w-md">
          <Link to={"/"} className="text-[#16302C] font-medium hover:underline">
            <div className="flex justify-start items-center gap-2 pb-3">
              <FaArrowLeft />
              <p className="text-sm text-gray-600">Back</p>
            </div>
          </Link>

          <div className="flex justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Member Payment Page
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label className="block text-sm text-gray-700 mb-2">
                First Name
              </label>
              <input
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
              />
            </div>

            <div className="mb-4 w-1/2">
              <label className="block text-sm text-gray-700 mb-2">
                Last Name
              </label>
              <input
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email address"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Enter phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-2">
              Tour Package Name
            </label>
            <select
              onChange={handleChange}
              name="package"
              value={formData.package}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
            >
              <option className="text-[#16302C]" value="">Select</option>
              <option className="text-[#16302C]" value="elite-stays">Elite Stays</option>
              <option className="text-[#16302C]" value="signature-escapes">Signature Escapes</option>
              <option className="text-[#16302C]" value="curated-destinations">Curated Destinations</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-2">
              Amount to Pay
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              placeholder="Enter amount to pay"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-2">
              Special Request
            </label>
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              placeholder="Enter special request"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#16302C]"
            ></textarea>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full py-3 bg-[#16302C] text-white rounded-lg transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayNow;