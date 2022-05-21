import { BrowserRouter, Routes, Route } from "react-router-dom"

import ChoicesPage from "../pages/Choices"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/choices" element={<ChoicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
