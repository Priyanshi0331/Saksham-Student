"use client"

import { useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import CoursePage from "./components/CoursePage"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    setCurrentPage("course")
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Header onNavigation={handleNavigation} />
      {currentPage === "home" && <HomePage onCourseClick={handleCourseClick} />}
      {currentPage === "course" && <CoursePage course={selectedCourse} />}
    </div>
  )
}

export default App
