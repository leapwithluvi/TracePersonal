import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./pages/Users";
import Teams from "./pages/Teams";
import Roles from "./pages/Roles";
import Challenges from "./pages/Challenges";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import EditTeam from "./pages/EditTeam";
import AddTeam from "./pages/AddTeam";
import AddRole from "./pages/AddRole";
import EditRole from "./pages/EditRole";
import AddChallenge from "./pages/AddChallenge";
import TopIndividuals from "./pages/TopIndividuals";
import TopTeams from "./pages/TopTeams";
import Profiles from "./pages/Profiles";
import ChallengeDetail from "./pages/ChallengeDetail";
import EditChallenge from "./pages/EditChallenge";
import ChallengeItem from "./pages/CardChallenges";
import AllUsers from "./pages/AllUsers";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/profile/:id" element={<Profiles />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/teams/edit/:id" element={<EditTeam />} />
          <Route path="/teams/add" element={<AddTeam />} />
          <Route path="/roles/add" element={<AddRole />} />
          <Route path="/roles/edit/:id" element={<EditRole />} />
          <Route path="/challenge/add" element={<AddChallenge />} />
          <Route path="/challenge/edit/:id" element={<EditChallenge />} />
          <Route path="/top-individuals" element={<TopIndividuals />} />
          <Route path="/top-teams" element={<TopTeams />} />
          <Route path="/challenges/:id" element={<ChallengeDetail />} />
          <Route path="/all-users" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
