import { useState, useEffect } from 'react';
import { Leaf, LogOut, User, Map, TrendingUp, History } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ActivityFeed from './ActivityFeed';
import Progress from './Progress';
import ParksExplorer from './ParksExplorer';
import Profile from './Profile';
import ContributionHistory from './ContributionHistory';

type View = 'dashboard' | 'progress' | 'parks' | 'profile' | 'history';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">EcoEngage</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-600">Welcome back</p>
                <p className="font-semibold text-slate-900">{profile?.full_name}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title="Sign out"
              >
                <LogOut className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                currentView === 'dashboard'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('progress')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                currentView === 'progress'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Your Progress
            </button>
            <button
              onClick={() => setCurrentView('parks')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                currentView === 'parks'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Map className="w-4 h-4" />
              Explore Parks
            </button>
            <button
              onClick={() => setCurrentView('profile')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                currentView === 'profile'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              Profile
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                currentView === 'history'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-4 h-4" />
              History
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentView === 'dashboard' && <ActivityFeed />}
        {currentView === 'progress' && <Progress />}
        {currentView === 'parks' && <ParksExplorer />}
        {currentView === 'profile' && <Profile />}
        {currentView === 'history' && <ContributionHistory />}
      </main>
    </div>
  );
}
