import { useState } from "react";
import loginImage from "../../assets/home-page-images/login-image.jpg";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import toast from "react-hot-toast";

const AdminLogin = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e:any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const body = {
        loginId: formData?.email,
        password: formData?.password
      }

      const res = await loginUser(body);

      if (res.success) {

        localStorage.setItem("token", res.token);

        navigate("/admin/dashboard");

      }

    } catch (error:any) {

      // alert(error?.response?.data?.message || "Login failed");
      toast.error(error?.response?.data?.message || "Login failed")

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* LEFT IMAGE SECTION */}
      <div
        className="md:w-1/2 w-full h-[40vh] md:h-auto bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${loginImage})`,
        }}
      ></div>

      {/* RIGHT FORM SECTION */}
      <div className="lg:w-1/2 min-h-screen sm:h-full w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-12">
        <div className="w-full max-w-md">

          <Link
            to={"/"}
            className="text-[#16302C] font-medium hover:underline"
          >
            <div className="flex justify-start items-center gap-2 pb-4">
              <FaArrowLeft className="text-primary" />
              <p className="text-center text-sm text-gray-600">
                Back to Home
              </p>
            </div>
          </Link>

          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Admin Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter admin email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#16302C] text-primary"
            />
          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block text-sm text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#16302C] text-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>

            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full py-3 bg-[#16302C] text-white rounded-lg hover:bg-[#214541] transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;