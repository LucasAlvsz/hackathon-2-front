import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "reset-css";

import StartNow from "./components/assets/StartNow"

export default function App() {
	return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartNow />} />
            </Routes>
        </BrowserRouter>
	)
}
