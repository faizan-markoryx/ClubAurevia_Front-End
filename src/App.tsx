import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import {
//   ForgetPassword,
//   EnterOtp,
//   ResetPassword,
//   Register,
// } from "./pages/AuthPages"
import {
  Home
} from "./pages/MainPages"
import { PublicLayout } from "./layouts/PublicLayout"
import { AuthLayout } from "./layouts/AuthLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import AboutUs from "./pages/AboutUs"
import Destination from "./pages/Destination"
import Services from "./pages/Services"
import Membership from "./pages/Membership"
import ContactUs from "./pages/ContactUs"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import EnterOtp from "./pages/OtpVerify"
import PayNow from "./pages/PayNow"
import AdminLogin from "./pages/admin-pages/AdminLogin"
import AdminDashboard from "./pages/admin-pages/AdminDashboard"
import Users from "./pages/admin-pages/Users"
import ManageMembership from "./pages/admin-pages/ManageMembership"
import AllPayments from "./pages/admin-pages/AllPayments"
import TripInquiry from "./pages/admin-pages/TripInquiry"
import CustomerDashboard from "./pages/CustomerDashboard"
import { CustomerLayout } from "./layouts/CustomerLayout"
import { Toaster } from "react-hot-toast"

type ProtectedRouteProps = {
  children: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const isAuthenticated = false
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enter-otp" element={<EnterOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pay-now" element={<PayNow />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>


        <Route element={<CustomerLayout />}>
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Route>


        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/payments"
            element={
              <ProtectedRoute>
                <AllPayments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-account/:userID"
            element={
              <ProtectedRoute>
                <ManageMembership />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/trip-inquiry"
            element={
              <ProtectedRoute>
                <TripInquiry />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

