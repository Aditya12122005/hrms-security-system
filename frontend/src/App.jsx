import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import EmployeesPage from "./pages/EmployeesPage"

import DashboardLayout from "./layouts/DashboardLayout"


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardLayout />}
                >

                    <Route
                        index
                        element={<DashboardPage />}
                    />

                    <Route
                        path="employees"
                        element={<EmployeesPage />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default App