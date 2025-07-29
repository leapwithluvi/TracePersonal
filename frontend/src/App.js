import { BrowserRouter, Routes, Route } from "react-router";
// login & register
import Login from "./components/Login";
import Register from "./components/Register";

// profile
import Profiles from "./pages/Profiles";

// home
import Home from "./pages/Home";

// challenges
import Challenges from "./pages/Challenges";
import MissionLayout from "./pages/MissionLayout";
import DescLayout from "./pages/DescLayout";

// search user
import AllUsers from "./pages/AllUsers";

// daily log
import DailyLogPage from "./pages/DailyLogPage";
import AddDailyLog from "./pages/AddDailyLog";
import DailyLogDetail from "./components/DailyLogDetail";

// leaderboard
import Leaderboard from "./pages/Leaderboard";
import TopTeams from "./pages/TopTeams";

// work
import Work from "./pages/work";

// datas: user, team, role, challenge
// user
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

// team
import Teams from "./pages/Teams";
import EditTeam from "./pages/EditTeam";
import AddTeam from "./pages/AddTeam";

// role
import Roles from "./pages/Roles";
import AddRole from "./pages/AddRole";
import EditRole from "./pages/EditRole";

// challenge
import AddChallenge from "./pages/AddChallenge";
import ChallengeDetail from "./pages/ChallengeDetail";
import EditChallenge from "./pages/EditChallenge";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login & Register */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* profile */}
          <Route path="/profile" element={<Profiles />} />
          <Route path="/profile/:id" element={<Profiles />} />

          {/* home */}
          <Route path="/home" element={<Home />} />

          {/* Challenges */}
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/:id/mission" element={<MissionLayout />} />
          <Route path="/challenges/:id/overview" element={<DescLayout />} />
          {/* <Route path="/challenges/:id" element={<ChallengeDetail />} /> */}


          {/* search users */}
          <Route path="/all-users" element={<AllUsers />} />

          {/* daily log */}
          <Route path="/daily-log" element={<DailyLogPage />} />
          <Route path="/daily-log/add" element={<AddDailyLog />} />
          <Route path="/daily-log/:id/detail" element={<DailyLogDetail />} />

          {/* Leaderboards */}
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/leaderboards/top-teams" element={<TopTeams />} />

          {/* Work */}
          <Route path="/work" element={<Work />} />


          {/* Datas: User, Team, Role, Challenge */}
          {/* user */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          {/* team */}
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/add" element={<AddTeam />} />
          <Route path="/teams/edit/:id" element={<EditTeam />} />

          {/* role */}
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/add" element={<AddRole />} />
          <Route path="/roles/edit/:id" element={<EditRole />} />

          {/* Challenge */}
          <Route path="/challenge/add" element={<AddChallenge />} />
          <Route path="/challenge/edit/:id" element={<EditChallenge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
