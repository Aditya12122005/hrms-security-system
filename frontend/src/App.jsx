import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import EmployeesPage from "./pages/EmployeesPage"
import AttendancePage from "./pages/AttendancePage"
import PayrollPage from "./pages/PayrollPage"
import LeavePage from "./pages/LeavePage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import VerifyOtpPage from "./pages/VerifyOtpPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"

import DashboardLayout from "./layouts/DashboardLayout"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LANDING PAGE */}

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                {/* LOGIN PAGE */}

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                {/* DASHBOARD */}

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute
                            allowedRoles={[
                                "SUPER_ADMIN",
                                "HR_ADMIN",
                                "EMPLOYEE"
                            ]}
                        >

                            <DashboardLayout />

                        </ProtectedRoute>
                    }
                >

                    {/* DASHBOARD HOME */}

                    <Route

                        index

                        element={

                            <ProtectedRoute
                                allowedRoles={[
                                    "SUPER_ADMIN",
                                    "HR_ADMIN"
                                ]}
                            >

                                <DashboardPage />

                            </ProtectedRoute>
                        }
                    />

                    {/* EMPLOYEES */}

                    <Route

                        path="employees"

                        element={

                            <ProtectedRoute
                                allowedRoles={[
                                    "SUPER_ADMIN",
                                    "HR_ADMIN"
                                ]}
                            >

                                <EmployeesPage />

                            </ProtectedRoute>
                        }
                    />

                    {/* ATTENDANCE */}

                    <Route

                        path="attendance"

                        element={

                            <ProtectedRoute
                                allowedRoles={[
                                    "SUPER_ADMIN",
                                    "HR_ADMIN",
                                    "EMPLOYEE"
                                ]}
                            >

                                <AttendancePage />

                            </ProtectedRoute>
                        }
                    />

                    {/* PAYROLL */}

                    <Route

                        path="payroll"

                        element={

                            <ProtectedRoute
                                allowedRoles={[
                                    "SUPER_ADMIN",
                                    "HR_ADMIN"
                                ]}
                            >

                                <PayrollPage />

                            </ProtectedRoute>
                        }
                    />

                    {/* LEAVES */}

                    <Route

                        path="leaves"

                        element={

                            <ProtectedRoute
                                allowedRoles={[
                                    "SUPER_ADMIN",
                                    "HR_ADMIN",
                                    "EMPLOYEE"
                                ]}
                            >

                                <LeavePage />

                            </ProtectedRoute>
                        }
                    />

                </Route>
                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />

                <Route
                    path="/verify-otp"
                    element={<VerifyOtpPage />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPasswordPage />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default App