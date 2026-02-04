import "./App.css";
import React , {useState} from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Protect from "./components/Protect";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Navbar from "./components/Navbar";
import About from './components/About';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  
  return (
    <>
      {/* //nesting or nested routes  */}
      {/* /dashboard/settings */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="protect" element={<Protect />} />
        </Route>
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child name={name} age={age} setName={setName} setAge={setAge} />} />
 
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

export default App;
