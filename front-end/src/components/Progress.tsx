import { Award, TrendingUp, Target, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';


export default function Progress() {
  const { profile } = useAuth();

  const ecoPoints = profile?.eco_points || 0;
  const nextMilestone = 2000;
  const progressPercentage = (ecoPoints / nextMilestone) * 100;
  const [treesPlanted, setTreesPlanted] = useState(0);

  useEffect(() => {
  if (!profile) return;

  const fetchTreesPlanted = async () => {
    const { count, error } = await supabase
      .from('activities')
      .select('*', { count: 'exact', head: true }) // fetch only the count
      .eq('user_id', profile.id)
      .eq('category', 'planting');

    if (error) {
      console.error('Error fetching tree planting count:', error.message);
    } else {
      setTreesPlanted(count || 0);
    }
  };

  fetchTreesPlanted();
}, [profile]);

  
  const stats = [
    {
      label: 'Total Actions',
      value: '23',
      change: '+5 this week',
      icon: Target,
      color: 'bg-blue-500',
    },
    {
      label: 'Trees Planted',
      value: treesPlanted ? treesPlanted.toString() : '0',
      change: 'this month',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      label: 'Active Days',
      value: '156',
      change: 'Streak: 7 days',
      icon: Calendar,
      color: 'bg-amber-500',
    },
    {
      label: 'Badges Earned',
      value: (profile?.badge_survival || 0) + (profile?.badge_volunteer || 0) + (profile?.badge_funding || 0),
      change: '+2 this month',
      icon: Award,
      color: 'bg-purple-500',
    },
  ];

  const badges = [
    { name: 'Survival Expert', count: profile?.badge_survival || 0, color: 'bg-emerald-500' },
    { name: 'Volunteer Hero', count: profile?.badge_volunteer || 0, color: 'bg-blue-500' },
    { name: 'Funding Champion', count: profile?.badge_funding || 0, color: 'bg-amber-500' },
  ];

  const recentAchievements = [
    { title: 'Tree Planter', description: 'Planted 25 trees', date: 'Mar 15' },
    { title: 'Beach Cleanup', description: 'Cleaned 500m of coastline', date: 'Mar 10' },
    { title: 'Water Saver', description: 'Conserved 1000L of water', date: 'Mar 5' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Progress</h1>
        <p className="text-slate-600">Track your environmental impact and achievements</p>
      </div>

      {/* Eco Points Progress */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">{ecoPoints.toLocaleString()} Eco Points</h2>
            <p className="text-emerald-100">Keep going to reach your next milestone!</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <Award className="w-12 h-12" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-emerald-100">Progress to next level</span>
            <span className="font-semibold">{ecoPoints} / {nextMilestone.toLocaleString()}</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
            <p className="text-sm text-emerald-600 mt-3 font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Badges */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Your Badges</h3>
          <div className="space-y-4">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className={`${badge.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{badge.name}</h4>
                  <p className="text-sm text-slate-600">{badge.count} earned</p>
                </div>
                <div className="text-2xl font-bold text-slate-900">{badge.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Achievements</h3>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-slate-900">{achievement.title}</h4>
                    <span className="text-sm text-slate-500">{achievement.date}</span>
                  </div>
                  <p className="text-sm text-slate-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2.5 border-2 border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            View All Achievements
          </button>
        </div>
      </div>

      {/* Monthly Goal */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900">Monthly Goal</h3>
          <span className="text-sm text-slate-600">March 2024</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-700">Complete 30 conservation actions</span>
              <span className="font-semibold text-slate-900">23/30</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                style={{ width: '76%' }}
              />
            </div>
          </div>
          <p className="text-sm text-slate-600">
            Just 7 more actions to reach your monthly goal and earn bonus points!
          </p>
        </div>
      </div>
    </div>
  );
}
