"use client"
import { useState } from "react"
import NavigationBar from "../components/NavigationBar"
import MainDashboard from "../components/MainDashboard"
import CourseDetails from "../components/CourseDetails"
import PersonalLibrary from "../components/PersonalLibrary"
import LocalClasses from "../components/LocalClasses"

export default function App() {
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
    <div className="app">
      <NavigationBar onNavigation={handleNavigation} currentPage={currentPage} />
      {currentPage === "home" && <MainDashboard onCourseClick={handleCourseClick} />}
      {currentPage === "course" && <CourseDetails course={selectedCourse} onBack={() => setCurrentPage("home")} />}
      {currentPage === "library" && <PersonalLibrary />}
      {currentPage === "offline" && <LocalClasses />}
    </div>
  )
}
