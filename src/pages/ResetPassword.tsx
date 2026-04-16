import { useState } from "react";
import loginImage from "../assets/home-page-images/login-image.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from "../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async () => {

    if (password !== confirmPassword) {
      // alert("Passwords do not match");
      toast.error("Passwords do not match")
      return;
    }

    try {

      setLoading(true);

      const email = localStorage.getItem("resetEmail");
      const otp = localStorage.getItem("resetOtp");

      const res = await resetPassword({
        email,
        otp,
        password
      });

      // alert(res.message || "Password reset successful");
      toast.success(res.message || "Password reset successful")

      navigate("/login")

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("resetOtp");

    } catch (error:any) {

      toast.success(error?.response?.data?.message || "Something went wrong")
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

      <div
        className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${loginImage})` }}
      />

      <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-12">

        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Reset Password
          </h2>

          {/* New Password */}
          <div className="mb-4">

            <label className="block text-sm text-gray-700 mb-2">
              New Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          {/* Confirm Password */}
          <div className="mb-6">

            <label className="block text-sm text-gray-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 bg-[#16302C] text-white rounded-lg hover:bg-[#214541] transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default ResetPassword;