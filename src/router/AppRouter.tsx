import { Route, Routes } from "react-router-dom"

import { Login } from "../features/auth/pages/Login"
import { Register } from "../features/auth/pages/Register"
import { InventaryRoutes } from "../features/inventory/routes/InventaryRoutes"

export const AppRouter = () => {
    return (

        <>
            <Routes>

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="/*" element={<InventaryRoutes />} />

            </Routes>
        </>


    )
}
