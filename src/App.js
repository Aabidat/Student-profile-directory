import { useState } from "react";
import Header from "./Header";
import ProfileList from "./Profilelist";
import Footer from "./Footer";
import "./App.css";
const initialStudents =[
  {
    id:1,
    name: "Amin Fareed",
    track: "Frontend Development",
    bio: "passionate about building perfect UIs and interactive web experiences. ",
    skillLevel: "Beginner",
    isActive: true,
  },

   {
    id:2,
    name: "Faqeeh Shaahidah",
    track: "Backend Development",
    bio: "Building robust APIs and scalable database architectures for mordern apps. ",
    skillLevel: "Advanced",
    isActive: false,
   },

   {
     id:3,
    name: "Alhassan Hamdia",
    track: "UI/UX Design",
    bio: "Translating complex user needs into clean, intuitive digital experiences.",
    skillLevel: "Advanced",
    isActive: false,
   },

   {
     id:4,
    name: "Nurudeen Hairia",
    track: "Data Science",
    bio: "Turning raw datasets into actionable insights using python and ML models.",
    skillLevel: "Intermediate",
    isActive: false,
   },

   {
     id:5,
    name: "Mohammad Haneeya",
    track: "Mobile Development",
    bio: "Shipping cross-platform mobile apps with React Native and Flutter. ",
    skillLevel: "Beginner",
    isActive: false,
   },

   {
     id:1,
    name: "Mohammed Abdul-Haleem",
    track: "Cloud and DevOps",
    bio: "Automating deployment pipelines and managing cloud infrastructure at scale. ",
    skillLevel: "Intermediate",
    isActive: false,
   }
];

function App() {
  const [students, setStudents] = useState(initialStudents);

 function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  return (
  <div className="App">
    <Header totalStudents={students.length} />

    <main className="main">
       <h1 className="page-title">Student Profiles</h1>
        <p className="page-subtitle">Manage and track your cohort's progress</p>
        <ProfileList students={students} onToggle={toggleActive} />
    </main>

     <Footer students={students} />
  </div>
 );
}


  


export default App;