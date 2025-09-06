import "./CoursePage.css"

const CoursePage = ({ course }) => {
  const courses = [
    {
      id: 1,
      title: "Marketing",
      description:
        "Learn the basics of digital marketing including SEO, social media marketing, and content creation. This comprehensive course will teach you everything you need to know about modern marketing strategies.",
      image: "/api/placeholder/200/120",
    },
    {
      id: 2,
      title: "Knitting",
      description:
        "Master the art of knitting with this beginner-friendly course. Learn basic stitches, patterns, and techniques to create beautiful handmade items.",
      image: "/api/placeholder/200/120",
    },
    {
      id: 3,
      title: "Knitting",
      description:
        "Advanced knitting techniques for experienced crafters. Explore complex patterns, colorwork, and professional finishing methods.",
      image: "/api/placeholder/200/120",
    },
    {
      id: 4,
      title: "Knitting",
      description:
        "Specialty knitting course focusing on sweaters and garments. Learn construction techniques and fitting for professional results.",
      image: "/api/placeholder/200/120",
    },
  ]

  return (
    <div className="course-page">
      <div className="course-header">
        <h1>Marketing</h1>
        <span className="course-count">10 courses</span>
      </div>

      <div className="course-list">
        {courses.map((courseItem) => (
          <div key={courseItem.id} className="course-item">
            <div className="course-item-image">
              <img src={courseItem.image || "/placeholder.svg"} alt={courseItem.title} />
            </div>
            <div className="course-item-content">
              <h3>{courseItem.title}</h3>
              <p>{courseItem.description}</p>
              <button className="view-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursePage
