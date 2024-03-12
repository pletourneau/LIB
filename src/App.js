import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import PlaceBet from "./components/PlaceBet";
import ResolveQuestion from "./components/ResolveQuestion";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/place-bet" element={<PlaceBet />} />
          <Route path="/resolve-question" element={<ResolveQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
