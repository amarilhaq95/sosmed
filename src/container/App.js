import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userpage from './users';
import Postpage from "./posts";
import Albumpage from "./albums";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Userpage />} />
        <Route exact path="/posts" element={<Postpage />} />
        <Route exact path="/album" element={<Albumpage />} />
      </Routes>
    </Router>
  );
}

export default App;