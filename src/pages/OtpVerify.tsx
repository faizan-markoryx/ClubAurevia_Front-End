import { useRef, useState, type KeyboardEvent } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import loginImage from "../assets/home-page-images/login-image.jpg";
import { verifyOtp } from "../services/authService";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const EnterOtp = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const email = location?.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs: any = useRef([]);

  const handleChange = (value: string, index: number) => {

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }

  };

  const handleVerify = async () => {

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast("Please enter 6 digit OTP")
      // alert("Please enter 6 digit OTP");
      return;
    }

    try {

      const res = await verifyOtp({
        email,
        otp: otpValue
      });

      if (res.success) {

        toast.success("Please enter 6 digit OTP")
        // alert(res.message);

        navigate("/reset-password", {
          state: { email, otp }
        });
        localStorage.setItem("resetEmail", email);
        localStorage.setItem("resetOtp", otpValue);

      }

    } catch (error: any) {

      toast.error(error?.response?.data?.message || "OTP verification failed")
      // alert(
        
      // );

    }

  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* LEFT IMAGE */}
      <div
        className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${loginImage})` }}
      />

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-12">

        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Enter OTP
          </h2>

          <div className="mb-6">

            <label className="block text-sm text-gray-700 mb-4">
              Enter 6 Digit OTP
            </label>

            <div className="flex gap-3 sm:gap-5 justify-center flex-wrap">

              {otp.map((digit, index) => (

                <input
                  key={index}
                  type="text"
                  value={digit}
                  maxLength={1}
                  ref={(el:any) => (inputs.current[index] = el)}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  text-xl
                  text-center
                  font-semibold
                  rounded-lg
                  bg-gray-200
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#16302C]
                  focus:border-[#16302C]
                  transition
                  text-primary
                  "
                />

              ))}

            </div>

          </div>

          <button
            onClick={handleVerify}
            className="w-full py-3 bg-[#16302C] text-white rounded-lg hover:bg-[#214541] transition mx-1"
          >
            Verify OTP
          </button>

         <Link
            to={"/login"}
            className="text-[#16302C] font-medium hover:underline"
          >
            <div className="flex justify-center items-center gap-2 py-4 cursor-pointer">
              <div>
                <FaArrowLeft className="text-primary" />
              </div>

              <p className="text-center text-sm text-gray-600">
                Back to{" "} Login
              </p>
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default EnterOtp;