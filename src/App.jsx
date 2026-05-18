import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [aiText, setAiText] = useState("");

  const skills = [
    "React JS",
    "JavaScript",
    "Java",
    "Python",
    "API Testing",
    "AI Tools",
    "Data Analytics",
    "GitHub",
    "Node JS"
  ];

  const projects = [
    {
      title: "Battery Terminal Detection",
      description:
        "AI-powered battery terminal detection system using Raspberry Pi and camera module.",
      tech: "Python • AI • Raspberry Pi"
    },
    {
      title: "React API Application",
      description:
        "Modern React application with Axios API integration and responsive UI.",
      tech: "React • Axios • JavaScript"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website with dark mode and AI features.",
      tech: "React • CSS • Vite"
    }
  ];

  const appStyle = {
    background: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
      : "#f8fafc",
    color: darkMode ? "white" : "#111827",
    minHeight: "100vh",
    fontFamily: "Arial",
    transition: "0.5s"
  };

  const sectionStyle = {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const cardStyle = {
    background: darkMode
      ? "rgba(255,255,255,0.05)"
      : "white",
    padding: "30px",
    borderRadius: "25px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    transition: "0.4s",
    border: darkMode
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid #e5e7eb"
  };

  const buttonStyle = {
    padding: "14px 24px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    background: "#38bdf8",
    color: "#0f172a",
    fontSize: "15px"
  };

  const titleStyle = {
    color: "#38bdf8",
    marginBottom: "20px",
    fontSize: "40px"
  };

  return (

    <div style={appStyle}>

      {/* NAVBAR */}

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backdropFilter: "blur(10px)",
          background: darkMode
            ? "rgba(15,23,42,0.7)"
            : "rgba(255,255,255,0.8)"
        }}
      >

        <h2 style={{ color: "#38bdf8" }}>
          Kanishkumar
        </h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap"
          }}
        >

          {["home", "about", "skills", "projects", "contact"].map((item) => (

            <a
              key={item}
              href={`#${item}`}
              style={{ textDecoration: "none" }}
            >

              <button style={buttonStyle}>
                {item.toUpperCase()}
              </button>

            </a>

          ))}

          <button
            style={{
              ...buttonStyle,
              background: darkMode ? "#facc15" : "#111827",
              color: darkMode ? "black" : "white"
            }}
            onClick={() => setDarkMode(!darkMode)}
          >

            {darkMode ? "Light" : "Dark"}

          </button>

        </div>

      </nav>

      {/* HERO */}

      <section
        id="home"
        style={{
          ...sectionStyle,
          textAlign: "center",
          paddingTop: "120px"
        }}
      >

        <h1
          style={{
            fontSize: "70px",
            marginBottom: "15px"
          }}
        >
          Hi, I'm Kanishkumar
        </h1>

        <h2
          style={{
            color: "#38bdf8",
            marginBottom: "25px"
          }}
        >
          React Developer • AI Enthusiast • Data Analytics
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "20px"
          }}
        >
          Final year Electronics and Communication Engineering student
          passionate about React development, AI technologies,
          analytics, automation systems, and modern web applications.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <a
            href="https://github.com/kanishkumar"
            target="_blank"
            rel="noreferrer"
          >

            <button style={buttonStyle}>
              View GitHub
            </button>

          </a>

          <a href="mailto:kanishkumar940@gmail.com">

            <button
              style={{
                ...buttonStyle,
                background: "transparent",
                color: "#38bdf8",
                border: "2px solid #38bdf8"
              }}
            >
              Contact Me
            </button>

          </a>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" style={sectionStyle}>

        <div style={cardStyle}>

          <h1 style={titleStyle}>
            About Me
          </h1>

          <p
            style={{
              lineHeight: "1.9",
              fontSize: "18px"
            }}
          >
            I am an enthusiastic engineering student interested in
            React development, AI technologies, frontend design,
            analytics, and smart automation systems.
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.9",
              fontSize: "18px"
            }}
          >
            Career Objective:
            To build innovative software products and improve
            my technical expertise in modern technologies.
          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" style={sectionStyle}>

        <h1 style={titleStyle}>
          Skills
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >

          {skills.map((skill, index) => (

            <div
              key={index}
              style={{
                padding: "16px 28px",
                background: darkMode
                  ? "#1e293b"
                  : "#e0f2fe",
                borderRadius: "40px",
                border: "1px solid #38bdf8",
                fontWeight: "bold",
                transition: "0.3s"
              }}
            >

              {skill}

            </div>

          ))}

        </div>

      </section>

      {/* AI FEATURE */}

      <section style={sectionStyle}>

        <div style={cardStyle}>

          <h1 style={titleStyle}>
            AI Introduction Generator
          </h1>

          <button
            style={buttonStyle}
            onClick={() =>
              setAiText(
                "Kanishkumar is a passionate React developer and AI enthusiast focused on creating intelligent and modern web applications."
              )
            }
          >
            Generate AI Intro
          </button>

          <p
            style={{
              marginTop: "25px",
              lineHeight: "1.8",
              fontSize: "18px"
            }}
          >
            {aiText}
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" style={sectionStyle}>

        <h1 style={titleStyle}>
          Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px"
          }}
        >

          {projects.map((project, index) => (

            <div key={index} style={cardStyle}>

              <h2>
                {project.title}
              </h2>

              <p
                style={{
                  lineHeight: "1.8",
                  marginTop: "15px"
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  color: "#38bdf8",
                  marginTop: "15px"
                }}
              >
                {project.tech}
              </p>

              <button
                style={{
                  ...buttonStyle,
                  marginTop: "20px"
                }}
              >
                View Project
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" style={sectionStyle}>

        <div style={cardStyle}>

          <h1 style={titleStyle}>
            Contact
          </h1>

          <p style={{ fontSize: "18px" }}>
            📧 kanishkumar940@gmail.com
          </p>

          <p style={{ fontSize: "18px" }}>
            💻 github.com/kanishkumar
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            <a href="mailto:kanishkumar940@gmail.com">

              <button style={buttonStyle}>
                Send Email
              </button>

            </a>

            <a
              href="https://github.com/kanishkumar"
              target="_blank"
              rel="noreferrer"
            >

              <button style={buttonStyle}>
                GitHub Profile
              </button>

            </a>

          </div>

        </div>

      </section>

    </div>

  );

}

export default App;