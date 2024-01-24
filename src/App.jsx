import React from "react";
import Jobs from "./Jobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "./Job";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Jobs />} />
        <Route exact path="/job/:jobId" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
