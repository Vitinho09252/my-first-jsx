import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home";
import { FeaturesPage } from "./pages/Features"
import { ContactPage } from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App