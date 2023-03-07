import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { LandingLayout, Layout } from "./components";
import { About, Home, Login, Services } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<LandingLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
