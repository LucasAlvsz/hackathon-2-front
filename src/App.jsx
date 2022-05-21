import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "reset-css"

import StartNow from "./components/StartNow"
import Chat from "./components/Chat"

import Choices from "./../src/pages/Choices"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartNow />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/choice" element={<Choices />} />
      </Routes>
    </BrowserRouter>
  )

