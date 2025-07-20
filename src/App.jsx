import { useState } from "react";
import Login from "./components/Login";
import Reveal from "./components/Reveal";
import Loading from "./components/Loading";

export default function App() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSetStudent = (data) => {
    setLoading(true);
    setTimeout(() => {
      setStudent(data);
      setLoading(false);
    }, 500);
  };

  const goBack = () => setStudent(null);

  if (loading) return <Loading />;
  if (student) return <Reveal student={student} goBack={goBack} />;
  return <Login setStudent={handleSetStudent} />;
}