import { Route, Routes } from "react-router-dom";
import { Frontpage } from "./Frontpage";
import { Hiragana } from "./pages/Hiragana";
import { Katakana } from "./pages/Katakana";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/hiragana" element={<Hiragana />} />
      <Route path="/katakana" element={<Katakana />} />
    </Routes>
  );
}

export default App;
