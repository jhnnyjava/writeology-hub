
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Course from "@/pages/Course";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";
import LearningMaterials from "@/pages/LearningMaterials";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/learning-materials" element={<LearningMaterials />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
