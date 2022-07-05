import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Index from "./Pages/Index";

const App: React.FC = () => {
  return (
    <Box backgroundColor={'twitter.500'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Box>
  );
};

export default App;
