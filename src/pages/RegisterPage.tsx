import { useState } from "react";
import loginImage from "../assets/home-page-images/login-image.jpg";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";

const RegisterPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match")
      // return alert();
    }

    try {

      setLoading(true);

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      };

      const res = await registerUser(payload);

      toast.success(res?.message)
      // alert(res.message);

      navigate("/");

    } catch (error: any) {

      // alert(error?.response?.data?.message || "Something went wrong");

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

      {/* FORM */}
      <div className="lg:w-1/2 min-h-screen w-full flex items-center justify-center bg-[#f3f3f3] px-6 py-12">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md"
        >

          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Register
          </h2>

          {/* FIRST LAST NAME */}
          <div className="flex gap-4">

            <div className="mb-4 w-1/2">
              <label className="block text-sm text-gray-700 mb-2">
                First Name
              </label>

              <input
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary text-[16px] font-normal"
              />
            </div>

            <div className="mb-4 w-1/2">

              <label className="block text-sm text-gray-700 mb-2">
                Last Name
              </label>

              <input
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
              />
            </div>

          </div>

          {/* EMAIL */}
          <div className="mb-4">

            <label className="block text-sm text-gray-700 mb-2">
              Email
            </label>

            <input
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
            />

          </div>

          {/* PHONE */}
          <div className="mb-4">

            <label className="block text-sm text-gray-700 mb-2">
              Phone
            </label>

            <input
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-4">

            <label className="block text-sm text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash className="text-primary" /> : <FaEye className="text-primary" />}
              </button>

            </div>

          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-6">

            <label className="block text-sm text-gray-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                name="confirmPassword"
                placeholder="Enter confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-200 focus:ring-2 focus:ring-[#16302C] text-primary"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? <FaEyeSlash className="text-primary" /> : <FaEye className="text-primary" />}
              </button>

            </div>

          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full py-3 bg-[#16302C] text-white rounded-lg hover:bg-[#214541] transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* <Link
            to={"/login"}
            className="text-[#16302C] font-medium hover:underline"
          >
            <p className="text-center text-sm text-gray-600 mt-6">
              Back to{" "}
              Login
            </p>
          </Link> */}

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

        </form>

      </div>
    </div>
  );
};

export default RegisterPage;