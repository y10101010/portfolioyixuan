import { Route, Routes } from 'react-router-dom';
import { Source } from '../Source';
import { Home, About, Contact, Design, Ilustration } from '../pages';

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<Source />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="design" element={<Design />} />
      <Route path="ilustration" element={<Ilustration />} />
    </Route>
  </Routes>
);
