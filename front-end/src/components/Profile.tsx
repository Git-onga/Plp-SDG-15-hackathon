import { Award, Mail, Phone, Edit } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { profile } = useAuth();

  const badges = [
    {
      name: "Survival Expert",
      count: profile?.badge_survival || 0,
      color: "from-emerald-500 to-teal-500",
      description: "Wildlife conservation and habitat protection",
    },
    {
      name: "Volunteer Hero",
      count: profile?.badge_volunteer || 0,
      color: "from-blue-500 to-cyan-500",
      description: "Community service and volunteer work",
    },
    {
      name: "Funding Champion",
      count: profile?.badge_funding || 0,
      color: "from-amber-500 to-orange-500",
      description: "Environmental funding and donations",
    },
  ];

  const stats = [
    { label: "Total Points", value: profile?.eco_points || 0 },
    { label: "Actions Taken", value: "23" },
    { label: "Trees Planted", value: "47" },
    { label: "CO2 Offset", value: "3,370 kg" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="h-32 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        <div className="px-8 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16">
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-lg border-4 border-white flex items-center justify-center">
                <span className="text-5xl font-bold text-emerald-600">
                  {profile?.full_name?.charAt(0) || "A"}
                </span>
              </div>
              <div className="pb-2">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  {profile?.full_name || "Alex Green"}
                </h1>
                <p className="text-slate-600">Environmental Advocate</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="w-5 h-5" />
              <span>{profile?.email || "alex@example.com"}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Phone className="w-5 h-5" />
              {/* <span>+1 (555) 420-6969</span> */}
              <span>{profile?.phone || "+1 (555) 420-6969"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
          >
            <p className="text-sm text-slate-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900">
              {stat.value.toLocaleString()}
          </p>
          
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Your Badges</h2>
          <span className="text-sm text-slate-600">
            {(profile?.badge_survival || 0) +
              (profile?.badge_volunteer || 0) +
              (profile?.badge_funding || 0)}{" "}
            total
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-slate-700" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{badge.name}</h3>
              <p className="text-2xl font-bold text-emerald-600 mb-2">
                {badge.count}
              </p>
              <p className="text-sm text-slate-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eco Achievements */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Eco Achievements
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-slate-900">Tree Planter</h3>
                <span className="text-sm text-slate-500">Level 5</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Planted 47 trees in conservation areas
              </p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                3 more trees to reach Level 6
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-slate-900">Beach Guardian</h3>
                <span className="text-sm text-slate-500">Level 3</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Cleaned 1.2km of coastline
              </p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                800m more to reach Level 4
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-slate-900">Water Saver</h3>
                <span className="text-sm text-slate-500">Level 4</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Conserved 3,370 liters of water
              </p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: "67%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                1,630L more to reach Level 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
