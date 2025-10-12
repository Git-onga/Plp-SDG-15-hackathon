import { useState, useEffect } from "react";
import { Award, MapPin, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { supabase, Activity } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const { profile } = useAuth();

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const { data, error } = await supabase
        .from("activities")
        .select(
          `
          *,
          profiles (
            full_name,
            avatar_url
          )
        `
        )
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;
      setActivities(data || []);
    } catch (err) {
      console.error("Error fetching activities:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      cleanup: "bg-blue-100 text-blue-700",
      planting: "bg-green-100 text-green-700",
      funding: "bg-amber-100 text-amber-700",
      volunteer: "bg-purple-100 text-purple-700",
    };
    return colors[category] || "bg-slate-100 text-slate-700";
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 h-48"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Recent Conservation Activities
            </h2>
            <p className="text-slate-600">
              See what the community has been up to
            </p>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => (
              <article
                key={activity.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-semibold text-emerald-700">
                        {activity.profiles?.full_name?.charAt(0) || "U"}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-slate-900">
                          {activity.profiles?.full_name || "Anonymous User"}
                        </h3>
                        <span className="text-slate-400">•</span>
                        <span className="text-sm text-slate-600">
                          {formatDate(activity.created_at)}
                        </span>
                        <span
                          className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            activity.category
                          )}`}
                        >
                          {activity.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-slate-700 mb-3">
                        {activity.description}
                      </p>

                      {activity.location && (
                        <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{activity.location}</span>
                        </div>
                      )}

                      {activity.points_earned > 0 && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg mb-4">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-700">
                            +{activity.points_earned} Eco Points
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                        <button className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* User Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Your Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Eco Points</span>
                  <span className="text-2xl font-bold text-emerald-600">
                    {profile?.eco_points || 0}
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                    style={{
                      width: `${Math.min(
                        (profile?.eco_points || 0) / 20,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {profile?.badge_survival || 0}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">Survival</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {profile?.badge_volunteer || 0}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">Volunteer</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {profile?.badge_funding || 0}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">Funding</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-sm p-6 text-white">
            <h3 className="font-semibold mb-2">Ready to make a difference?</h3>
            <p className="text-emerald-50 text-sm mb-4">
              Log your conservation activities and earn eco points!
            </p>
            <button className="w-full bg-white text-emerald-600 font-medium py-2.5 rounded-lg hover:bg-emerald-50 transition-colors">
              Log Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
