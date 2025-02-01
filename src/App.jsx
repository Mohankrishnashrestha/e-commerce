import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Information from "./pages/Information";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:info" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
