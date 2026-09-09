import Features from "../Features";

const FeaturesList = () => {
  const courses = [
    {
      title: "Web Development",
      category: "Programming",
      description: "Belajar membuat website menggunakan HTML, CSS, dan JavaScript."
    },
    {
      title: "Database System",
      category: "Database",
      description: "Mempelajari cara menyimpan dan mengelola data menggunakan database."
    },
    {
      title: "Mobile Development",
      category: "Mobile",
      description: "Mengenal proses pembuatan aplikasi mobile menggunakan React Native."
    },
    {
      title: "Computer Network",
      category: "Networking",
      description: "Mempelajari dasar jaringan komputer dan komunikasi antar perangkat."
    }
  ];

  return (
    <section className="courses" id="courses">
      <h2>Popular Courses</h2>

      <p className="section-text">
        Pilih materi yang ingin kamu pelajari.
      </p>

      <div className="course-list">
        {courses.map((course, index) => (
          <Features
            key={index}
            title={course.title}
            category={course.category}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;