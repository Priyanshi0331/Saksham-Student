"use client"

import { useState } from "react"
import "./HomePage.css"

const HomePage = ({ onCourseClick }) => {
  const [activeCategory, setActiveCategory] = useState("New")

  const categories = ["New", "Trending", "Popular", "Top Courses"]

  const courses = [
    { id: 1, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
    { id: 2, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
    { id: 3, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
    { id: 4, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
    { id: 5, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
    { id: 6, title: "Marketing", image: "/api/placeholder/200/120", rating: "72%" },
  ]

  const recommendedCourses = [
    { id: 7, title: "Marketing", image: "/api/placeholder/200/120" },
    { id: 8, title: "Marketing", image: "/api/placeholder/200/120" },
    { id: 9, title: "Marketing", image: "/api/placeholder/200/120" },
    { id: 10, title: "Marketing", image: "/api/placeholder/200/120" },
    { id: 11, title: "Marketing", image: "/api/placeholder/200/120" },
    { id: 12, title: "Marketing", image: "/api/placeholder/200/120" },
  ]

  return (
    <div className="home-page">
      <div className="categories">
        <button className="nav-arrow left">←</button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
        <button className="nav-arrow right">→</button>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card" onClick={() => onCourseClick(course)}>
            <div className="course-image">
              <img src={course.image || "/placeholder.svg"} alt={course.title} />
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <span className="rating">{course.rating}</span>
            </div>
            <button className="view-btn">View</button>
          </div>
        ))}
      </div>

      <h2 className="section-title">RECOMMENDED FOR YOU</h2>

      <div className="recommended-grid">
        {recommendedCourses.map((course) => (
          <div key={course.id} className="course-card" onClick={() => onCourseClick(course)}>
            <div className="course-image">
              <img src={course.image || "/placeholder.svg"} alt={course.title} />
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
            </div>
            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
