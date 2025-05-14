import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"

import { Home } from "../pages/Home"

export const InventaryRoutes = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="home" element={<Home />} />

                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>
        </>
    )
}
