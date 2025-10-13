import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Auth from "./components/Auth";
import DashboardLayout from "./components/DashboardLayout"; // New
import Progress from "./components/Progress";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import ActivityFeed from "./components/ActivityFeed";
import ParksExplorer from "./components/ParksExplorer";
import ContributionHistory from "./components/ContributionHistory";
import LogActivity from "./components/LogActivity";
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Auth Page */}
          <Route path="/login" element={<Auth />} />

          {/* Protected Routes with layout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ActivityFeed />} />
            <Route path="progress" element={<Progress />} />
            <Route path="parks" element={<ParksExplorer />} />
            <Route path="profile" element={<Profile />} />
            <Route path="log-activity" element={<LogActivity />} />
            <Route path="history" element={<ContributionHistory />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
