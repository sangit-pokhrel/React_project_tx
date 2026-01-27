import "./App.css";
import ABout from "./components/ABout";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Protect from "./components/Protect";

function App() {
  return (
    <>
      {/* //nesting or nested routes  */}
      {/* /dashboard/settings */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ABout />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="protect" element={<Protect />} />
        </Route>

        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

export default App;
