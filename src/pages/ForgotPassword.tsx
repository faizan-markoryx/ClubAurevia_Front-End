import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/home-page-images/login-image.jpg";
import { forgotPassword } from "../services/authService";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await forgotPassword({ email });

      if (res.success) {

        toast.success(res.message)
        // alert(res.message);

        navigate("/enter-otp", {
          state: { email }
        });

      }

    } catch (error:any) {

      toast.error(error?.response?.data?.message || "Login failed")
      // alert(
      //   error?.response?.data?.message ||
      //   "Something went wrong"
      // );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* LEFT IMAGE */}
      <div
        className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${loginImage})` }}
      />

      {/* RIGHT FORM */}
      <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-12">

        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Forgot Password
          </h2>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="mb-6">

              <label className="block text-sm text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#16302C] text-primary"
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#16302C] text-white rounded-lg hover:bg-[#214541] transition"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

          </form>

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

export default ForgotPassword;