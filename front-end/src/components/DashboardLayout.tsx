// DashboardLayout.tsx
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LogOut, Leaf, User, Map, TrendingUp, History } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardLayout() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">EcoEngage</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-slate-600">Welcome back</p>
              <p className="font-semibold text-slate-900">
                {profile.full_name}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 hover:bg-slate-100 rounded-lg"
              title="Sign out"
            >
              <LogOut className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex gap-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 font-medium border-b-2 ${
                isActive
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/progress"
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 font-medium border-b-2 flex items-center gap-2 ${
                isActive
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <TrendingUp className="w-4 h-4" />
            Progress
          </NavLink>
          <NavLink
            to="/dashboard/parks"
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 font-medium border-b-2 flex items-center gap-2 ${
                isActive
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <Map className="w-4 h-4" />
            Parks
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 font-medium border-b-2 flex items-center gap-2 ${
                isActive
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <User className="w-4 h-4" />
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/history"
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 font-medium border-b-2 flex items-center gap-2 ${
                isActive
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <History className="w-4 h-4" />
            History
          </NavLink>
        </div>
      </nav>

      {/* Routed content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
