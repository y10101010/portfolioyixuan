import { HashRouter, Routes, Route } from "react-router-dom";
import { Source } from "../Source";
import { Home, About, Contact, Projects, Design, Visual, Illustration, Others, DesignDetails, IllustrationDetails, OtherDetails, VisualDetails } from "../pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Source />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="design" element={<Design />} />
            <Route path="visual" element={<Visual />} />
            <Route path="Illustration" element={<Illustration />} />
            <Route path="others" element={<Others />} />
          </Route>
          <Route path="projectDetails">
            <Route path="designDetails/:id" element={<DesignDetails />} />
            <Route path="illustrationDetails/:id" element={<IllustrationDetails />} />
            <Route path="otherDetails/:id" element={<OtherDetails />} />
            <Route path="visualDetails/:id" element={<VisualDetails />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
