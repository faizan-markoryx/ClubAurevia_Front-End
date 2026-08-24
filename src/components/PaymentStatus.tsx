// import { useEffect, useState } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

// const PaymentStatus = () => {
//   const [searchParams] = useSearchParams();
//   const orderId = searchParams.get("order_id"); // URL se order_id nikalna
  
//   // State: 'verifying' (default), 'success', ya 'failed'
//   const [status, setStatus] = useState("verifying");

//   useEffect(() => {
//     // Agar URL me order_id hi nahi hai, toh direct fail dikhao
//     if (!orderId) {
//       setStatus("failed");
//       return;
//     }

//     const verifyPaymentRecord = async () => {
//       try {
//         // Backend ke verify API ko call karein (URL apne backend ka rakhein)
//         const response = await axios.post("http://localhost:5000/api/payments/verify-payment", {
//           orderId: orderId,
//         });

//         // Backend directly Cashfree se verify karke batayega
//         if (response.data.success && response.data.status === "SUCCESS") {
//           setStatus("success");
//         } else {
//           setStatus("failed");
//         }
//       } catch (error) {
//         console.error("Verification Error:", error);
//         setStatus("failed"); // Network error ya DB error pe fail dikhao
//       }
//     };

//     // Component load hote hi verification function call karein
//     verifyPaymentRecord();
//   }, [orderId]);

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        
//         {/* State 1: Verifying */}
//         {status === "verifying" && (
//           <div className="flex flex-col items-center">
//             <FaSpinner className="animate-spin text-5xl text-[#16302C] mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-800">Verifying Payment...</h2>
//             <p className="text-gray-500 mt-2">Please do not close or refresh this page.</p>
//           </div>
//         )}

//         {/* State 2: Success */}
//         {status === "success" && (
//           <div className="flex flex-col items-center">
//             <FaCheckCircle className="text-6xl text-green-500 mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-800">Payment Successful!</h2>
//             <p className="text-gray-500 mt-2 mb-6">
//               Thank you! Your payment has been received and verified successfully.
//               <br />
//               <span className="text-sm">Order ID: {orderId}</span>
//             </p>
//             <Link 
//               to="/" 
//               className="px-6 py-3 bg-[#16302C] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all w-full block"
//             >
//               Back to Home
//             </Link>
//           </div>
//         )}

//         {/* State 3: Failed */}
//         {status === "failed" && (
//           <div className="flex flex-col items-center">
//             <FaTimesCircle className="text-6xl text-red-500 mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-800">Payment Failed</h2>
//             <p className="text-gray-500 mt-2 mb-6">
//               Unfortunately, your payment could not be processed or verified. Please try again.
//               <br />
//               {orderId && <span className="text-sm">Order ID: {orderId}</span>}
//             </p>
//             <div className="flex flex-col w-full gap-3">
//               <Link 
//                 to="/pay-now" 
//                 className="px-6 py-3 bg-[#16302C] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all w-full block"
//               >
//                 Try Again
//               </Link>
//               <Link 
//                 to="/" 
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all w-full block"
//               >
//                 Contact Support
//               </Link>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default PaymentStatus;













import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaSpinner, FaWhatsapp, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [status, setStatus] = useState("verifying");
  
  // Reference for screenshot capture
  const printRef = useRef<HTMLDivElement>(null);
  
  const adminWhatsAppNumber = "918141112016";

  useEffect(() => {
    if (!orderId) {
      setStatus("failed");
      return;
    }

    const verifyPaymentRecord = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/payments/verify-payment", {
          orderId: orderId,
        });

        if (response.data.success && response.data.status === "SUCCESS") {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        setStatus("failed");
      }
    };

    verifyPaymentRecord();
  }, [orderId]);

  // Function to download screenshot
  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          scale: 2, // High resolution
          backgroundColor: "#ffffff",
        });
        
        const dataImage = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `Payment_Status_${orderId || "unknown"}.png`;
        link.href = dataImage;
        link.click();
      } catch (error) {
        console.error("Error capturing screenshot:", error);
      }
    }
  };

  // Function to share on WhatsApp
  const handleWhatsAppShare = () => {
    let message = "";
    
    if (status === "success") {
      message = `Hello Admin, I have successfully made a payment.\n*Order ID:* ${orderId}\n*Status:* SUCCESS\nPlease check and update my membership.`;
    } else {
      message = `Hello Admin, my payment attempt failed.\n*Order ID:* ${orderId}\n*Status:* FAILED\nCan you please help me with this?`;
    }

    const url = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-10">
      <div className="max-w-md w-full">
        
        {/* Is div ka reference lenge screenshot ke liye */}
        <div 
          ref={printRef} 
          className="bg-white rounded-t-xl rounded-b-lg shadow-lg p-8 text-center border-b-4 border-[#16302C]"
        >
          {/* State 1: Verifying */}
          {status === "verifying" && (
            <div className="flex flex-col items-center py-6">
              <FaSpinner className="animate-spin text-5xl text-[#16302C] mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800">Verifying Payment...</h2>
              <p className="text-gray-500 mt-2">Please do not close or refresh this page.</p>
              {orderId && <p className="text-sm font-medium text-gray-400 mt-4">Order ID: {orderId}</p>}
            </div>
          )}

          {/* State 2: Success */}
          {status === "success" && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaCheckCircle className="text-5xl text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Payment Successful!</h2>
              <p className="text-gray-500 mt-2 mb-4">
                Thank you! Your payment has been received and verified successfully.
              </p>
              <div className="bg-gray-50 border rounded-lg p-3 w-full mb-2 text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Transaction Details</p>
                <p className="text-sm text-gray-800"><span className="font-medium">Order ID:</span> {orderId}</p>
                <p className="text-sm text-gray-800"><span className="font-medium">Date:</span> {new Date().toLocaleDateString('en-IN')}</p>
                <p className="text-sm text-green-600 font-medium mt-1">Status: COMPLETED</p>
              </div>
            </div>
          )}

          {/* State 3: Failed */}
          {status === "failed" && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FaTimesCircle className="text-5xl text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Payment Failed</h2>
              <p className="text-gray-500 mt-2 mb-4">
                Unfortunately, your payment could not be processed or verified.
              </p>
              <div className="bg-gray-50 border rounded-lg p-3 w-full mb-2 text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Transaction Details</p>
                <p className="text-sm text-gray-800"><span className="font-medium">Order ID:</span> {orderId || "N/A"}</p>
                <p className="text-sm text-gray-800"><span className="font-medium">Date:</span> {new Date().toLocaleDateString('en-IN')}</p>
                <p className="text-sm text-red-600 font-medium mt-1">Status: FAILED</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons (Screenshot ke bahar rakhe hain taaki print me na aaye) */}
        {status !== "verifying" && (
          <div className="mt-4 flex flex-col gap-3">
            
            <div className="flex gap-3">
              {/* Download Screenshot Button */}
              <button 
                onClick={handleDownloadImage}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-sm"
              >
                <FaDownload /> Save Receipt
              </button>

              {/* WhatsApp Share Button */}
              <button 
                onClick={handleWhatsAppShare}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20b958] transition-all shadow-sm"
              >
                <FaWhatsapp className="text-lg" /> Send to Admin
              </button>
            </div>

            {/* Navigation Button */}
            {status === "success" ? (
              <Link 
                to="/" 
                className="px-6 py-3 bg-[#16302C] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all w-full text-center block shadow-sm"
              >
                Back to Home
              </Link>
            ) : (
              <Link 
                to="/pay-now" 
                className="px-6 py-3 bg-[#16302C] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all w-full text-center block shadow-sm"
              >
                Try Again
              </Link>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentStatus;