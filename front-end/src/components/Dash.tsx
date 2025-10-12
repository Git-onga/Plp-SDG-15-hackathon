import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

export default function Dash() {
 const { user, profile, loading } = useAuth();
 
 type Activity = {
   id: string;
   title: string;
   description: string;
   points_earned: number;
   created_at: string;
   user_id: string;
 };

 type Contribution = {
   id: string;
   type: string;
   description: string;
   impact?: string;
   created_at: string;
   user_id: string;
 };
  const [activities, setActivities] = useState<Activity[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setDataLoading(true);

      const { data: activityData, error: activityError } = await supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      const { data: contributionData, error: contributionError } =
        await supabase
          .from("contributions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

      if (activityError)
        console.error("Error loading activities:", activityError);
      if (contributionError)
        console.error("Error loading contributions:", contributionError);

      setActivities(activityData || []);
      setContributions(contributionData || []);
      setDataLoading(false);
    };

    fetchData();
  }, [user]);

  if (loading || dataLoading) {
    return <div className="p-8 text-center">Loading dashboard...</div>;
  }

  if (!user || !profile) {
    return <div className="p-8 text-center">You are not logged in.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {profile.full_name}!</h1>

      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        {profile.phone && (
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
        )}
        <p>
          <strong>Eco Points:</strong> {profile.eco_points}
        </p>
        <p>
          <strong>Badges:</strong>
        </p>
        <ul className="ml-4 list-disc">
          <li>Survival: {profile.badge_survival}</li>
          <li>Volunteer: {profile.badge_volunteer}</li>
          <li>Funding: {profile.badge_funding}</li>
        </ul>
      </div>

      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Activities</h2>
        {activities.length === 0 ? (
          <p>No activities yet.</p>
        ) : (
          <ul className="space-y-3">
            {activities.map((activity) => (
              <li key={activity.id} className="border-b pb-2">
                <p>
                  <strong>{activity.title}</strong>
                </p>
                <p>{activity.description}</p>
                <p className="text-sm text-gray-500">
                  Points: {activity.points_earned}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Contributions</h2>
        {contributions.length === 0 ? (
          <p>No contributions yet.</p>
        ) : (
          <ul className="space-y-3">
            {contributions.map((contribution) => (
              <li key={contribution.id} className="border-b pb-2">
                <p>
                  <strong>{contribution.type}</strong>
                </p>
                <p>{contribution.description}</p>
                {contribution.impact && (
                  <p className="text-sm text-gray-500">
                    Impact: {contribution.impact}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
